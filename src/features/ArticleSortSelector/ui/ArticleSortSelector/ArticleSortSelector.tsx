import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleSortSelector.module.scss';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from '@/shared/ui/Select';
import { SortOrder } from '@/shared/types';
import { ArticleSortField } from '@/entities/Article';

export interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}
export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const { sort, className, order, onChangeOrder, onChangeSort } = props;
  const { t } = useTranslation('translation');

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: 'asc',
        content: t('возрастанию'),
      },
      {
        value: 'desc',
        content: t('убыванию'),
      },
    ],
    [t],
  );

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: t('дате создания'),
      },
      {
        value: ArticleSortField.TITLE,
        content: t('названию'),
      },
      {
        value: ArticleSortField.VIEWS,
        content: t('просмотрам'),
      },
    ],
    [t],
  );

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select
        value={sort}
        onChange={onChangeSort}
        options={sortFieldOptions}
        label={t('Сортировать по')}
      />
      <Select
        className={cls.order}
        value={order}
        onChange={onChangeOrder}
        options={orderOptions}
        label={t('по')}
      />
    </div>
  );
});

ArticleSortSelector.displayName = 'ArticleSortSelector';
