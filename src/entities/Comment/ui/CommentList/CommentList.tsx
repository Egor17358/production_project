import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { CommentCard } from '../CommentCard/CommentCard';
import { CommentType } from '../../model/types/comment';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures } from '@/shared/lib/features';

export interface CommentListProps {
  className?: string;
  comments?: CommentType[];
  isLoading?: boolean;
}
export const CommentList = memo(
  ({ className, comments, isLoading }: CommentListProps) => {
    const { t } = useTranslation('translation');

    if (isLoading) {
      return (
        <VStack gap="16" max className={classNames('', {}, [className])}>
          <CommentCard isLoading />
          <CommentCard isLoading />
          <CommentCard isLoading />
        </VStack>
      );
    }

    return (
      <VStack gap="16" max className={classNames('', {}, [className])}>
        {comments?.length ? (
          comments.map((comment) => (
            <CommentCard
              key={comment.id}
              comment={comment}
              isLoading={isLoading}
            />
          ))
        ) : (
          <ToggleFeatures
            feature="isAppRedesigned"
            on={<Text text={t('Комментарии отсутствуют')} />}
            off={<TextDeprecated text={t('Комментарии отсутствуют')} />}
          />
        )}
      </VStack>
    );
  },
);

CommentList.displayName = 'CommentList';
