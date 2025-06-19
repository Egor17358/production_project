import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getArticles } from '../../model/slices/articlesPageSlice';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { ArticleList } from '@/entites/Article';
import { Text } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';

export interface ArticleInfiniteListProps {
  className?: string;
}
export const ArticleInfiniteList = memo(({ className }: ArticleInfiniteListProps) => {
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);
  const { t } = useTranslation('article-details');

  if (error) {
    <Text text={t('Произошла ошибка при загрузки статьи')} />;
  }

  return (
    <div className={classNames('', {}, [className])}>
      <ArticleList isLoading={isLoading} articles={articles} view={view} className={className} />
    </div>
  );
});

ArticleInfiniteList.displayName = 'ArticleInfiniteList';
