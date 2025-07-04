import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { CSSProperties, useMemo } from 'react';
import { AppImage } from '../AppImage';
import UserIcon from '../../assets/icons/user-filled.svg';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';
export interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
  fallbackInverted?: boolean;
}
export const Avatar = ({
  className,
  src,
  size = 100,
  alt,
  fallbackInverted,
}: AvatarProps) => {
  const mods: Mods = {};
  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size,
      borderRadius: __PROJECT__ === 'storybook' ? 'unset' : '50%',
    };
  }, [size]);

  const fallback = <Skeleton width={size} height={size} border="50%" />;
  const errorFallback = (
    <Icon
      inverted={fallbackInverted}
      width={size}
      height={size}
      Svg={UserIcon}
    />
  );

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      alt={alt}
      src={src}
      style={styles}
      className={classNames(cls.Avatar, mods, [className])}
    />
  );
};
