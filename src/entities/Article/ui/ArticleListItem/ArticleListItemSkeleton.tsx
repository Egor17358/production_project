import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { memo } from 'react';
// import { useTranslation } from 'react-i18next';
// import { Article, ArticleTextBlock } from '../../model/types/article';
import {
  // ArticleBlockType,
  ArticleView,
} from '../../model/consts/articleConsts';
// import { Text } from '@/shared/ui/Text/Text';
// import { Icon } from '@/shared/ui/Icon/Icon';
// import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Card } from '@/shared/ui/Card';
// import { Avatar } from '@/shared/ui/Avatar/Avatar';
// import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
// import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}
export const ArticleListItemSkeleton = memo(
  ({ className, view }: ArticleListItemSkeletonProps) => {
    if (view == ArticleView.BIG) {
      return (
        <div
          className={classNames(cls.ArticleListItem, {}, [
            className,
            cls[view],
          ])}
        >
          <Card className={cls.card}>
            <div className={cls.header}>
              <Skeleton border="50%" height={30} width={30} />
              <Skeleton width={150} height={16} className={cls.username} />
              <Skeleton width={150} height={16} className={cls.date} />
            </div>
            <Skeleton width={250} height={24} className={cls.title} />
            <Skeleton height={200} className={cls.img} />
            <div className={cls.footer}>
              <Skeleton height={36} width={200} />
            </div>
          </Card>
        </div>
      );
    }

    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card className={cls.card}>
          <div className={cls.imageWrapper}>
            <Skeleton width={200} height={200} className={cls.img} />
          </div>
          <div className={cls.infoWrapper}>
            <Skeleton width={130} height={16} className={cls.img} />
          </div>
          <Skeleton width={150} height={16} className={cls.title} />
        </Card>
      </div>
    );
  },
);

ArticleListItemSkeleton.displayName = 'ArticleListItemSkeleton';
