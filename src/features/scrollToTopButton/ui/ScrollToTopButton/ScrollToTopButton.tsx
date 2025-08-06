import { Icon } from '@/shared/ui/redesigned/Icon';
import CircleIcon from '@/shared/assets/icons/circle-up.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface ScrollToTopButtonProps {
  className?: string;
}
export const ScrollToTopButton = ({ className }: ScrollToTopButtonProps) => {
  const onClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <Icon
      Svg={CircleIcon}
      width={32}
      height={32}
      clickable
      onClick={onClick}
      className={classNames('', {}, [className])}
    />
  );
};
