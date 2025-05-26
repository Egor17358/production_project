import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';
import { memo } from 'react';

export interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  inverted?: boolean;
}
export const Icon = memo(({ className, Svg, inverted }: IconProps) => {
  return <Svg className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])} />;
});

Icon.displayName = 'Icon';
