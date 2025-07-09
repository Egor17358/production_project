import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { memo } from 'react';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

export interface FiltersContainerProps {
  className?: string;
}
export const FiltersContainer = memo((props: FiltersContainerProps) => {
  const { className } = props;
  const {
    sort,
    type,
    search,
    order,
    onChangeSort,
    onChangeType,
    onChangeSearch,
    onChangeOrder,
  } = useArticleFilters();

  return (
    <ArticlesFilters
      className={className}
      order={order}
      search={search}
      sort={sort}
      type={type}
      onChangeType={onChangeType}
      onChangeSort={onChangeSort}
      onChangeOrder={onChangeOrder}
      onChangeSearch={onChangeSearch}
    />
  );
});

FiltersContainer.displayName = 'FiltersContainer';
