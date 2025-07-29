import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';
import { HTMLAttributes, memo, ReactNode } from 'react';

export type CardVariant = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24';
export type CardBorder = 'round' | 'normalRadius';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  max?: boolean;
  padding?: CardPadding;
  border?: CardBorder;
  fullHeight?: boolean;
}

const mapPaddingToClass: Record<CardPadding, string> = {
  '0': 'gap_0',
  '8': 'gap_8',
  '16': 'gap_16',
  '24': 'gap_24',
};

export const Card = memo(
  ({
    className,
    children,
    variant = 'normal',
    max,
    padding = '8',
    border = 'normalRadius',
    fullHeight,
    ...otherProps
  }: CardProps) => {
    const paddingsClass = mapPaddingToClass[padding];

    return (
      <div
        className={classNames(
          cls.Card,
          { [cls.max]: max, [cls.fullHeight]: fullHeight },
          [className, cls[variant], cls[paddingsClass], cls[border]],
        )}
        {...otherProps}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = 'Card';
