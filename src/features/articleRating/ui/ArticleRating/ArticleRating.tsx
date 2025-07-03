import { RatingCard } from '@/entities/Rating';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  useGetArticleRatings,
  useRateArticle,
} from '../../api/articleRatingApi';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating = memo(({ className, articleId }: ArticleRatingProps) => {
  const { t } = useTranslation('translation');
  const userData = useSelector(getUserAuthData);

  const { data, isLoading } = useGetArticleRatings({
    userId: userData?.id ?? '',
    articleId,
  });

  const [rateArticleMutation] = useRateArticle();

  const handleRateArticle = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateArticleMutation({
          userId: userData?.id ?? '',
          rate: starsCount,
          articleId,
          feedback,
        });
      } catch (error) {
        console.log(error);
      }
    },
    [articleId, rateArticleMutation, userData?.id],
  );

  const onCancel = useCallback(
    (starsCount: number) => {
      handleRateArticle(starsCount);
    },
    [handleRateArticle],
  );

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateArticle(starsCount, feedback);
    },
    [handleRateArticle],
  );

  if (isLoading && __PROJECT__ !== 'storybook') {
    return <Skeleton width={'100%'} height={120} />;
  }

  const rating = data?.[0];

  return (
    <RatingCard
      onAccept={onAccept}
      onCancel={onCancel}
      rate={rating?.rate}
      title={t('Оцените статью')}
      feedbackTitle={t('Оставьте отзыв о статье')}
      className={className}
      hasFeedback
    />
  );
});

ArticleRating.displayName = 'ArticleRating';
export default ArticleRating;
