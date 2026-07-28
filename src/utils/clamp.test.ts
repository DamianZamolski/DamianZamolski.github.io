import { describe, expect, it } from 'vitest';
import { clamp } from './clamp';

describe('clamp', () => {
  it('returns the value when it is within range', () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  it('returns the minimum when the value is below range', () => {
    expect(clamp(-3, 0, 10)).toBe(0);
  });

  it('returns the maximum when the value is above range', () => {
    expect(clamp(42, 0, 10)).toBe(10);
  });

  it('returns the boundary when the value equals a bound', () => {
    expect(clamp(0, 0, 10)).toBe(0);
    expect(clamp(10, 0, 10)).toBe(10);
  });
});
