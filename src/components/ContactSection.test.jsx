import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ContactSection from './ContactSection';

describe('ContactSection', () => {
  it('renders the section number and closing question', () => {
    render(<ContactSection />);

    expect(screen.getByText(/03 — let's talk/)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Need the next ecosystem program/);
  });

  it('renders every contact channel', () => {
    const { container } = render(<ContactSection />);

    const hrefs = [...container.querySelectorAll('.channels a')].map((a) => a.getAttribute('href'));
    expect(hrefs).toEqual([
      'https://cal.com/prasan-singh/15min',
      'mailto:hi@prasansingh.com',
      'https://x.com/prasansinghh',
      'https://www.linkedin.com/in/prasan-singh',
      'https://t.me/prasansinghh',
      './Prasan Singh - CV (Simple).html',
    ]);
  });

  it('opens external channels safely and keeps local ones in place', () => {
    const { container } = render(<ContactSection />);

    [...container.querySelectorAll('.channels a')].forEach((a) => {
      const href = a.getAttribute('href');
      if (href.startsWith('http')) {
        expect(a).toHaveAttribute('target', '_blank');
        expect(a).toHaveAttribute('rel', 'noreferrer');
      } else {
        expect(a).not.toHaveAttribute('target');
      }
    });
  });

  it('renders the footer copy', () => {
    render(<ContactSection />);

    expect(screen.getByText(/© 2026/)).toBeInTheDocument();
    expect(screen.getByText(/full site in progress/)).toBeInTheDocument();
  });
});
