import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'backgroung',
  BACKGROUND_INVERTED = 'backgroungInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}
export const Button: FC<ButtonProps> = props => {
  const { className, children, theme, square, size = ButtonSize.M, ...otherProps } = props;

  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true
  };

  return (
    <button
      className={classNames(cls.Button, mods, [className])}
      type='button'
      {...otherProps}
    >
      {children}
    </button>
  );
};
