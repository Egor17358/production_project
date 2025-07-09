import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesFilters.module.scss';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types';
import { Input } from '@/shared/ui/redesigned/Input';

export interface ArticlesFiltersProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  type: ArticleType;
  search: string;
  onChangeSearch: (value: string) => void;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
  onChangeType: (type: ArticleType) => void;
}
export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
  const {
    className,
    sort,
    order,
    type,
    search,
    onChangeSearch,
    onChangeOrder,
    onChangeSort,
    onChangeType,
  } = props;
  const { t } = useTranslation('translation');

  return (
    <Card
      className={classNames(cls.ArticlesFilters, {}, [className])}
      padding={'24'}
    >
      <VStack gap={'32'}>
        <Input
          value={search}
          onChange={onChangeSearch}
          placeholder={t('Поиск')}
        />
        <ArticleTypeTabs
          className={cls.tabs}
          value={type}
          onChangeType={onChangeType}
        />
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
      </VStack>
    </Card>
  );
});

ArticlesFilters.displayName = 'ArticlesFilters';
