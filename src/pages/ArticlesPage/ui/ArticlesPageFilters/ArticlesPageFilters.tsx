import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesPageFilters.module.scss';
import {
  memo,
  useCallback,
  // useMemo
} from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleSortField, ArticleView } from '@/entities/Article';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { SortOrder } from '@/shared/types';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { ArticleType } from '@/entities/Article';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';

export interface ArticlesPageFiltersProps {
  className?: string;
}
export const ArticlesPageFilters = memo(
  ({ className }: ArticlesPageFiltersProps) => {
    const { t } = useTranslation('translation');
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const fetchData = useCallback(() => {
      dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback(
      (newView: ArticleView) => {
        dispatch(articlesPageActions.setView(newView));
        dispatch(articlesPageActions.setPage(1));
      },
      [dispatch],
    );

    const onChangeSort = useCallback(
      (newSort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(newSort));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
      },
      [dispatch, fetchData],
    );

    const onChangeOrder = useCallback(
      (newOrder: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
      },
      [dispatch, fetchData],
    );

    const onChangeSearch = useCallback(
      (search: string) => {
        dispatch(articlesPageActions.setSearch(search));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
      },
      [dispatch, debouncedFetchData],
    );

    const onChangeType = useCallback(
      (value: ArticleType) => {
        dispatch(articlesPageActions.setType(value));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
      },
      [dispatch, fetchData],
    );

    return (
      <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
        <div className={cls.sortWrapper}>
          <ArticleSortSelector
            order={order}
            sort={sort}
            onChangeOrder={onChangeOrder}
            onChangeSort={onChangeSort}
          />
          <ArticleViewSelector view={view} onViewClick={onChangeView} />
        </div>
        <Card className={cls.search}>
          <Input
            value={search}
            onChange={onChangeSearch}
            placeholder={t('Поиск')}
          />
        </Card>
        <ArticleTypeTabs
          className={cls.tabs}
          value={type}
          onChangeType={onChangeType}
        />
      </div>
    );
  },
);

ArticlesPageFilters.displayName = 'ArticlesPageFilters';
