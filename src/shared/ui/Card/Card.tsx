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
}
export const Card = memo(
  ({ className, children, theme = CardTheme.NORMAL, ...otherProps }: CardProps) => {
    return (
      <div style={{borderRadius:__PROJECT__ === 'storybook' ? 'none' : '12px'}} className={classNames(cls.Card, {}, [className, cls[theme]])} {...otherProps}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
