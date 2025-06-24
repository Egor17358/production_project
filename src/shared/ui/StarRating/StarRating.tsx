import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import { memo, useEffect, useState } from 'react';
import StarIcon from '@/shared/assets/icons/star.svg';
import { Icon } from '../Icon/Icon';

export interface StarRatingProps {
  className?: string;
  onSelect?: (starsCount: number) => void;
  size?: number;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
  const { className, onSelect, size = 30, selectedStars = 0 } = props;
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
  const [isSelected, setIisSelected] = useState(Boolean(selectedStars));

  useEffect(() => {
    if (__PROJECT__ === 'storybook') {
      setCurrentStarsCount(selectedStars);
    }
  }, [selectedStars]);

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const onLeave = () => () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarsCount(starsCount);
      setIisSelected(true);
    }
  };

  return (
    <div className={classNames(cls.StarRating, {}, [className])}>
      {stars.map(starNumber => (
        <Icon
          className={classNames(cls.starIcon, { [cls.selected]: isSelected }, [
            currentStarsCount >= starNumber ? cls.hovered : cls.normal,
          ])}
          width={size}
          height={size}
          Svg={StarIcon}
          key={starNumber}
          onMouseLeave={onLeave}
          onMouseEnter={onHover(starNumber)}
          onClick={onClick(starNumber)}
          data-testid={`StarRating.${starNumber}`}
          data-selected={currentStarsCount >= starNumber}
        />
      ))}
    </div>
  );
});

StarRating.displayName = 'StarRating';
