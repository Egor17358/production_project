import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from '../CommentCard/CommentCard';
import { CommentType } from 'entites/Comment/model/types/comment';

export interface CommentListProps {
  className?: string;
  comments?: CommentType[];
  isLoading?: boolean;
}
export const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
  const { t } = useTranslation('translation');

  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments?.length ? (
        comments.map((comment, index) => (
          <CommentCard
            className={cls.comment}
            key={index}
            comment={comment}
            isLoading={isLoading}
          />
        ))
      ) : (
        <Text text={t('Комментарии отсутствуют')} />
      )}
    </div>
  );
});

CommentList.displayName = 'CommentList';
