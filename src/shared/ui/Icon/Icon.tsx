import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';
import { memo } from 'react';

export interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}
export const Icon = memo(({ className, Svg }: IconProps) => {
  return <Svg className={classNames(cls.Icon, {}, [className])} />;
});

Icon.displayName = 'Icon';
