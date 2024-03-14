import { THEMES } from '@/_lib/styles/colors.css';
import { BASE_GRID, BASE_PADDING } from '@/_lib/styles/grid.css';
import { style } from '@vanilla-extract/css';

export const BASE = style([
  BASE_PADDING,
  {
    paddingTop: '7rem',
    paddingBottom: '2.5rem',
    borderBottom: `1px solid ${THEMES.theme}`,
  },
]);

export const TITLE_GRID = style([
  BASE_GRID,
  {
    gridTemplateRows: 'repeat(4, auto)',
    margin: '0 auto',
  },
]);

export const BACK_BUTTON_PLACEMENT = style({
  gridRow: 1,
  gridColumn: 3,
  marginBottom: '1rem',
  '@media': {
    'screen and (max-width: 768px)': {
      gridRow: 1,
      gridColumn: 1,
    },
  },
});

export const TITLE_TEXT_PLACEMENT = style({
  gridRow: 2,
  gridColumnStart: 3,
  gridColumnEnd: 11,
  marginBottom: '1rem',
  '@media': {
    'screen and (max-width: 768px)': {
      gridRow: 2,
      gridColumnStart: 1,
      gridColumnEnd: 7,
    },
  },
});

export const TAG_GRID_PLACEMENT = style({
  gridRow: 4,
  gridColumnStart: 1,
  gridColumnEnd: 2,
  alignItems: 'center',
  '@media': {
    'screen and (max-width: 768px)': {
      gridRow: 4,
      gridColumnStart: 1,
      gridColumnEnd: 3,
    },
  },
});

export const DATE_GRID_PLACEMENT = style({
  gridRow: 3,
  gridColumnStart: 3,
  gridColumnEnd: 12,
  '@media': {
    'screen and (max-width: 768px)': {
      gridRow: 4,
      gridColumnStart: 3,
      gridColumnEnd: 7,
    },
  },
});
export const SUMMARY_GRID_PLACEMENT = style({
  gridRow: 4,
  gridColumnStart: 3,
  gridColumnEnd: 11,
  '@media': {
    'screen and (max-width: 768px)': {
      gridRow: 3,
      gridColumnStart: 1,
      gridColumnEnd: 7,
      marginBottom: '1rem',
    },
  },
});
export const TITLE = style({
  textAlign: 'left',
  fontWeight: 700,
  fontSize: '2.75rem',
  lineHeight: '1.25',
});

export const SUMMARY = style({
  textAlign: 'left',
  fontWeight: 400,
  fontSize: '1.2rem',
  lineHeight: '1.65',
});

export const POST_TAG = style({
  textAlign: 'left',
  fontWeight: 700,
  fontSize: '1.2rem',
  lineHeight: '1.65',
});
