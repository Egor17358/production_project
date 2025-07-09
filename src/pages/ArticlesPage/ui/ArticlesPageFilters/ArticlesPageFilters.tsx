import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesPageFilters.module.scss';
import {
  memo,
  // useMemo
} from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

export interface ArticlesPageFiltersProps {
  className?: string;
}
export const ArticlesPageFilters = memo(
  ({ className }: ArticlesPageFiltersProps) => {
    const { t } = useTranslation('translation');
    const {
      sort,
      type,
      search,
      order,
      view,
      onChangeSort,
      onChangeType,
      onChangeSearch,
      onChangeOrder,
      onChangeView,
    } = useArticleFilters();

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
