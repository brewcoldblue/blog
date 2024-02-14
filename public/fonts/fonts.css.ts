import { fontFace } from '@vanilla-extract/css';

export const main = fontFace([
  { src: './300.woff', fontWeight: '300' },
  { src: './400.woff', fontWeight: '400' },
  { src: './500.woff', fontWeight: '500' },
  { src: './600.woff', fontWeight: '600' },
  { src: './700.woff', fontWeight: '700' },
]);
export const code = fontFace([
  { src: 'url(/fonts/code-500.woff2)', fontWeight: '400' },
  { src: 'url(/fonts/code-500-it.woff2)', fontWeight: '400', fontStyle: 'italic' },
  { src: 'url(/fonts/code-600.woff2)', fontWeight: '700' },
  { src: 'url(/fonts/code-600-it.woff2)', fontWeight: '700', fontStyle: 'italic' },
]);
