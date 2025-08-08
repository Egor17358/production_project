import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import {
  ButtonHTMLAttributes,
  FC,
  ForwardedRef,
  forwardRef,
  ReactNode,
} from 'react';
import { TestProps } from '@/shared/types/testProps';

export type ButtonVariant = 'clear' | 'outline' | 'filled';
export type ButtonColor = 'normal' | 'success' | 'error';

export type ButtonSize = 'm' | 'l' | 'xl';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    TestProps {
  className?: string;
  variant?: ButtonVariant;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode;
  fullWidth?: boolean;
  color?: ButtonColor;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
}

export const Button: FC<ButtonProps> = forwardRef(
  (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
      className,
      children,
      variant = 'outline',
      square,
      size = 'm',
      disabled,
      fullWidth,
      color = 'normal',
      addonLeft,
      addonRight,
      ...otherProps
    } = props;

    const mods: Mods = {
      [cls.square]: square,
      [cls.disabled]: disabled,
      [cls.fullWidth]: fullWidth,
      [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
    };

    return (
      <button
        className={classNames(cls.Button, mods, [
          className,
          cls[variant],
          cls[size],
          cls[color],
        ])}
        type="button"
        disabled={disabled}
        data-testid={props['data-testid']}
        {...otherProps}
        ref={ref}
      >
        <div className={cls.addonLeft}>{addonLeft}</div>
        {children}
        <div className={cls.addonRight}>{addonRight}</div>
      </button>
    );
  },
);

Button.displayName = 'Button';
