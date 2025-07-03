import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Overlay.module.scss';

export interface OverlayProps {
  className?: string;
  onClick?: () => void;
}
/**
 * Устарел, используем компоненты из папки redesigned
 * @deprecated
 */
export const Overlay = ({ className, onClick }: OverlayProps) => {
  return (
    <div
      onClick={onClick}
      className={classNames(cls.Overlay, {}, [className])}
    />
  );
};
