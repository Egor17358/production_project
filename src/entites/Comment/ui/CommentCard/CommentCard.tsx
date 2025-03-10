import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { memo } from 'react';
import { CommentType } from 'entites/Comment/model/types/comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

export interface CommentCardProps {
  className?: string;
  comment: CommentType;
  isLoading?: boolean;
}
export const CommentCard = memo(({ className, comment, isLoading }: CommentCardProps) => {
  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} border='50%' />
          <Skeleton width={100} height={16} className={cls.username} />
        </div>
        <Skeleton className={cls.text} height={50} width={'100%'} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <div className={cls.header}>
        {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
        <Text className={cls.username} text={comment.user.username} />
      </div>
      <Text className={cls.text} text={comment.text} />
    </div>
  );
});

CommentCard.displayName = 'CommentCard';
