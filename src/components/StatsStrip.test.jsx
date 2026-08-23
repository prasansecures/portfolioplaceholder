import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import StatsStrip from './StatsStrip';

describe('StatsStrip', () => {
  it('renders one stat per entry', () => {
    const { container } = render(<StatsStrip />);

    expect(container.querySelectorAll('.stat')).toHaveLength(6);
  });

  it('renders the headline numbers', () => {
    const { container } = render(<StatsStrip />);

    const values = [...container.querySelectorAll('.stat .v')].map((v) => v.textContent);
    expect(values).toEqual(['8yrs', '16,000+', '200+', '5', '40+', '20+']);
  });

  it('splits multi-line labels onto separate lines', () => {
    const { container } = render(<StatsStrip />);

    const firstLabel = container.querySelector('.stat .l');
    expect(firstLabel.querySelectorAll('br')).toHaveLength(1);
    expect(firstLabel).toHaveTextContent('tech community &ecosystem work');
  });

  it('marks the strip as revealable', () => {
    const { container } = render(<StatsStrip />);

    expect(container.querySelector('.strip')).toHaveClass('rv');
  });

  it('renders labels for every stat', () => {
    render(<StatsStrip />);

    expect(screen.getByText('hacker houses')).toBeInTheDocument();
    expect(screen.getByText('speaker')).toBeInTheDocument();
  });
});
