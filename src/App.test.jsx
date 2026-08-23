import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

let observerFactory;

beforeEach(() => {
  observerFactory = vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }));
  vi.stubGlobal('IntersectionObserver', observerFactory);
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('App', () => {
  it('renders every section in order', () => {
    render(<App />);

    const titles = ['Events', 'What I do'];
    titles.forEach((t) => expect(screen.getByText(t)).toBeInTheDocument());
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('keeps the contact section outside of main', () => {
    render(<App />);

    const main = screen.getByRole('main');
    expect(main).not.toContainElement(screen.getByRole('contentinfo'));
    expect(main.querySelector('.hero')).toBeInTheDocument();
  });

  it('reveals content via the IntersectionObserver hook', () => {
    render(<App />);

    expect(observerFactory).toHaveBeenCalledOnce();
  });
});
