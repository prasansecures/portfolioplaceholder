import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders the brand and availability badge', () => {
    render(<Header />);

    expect(screen.getByText(/Prasan/)).toBeInTheDocument();
    expect(screen.getByText(/open to work/)).toBeInTheDocument();
  });

  it('links to the CV and to the booking page', () => {
    render(<Header />);

    expect(screen.getByRole('link', { name: /View CV/ })).toHaveAttribute(
      'href',
      './Prasan Singh - CV (Simple).html'
    );

    const booking = screen.getByRole('link', { name: /Book 15 min/ });
    expect(booking).toHaveAttribute('href', 'https://cal.com/prasan-singh/15min');
    expect(booking).toHaveAttribute('target', '_blank');
    expect(booking).toHaveAttribute('rel', 'noreferrer');
  });
});
