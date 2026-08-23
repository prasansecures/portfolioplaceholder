import { useEffect } from 'react';

const revealAll = (els) => els.forEach((el) => el.classList.add('in'));

export function useReveal() {
  useEffect(() => {
    const els = [...document.querySelectorAll('.rv')];

    if (typeof IntersectionObserver !== 'function') {
      revealAll(els);
      return undefined;
    }

    let obs;
    try {
      obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('in');
              obs.unobserve(e.target);
            }
          });
        },
        { rootMargin: '0px 0px -8% 0px' }
      );

      els.forEach((el, i) => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.style.transitionDelay = i * 70 + 'ms';
        }
        obs.observe(el);
      });
    } catch (err) {
      console.error('Reveal animation disabled; showing content immediately.', err);
      if (obs) obs.disconnect();
      revealAll(els);
      return undefined;
    }

    const failsafe = setTimeout(() => revealAll(els), 2500);

    return () => {
      obs.disconnect();
      clearTimeout(failsafe);
    };
  }, []);
}
