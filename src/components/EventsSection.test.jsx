import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import EventsSection from './EventsSection';

describe('EventsSection', () => {
  it('renders the section heading and number', () => {
    render(<EventsSection />);

    expect(screen.getByText('Events')).toBeInTheDocument();
    expect(screen.getByText('/ 01 — proof')).toBeInTheDocument();
  });

  it('renders a row per event with name, description and tag', () => {
    const { container } = render(<EventsSection />);

    const rows = [...container.querySelectorAll('.work-row')];
    expect(rows).toHaveLength(4);
    expect(rows.map((r) => r.querySelector('.work-name').textContent)).toEqual([
      'Hacker Houses',
      'Stealth House',
      'Arweave Day India',
      'Singapore Hacker House',
    ]);
    rows.forEach((row) => {
      expect(row.querySelector('.work-desc').textContent).not.toBe('');
      expect(row.querySelector('.work-tag').textContent).not.toBe('');
    });
  });

  it('links each event to its announcement in a new tab', () => {
    const { container } = render(<EventsSection />);

    [...container.querySelectorAll('.work-row')].forEach((row) => {
      expect(row.getAttribute('href')).toMatch(/^https:\/\/x\.com\//);
      expect(row).toHaveAttribute('target', '_blank');
      expect(row).toHaveAttribute('rel', 'noreferrer');
    });
  });

  it('highlights the flagship and hacker house wins', () => {
    const { container } = render(<EventsSection />);

    const wins = [...container.querySelectorAll('.win')].map((w) => w.textContent);
    expect(wins).toEqual(['4 houses · 150+ scholars', 'flagship · 349+']);
  });

  it('links out to the full public log', () => {
    render(<EventsSection />);

    expect(screen.getByRole('link', { name: /the full public log/ })).toHaveAttribute(
      'href',
      'https://x.com/arweaveindia'
    );
  });
});
