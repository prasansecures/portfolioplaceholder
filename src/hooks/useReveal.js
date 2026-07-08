import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
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

    const els = [...document.querySelectorAll('.rv')];
    els.forEach((el, i) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.style.transitionDelay = i * 70 + 'ms';
      }
      obs.observe(el);
    });

    const failsafe = setTimeout(() => els.forEach((el) => el.classList.add('in')), 2500);

    return () => {
      obs.disconnect();
      clearTimeout(failsafe);
    };
  }, []);
}
