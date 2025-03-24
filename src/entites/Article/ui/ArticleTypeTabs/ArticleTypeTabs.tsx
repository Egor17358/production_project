import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from '../../model/types/article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';

export interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
}
export const ArticleTypeTabs = memo(({ className, value, onChangeType }: ArticleTypeTabsProps) => {
  const { t } = useTranslation('translation');
  const dispatch = useAppDispatch();

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const typeTabs = useMemo<TabItem[]>(
    () => [
      {
        value: ArticleType.ALL,
        content: t('Все статьи'),
      },
      {
        value: ArticleType.ECONOMICS,
        content: t('Экономика'),
      },
      {
        value: ArticleType.IT,
        content: t('Айти'),
      },
      {
        value: ArticleType.SCIENCE,
        content: t('Наука'),
      },
    ],
    [t]
  );

  const onTabClick = useCallback(
    (tab: TabItem) => {
      onChangeType(tab.value as ArticleType);
    },
    [onChangeType]
  );

  return (
    <Tabs
      onTabClick={onTabClick}
      tabs={typeTabs}
      value={value}
      className={classNames('', {}, [className])}
    />
  );
});

ArticleTypeTabs.displayName = 'ArticleTypeTabs';
