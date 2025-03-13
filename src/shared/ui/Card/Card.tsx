import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';
import { HTMLAttributes, memo, ReactNode } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}
export const Card = memo(({ className, children, ...otherProps }: CardProps) => {
  return (
    <div className={classNames(cls.Card, {}, [className])} {...otherProps}>
      {children}
    </div>
  );
});

Card.displayName = 'Card';
