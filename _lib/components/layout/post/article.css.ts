import { BASE_GRID, BASE_PADDING } from '@/_lib/styles/grid.css';
import { style } from '@vanilla-extract/css';

export const BASE = style({});

export const POST_GRID = style([
  BASE_PADDING,
  BASE_GRID,
  {
    margin: '0 auto',
    paddingTop: '2rem',
    paddingBottom: '0',
  },
]);

export const POST_CENTERED = style([
  BASE_PADDING,
  {
    margin: '0 auto',
    paddingBottom: '0',
    maxWidth: '42rem',
  },
]);
