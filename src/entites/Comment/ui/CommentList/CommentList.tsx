import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/Text/Text';
import { CommentCard } from '../CommentCard/CommentCard';
import { CommentType } from '../../model/types/comment';
import { VStack } from '@/shared/ui/Stack';

export interface CommentListProps {
  className?: string;
  comments?: CommentType[];
  isLoading?: boolean;
}
export const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
  const { t } = useTranslation('translation');

  if (isLoading) {
    return (
      <VStack gap='16' max className={classNames('', {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </VStack>
    );
  }

  return (
    <VStack gap='16' max className={classNames('', {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            isLoading={isLoading}
          />
        ))
      ) : (
        <Text text={t('Комментарии отсутствуют')} />
      )}
    </VStack>
  );
});

CommentList.displayName = 'CommentList';
