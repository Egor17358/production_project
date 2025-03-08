import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { CSSProperties, useMemo } from 'react';

export interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}
export const Avatar = ({ className, src, size, alt }: AvatarProps) => {
  const mods: Mods = {};
  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size || '100px',
      height: size || '100px',
    };
  }, [size]);

  return (
    <img alt={alt} src={src} style={styles} className={classNames(cls.Avatar, mods, [className])} />
  );
};
