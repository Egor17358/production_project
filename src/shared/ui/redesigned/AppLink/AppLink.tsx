import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { FC, memo, ReactNode } from 'react';
import { LinkProps } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export type AppLinkVariant = 'primary' | 'red';

export interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  children?: ReactNode;
  activeClassName?: string;
}

export const AppLink: FC<AppLinkProps> = memo((props: AppLinkProps) => {
  const {
    to,
    className,
    children,
    variant = 'primary',
    activeClassName = '',
    ...otherProps
  } = props;

  return (
    <NavLink
      to={to}
      // className={classNames(cls.AppLink, {}, [className, cls[variant]])}
      className={({ isActive }) =>
        classNames(cls.AppLink, { [activeClassName]: isActive }, [
          className,
          cls[variant],
        ])
      }
      {...otherProps}
    >
      {children}
    </NavLink>
  );
});

AppLink.displayName = 'AppLink';
