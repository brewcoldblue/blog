import { style } from '@vanilla-extract/css';
export const BASE = style({
  fontFeatureSettings: '"tnum"',
  marginLeft: '1.5rem',
});
export const DEPTH_1 = style({
  listStyleType: 'decimal',
});
export const DEPTH_2 = style({
  listStyleType: 'upper-latin',
});
export const DEPTH_3 = style({
  listStyleType: 'lower-latin',
});
