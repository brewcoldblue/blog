import type { ComponentPropsWithoutRef, ElementType } from 'react';
import type { RichText } from '@/_lib/types/block';
import { COLORS, COLOR_STYLE_VARIANTS } from '@/_lib/styles/colors.css';
import { Annotations } from '../annotations/annotations';
import Link from 'next/link';
import { LINK, TEXT_STYLE } from '../typography.css';

type TxtProps<T extends ElementType> = {
  as?: T | 'Link';
  bold?: boolean;
  code?: boolean;
  italic?: boolean;
  strike?: boolean;
  underline?: boolean;
  color?: keyof typeof COLORS;
  richText?: RichText;
  size?: keyof typeof TEXT_STYLE;
  styleVariant?: string;
} & ComponentPropsWithoutRef<T>;

export function Txt<T extends ElementType>({
  as,
  bold,
  code,
  italic,
  strike,
  underline,
  color = 'default',
  richText,
  size = 'S',
  styleVariant,
  ...props
}: TxtProps<T>) {
  let className = `${TEXT_STYLE[size]} ${
    richText ? COLOR_STYLE_VARIANTS[richText.annotations.color] : COLOR_STYLE_VARIANTS[color]
  }`;

  let Component = as || 'p';

  if (richText?.href) Component = 'a';
  if (Component === 'a' || richText?.href) className = LINK;
  if (styleVariant) className = styleVariant;

  switch (Component) {
    default:
      return (
        <Component className={className} {...props}>
          <Annotations
            richText={richText}
            bold={bold}
            code={code}
            italic={italic}
            strike={strike}
            underline={underline}>
            {props.children}
          </Annotations>
        </Component>
      );
    case 'a':
      return (
        <a className={className} href={richText?.href || props.href} target="_blank" {...props}>
          <Annotations
            richText={richText}
            bold={bold}
            code={code}
            italic={italic}
            strike={strike}
            underline={underline}>
            {props.children}
          </Annotations>
        </a>
      );
    case 'Link':
      return (
        <Link href={richText?.href || props.href} className={className} {...props}>
          <Annotations
            richText={richText}
            bold={bold}
            code={code}
            italic={italic}
            strike={strike}
            underline={underline}>
            {props.children}
          </Annotations>
        </Link>
      );
  }
}
