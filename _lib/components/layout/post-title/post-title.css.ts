import { style } from '@vanilla-extract/css';
import { COLORS, THEMES } from '@/_lib/styles/colors.css';

export const BACKGROUND = style({
  backgroundColor: THEMES.default,
  height: '66vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  marginBottom: '3rem',
});
export const BASE = style([
  {
    display: 'flex',
    width: '100vw',
    maxWidth: '41rem',
    margin: '0 auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flexStart',
    height: 'auto',
    minHeight: '16rem',
  },
]);

export const BACK_BUTTON_PLACEMENT = style({
  gridRow: 1,
  gridColumn: 3,
  marginBottom: '3rem',
  '@media': {
    'screen and (max-width: 768px)': {
      gridRow: 1,
      gridColumn: 1,
    },
  },
});

export const BACK_BUTTON_STYLE_VARIANT = style({
  fontWeight: 400,
  fontSize: '1.75rem',
});

export const TITLE_TEXT_PLACEMENT = style({
  // gridRow: 2,
  // gridColumnStart: 3,
  // gridColumnEnd: 11,
  marginBottom: '1rem',
  // '@media': {
  //   'screen and (max-width: 768px)': {
  //     gridRow: 2,
  //     gridColumnStart: 1,
  //     gridColumnEnd: 7,
  //   },
  // },
});

export const TITLE = style({
  color: THEMES.white,
  fontWeight: 900,
  fontSize: '3rem',
  lineHeight: '1.25',
  width: '100%',
  maxWidth: '45rem',
  wordBreak: 'keep-all',
  wordSpacing: '-0.85rem',
  textTransform: 'uppercase',
});

export const RELEASED_DATE = style({
  color: THEMES.white,
  fontWeight: 400,
});

export const INFO = style({
  lineHeight: '1.65',
  wordSpacing: '-0.275rem',
  verticalAlign: 'middle',
});

export const SUMMARY = style({
  color: THEMES.white,
});

export const TAG_GRID_PLACEMENT = style({
  // gridRow: 4,
  // gridColumnStart: 1,
  // gridColumnEnd: 2,
  // alignItems: 'center',
  // '@media': {
  //   'screen and (max-width: 768px)': {
  //     gridRow: 4,
  //     gridColumnStart: 1,
  //     gridColumnEnd: 3,
  //   },
  // },
});

export const DATE_GRID_PLACEMENT = style({
  // gridRow: 3,
  // gridColumnStart: 3,
  // gridColumnEnd: 12,
  // '@media': {
  //   'screen and (max-width: 768px)': {
  //     gridRow: 4,
  //     gridColumnStart: 3,
  //     gridColumnEnd: 7,
  //   },
  // },
});
export const SUMMARY_GRID_PLACEMENT = style({
  // gridRow: 4,
  // gridColumnStart: 3,
  // gridColumnEnd: 11,
  // '@media': {
  //   'screen and (max-width: 768px)': {
  //     gridRow: 3,
  //     gridColumnStart: 1,
  //     gridColumnEnd: 7,
  //     marginBottom: '1rem',
  //   },
  // },
});
