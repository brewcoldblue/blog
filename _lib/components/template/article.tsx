import { ReactNode } from 'react';
import { BASE } from './article.css';
import { RESPONSIVE } from './responsive.css';

interface ArticleProps {
  children: ReactNode;
  styleVariants?: string;
}
export function Article({ children, styleVariants }: ArticleProps) {
  const className = `${RESPONSIVE} ${styleVariants || BASE}`;
  return <article className={className}>{children}</article>;
}