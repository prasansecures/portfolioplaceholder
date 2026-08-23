import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Hero', () => {
  it('renders the headline and Arweave India link', () => {
    render(<Hero />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/I build/);
    expect(screen.getByRole('link', { name: 'Arweave India' })).toHaveAttribute(
      'href',
      'https://arweaveindia.com'
    );
  });

  it('lists the roles the user is open to', () => {
    render(<Hero />);

    ['ecosystem lead', 'global events lead', 'community lead'].forEach((role) => {
      expect(screen.getByText(role)).toBeInTheDocument();
    });
    expect(screen.getByText('events & ops')).toBeInTheDocument();
  });

  it('renders every call to action with an href', () => {
    render(<Hero />);

    const hrefs = screen.getAllByRole('link').map((a) => a.getAttribute('href'));
    expect(hrefs).toEqual(
      expect.arrayContaining([
        'https://cal.com/prasan-singh/15min',
        './Prasan Singh - CV (Simple).html',
        'https://x.com/prasansinghh',
        'https://www.linkedin.com/in/prasan-singh',
      ])
    );
    hrefs.forEach((href) => expect(href).toBeTruthy());
  });

  it('opens all external links safely in a new tab', () => {
    render(<Hero />);

    screen
      .getAllByRole('link')
      .filter((a) => a.getAttribute('href')?.startsWith('http'))
      .forEach((a) => {
        expect(a).toHaveAttribute('target', '_blank');
        expect(a).toHaveAttribute('rel', 'noreferrer');
      });
  });
});
