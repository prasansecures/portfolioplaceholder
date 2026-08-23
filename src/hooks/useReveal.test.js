import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useReveal } from './useReveal';

let instances;

class MockIntersectionObserver {
  constructor(callback, options) {
    this.callback = callback;
    this.options = options;
    this.observed = [];
    this.unobserved = [];
    this.disconnected = false;
    instances.push(this);
  }

  observe(el) {
    this.observed.push(el);
  }

  unobserve(el) {
    this.unobserved.push(el);
  }

  disconnect() {
    this.disconnected = true;
  }

  trigger(entries) {
    this.callback(entries);
  }
}

function addRevealEl({ top = 0 } = {}) {
  const el = document.createElement('div');
  el.className = 'rv';
  el.getBoundingClientRect = () => ({ top });
  document.body.appendChild(el);
  return el;
}

beforeEach(() => {
  instances = [];
  vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);
  vi.useFakeTimers();
  window.innerHeight = 800;
});

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
  document.body.innerHTML = '';
});

describe('useReveal', () => {
  it('observes every .rv element with the configured root margin', () => {
    const a = addRevealEl();
    const b = addRevealEl();
    const ignored = document.createElement('div');
    document.body.appendChild(ignored);

    renderHook(() => useReveal());

    expect(instances).toHaveLength(1);
    expect(instances[0].options).toEqual({ rootMargin: '0px 0px -8% 0px' });
    expect(instances[0].observed).toEqual([a, b]);
    expect(instances[0].observed).not.toContain(ignored);
  });

  it('staggers the transition delay of elements starting in the viewport', () => {
    const first = addRevealEl({ top: 10 });
    const second = addRevealEl({ top: 100 });
    const offscreen = addRevealEl({ top: 1200 });

    renderHook(() => useReveal());

    expect(first.style.transitionDelay).toBe('0ms');
    expect(second.style.transitionDelay).toBe('70ms');
    expect(offscreen.style.transitionDelay).toBe('');
  });

  it('adds the "in" class and unobserves elements that intersect', () => {
    const el = addRevealEl();
    renderHook(() => useReveal());

    instances[0].trigger([{ isIntersecting: true, target: el }]);

    expect(el).toHaveClass('in');
    expect(instances[0].unobserved).toEqual([el]);
  });

  it('leaves elements untouched while they are not intersecting', () => {
    const el = addRevealEl();
    renderHook(() => useReveal());

    instances[0].trigger([{ isIntersecting: false, target: el }]);

    expect(el).not.toHaveClass('in');
    expect(instances[0].unobserved).toEqual([]);
  });

  it('reveals everything through the failsafe timeout', () => {
    const a = addRevealEl();
    const b = addRevealEl();
    renderHook(() => useReveal());

    expect(a).not.toHaveClass('in');

    vi.advanceTimersByTime(2500);

    expect(a).toHaveClass('in');
    expect(b).toHaveClass('in');
  });

  it('disconnects the observer and cancels the failsafe on unmount', () => {
    const el = addRevealEl();
    const { unmount } = renderHook(() => useReveal());

    unmount();

    expect(instances[0].disconnected).toBe(true);

    vi.advanceTimersByTime(5000);
    expect(el).not.toHaveClass('in');
  });
});
