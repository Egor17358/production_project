import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC, memo, ReactNode } from 'react';
import { TestProps } from '@/shared/types/testProps';

export type ButtonVariant = 'clear' | 'outline';

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
}

export const Button: FC<ButtonProps> = memo((props: ButtonProps) => {
  const {
    className,
    children,
    variant = 'outline',
    square,
    size = 'm',
    disabled,
    fullWidth,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth,
  };

  return (
    <button
      className={classNames(cls.Button, mods, [
        className,
        cls[variant],
        cls[size],
      ])}
      type="button"
      disabled={disabled}
      data-testid={props['data-testid']}
      {...otherProps}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
