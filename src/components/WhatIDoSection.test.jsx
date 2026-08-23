import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import WhatIDoSection from './WhatIDoSection';

describe('WhatIDoSection', () => {
  it('renders the section heading and number', () => {
    render(<WhatIDoSection />);

    expect(screen.getByText('What I do')).toBeInTheDocument();
    expect(screen.getByText('/ 02 — the work')).toBeInTheDocument();
  });

  it('renders the three numbered pillars', () => {
    const { container } = render(<WhatIDoSection />);

    const pillars = [...container.querySelectorAll('.pillar')];
    expect(pillars).toHaveLength(3);
    expect(pillars.map((p) => p.querySelector('.pn').textContent)).toEqual(['01', '02', '03']);
    expect(
      screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent)
    ).toEqual(['Ecosystem strategy', 'Events & Programs', 'Community storytelling']);
  });

  it('renders a body copy for every pillar', () => {
    const { container } = render(<WhatIDoSection />);

    [...container.querySelectorAll('.pillar')].forEach((p) => {
      expect(p.querySelector('p').textContent).not.toBe('');
    });
  });

  it('renders each program with a bold label and body', () => {
    const { container } = render(<WhatIDoSection />);

    const progs = [...container.querySelectorAll('.prog')];
    expect(progs).toHaveLength(4);
    expect(progs.map((p) => p.querySelector('b').textContent)).toEqual([
      '200+ events, internationally',
      'Launchpad',
      '20+ speaker sessions',
      'Country-wide event tours',
    ]);
    expect(progs[1]).toHaveTextContent('3-month incubation · 40+ founders');
  });
});
