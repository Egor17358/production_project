import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleSortSelector.module.scss';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Select as SelectDeprecated,
  SelectOption,
} from '@/shared/ui/deprecated/Select';
import { SortOrder } from '@/shared/types';
import { ArticleSortField } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

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
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={
        <div
          className={classNames(cls.ArticleSortSelectorRedesigned, {}, [
            className,
          ])}
        >
          <VStack gap="8">
            <Text text={t('Сортировать по')} />
            <ListBox
              value={order}
              onChange={onChangeOrder}
              items={orderOptions}
              // label={t('по')}
            />
            <ListBox
              value={sort}
              onChange={onChangeSort}
              items={sortFieldOptions}
              // label={t('Сортировать по')}
            />
          </VStack>
        </div>
      }
      off={
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
          <SelectDeprecated
            value={sort}
            onChange={onChangeSort}
            options={sortFieldOptions}
            label={t('Сортировать по')}
          />
          <SelectDeprecated
            className={cls.order}
            value={order}
            onChange={onChangeOrder}
            options={orderOptions}
            label={t('по')}
          />
        </div>
      }
    />
  );
});

ArticleSortSelector.displayName = 'ArticleSortSelector';
