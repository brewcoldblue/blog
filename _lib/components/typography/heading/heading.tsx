import { COLORS, COLOR_STYLE_VARIANTS } from '@/_lib/styles/colors.css';
import { Annotations } from '../annotations/annotations';
import { TEXT_STYLE } from '../typography.css';
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import type { ComponentPropsWithoutRef, ElementType } from 'react';

type HeadingProps<T extends ElementType> = {
  as?: T;
  bold?: boolean;
  code?: boolean;
  italic?: boolean;
  strike?: boolean;
  underline?: boolean;
  size?: keyof typeof TEXT_STYLE;
  color?: keyof typeof COLORS;
  richText?: RichTextItemResponse;
  styleVariant?: string;
} & ComponentPropsWithoutRef<T>;
export function Heading<T extends ElementType>({
  as,
  bold,
  code,
  italic,
  strike,
  underline,
  size = 'XL',
  color = 'default',
  richText,
  styleVariant,
  ...props
}: HeadingProps<T>) {
  const Component = as || 'h1';
  const classNames = [
    TEXT_STYLE[size],
    richText ? COLOR_STYLE_VARIANTS[richText.annotations.color] : COLOR_STYLE_VARIANTS[color],
  ];
  let className = classNames.join(' ');
  if (styleVariant) className = styleVariant;

  return (
    <Component className={className}>
      <Annotations richText={richText} bold={bold} code={code} italic={italic} strike={strike} underline={underline}>
        {props.children}
      </Annotations>
    </Component>
  );
}
