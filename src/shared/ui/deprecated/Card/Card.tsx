import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';
import { HTMLAttributes, memo, ReactNode } from 'react';

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined',
}

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: CardTheme;
  max?: boolean;
}
/**
 * Устарел, используем компоненты из папки redesigned
 * @deprecated
 */
export const Card = memo(
  ({
    className,
    children,
    theme = CardTheme.NORMAL,
    max,
    ...otherProps
  }: CardProps) => {
    return (
      <div
        style={{
          borderRadius: __PROJECT__ === 'storybook' ? 'none' : '12px',
        }}
        className={classNames(cls.Card, { [cls.max]: max }, [
          className,
          cls[theme],
        ])}
        {...otherProps}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = 'Card';
