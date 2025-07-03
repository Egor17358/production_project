import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Article } from '../../model/types/article';
import { ArticleView } from '../../model/consts/articleConsts';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
// import { PAGE_ID } from '@/widgets/Page/ui/Page';

export interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));
};

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL,
    target,
  } = props;
  const { t } = useTranslation('translation');

  // const rowRender = ({ index, isScrolling, isVisible, key, style }: ListRowProps) => {
  //   const items = [];
  //   const fromIndex = index * itemsPerRow;
  //   const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

  //   for (let index = fromIndex; index < toIndex; index++) {
  //     items.push(
  //       <ArticleListItem
  //         target={target}
  //         key={articles[index].id}
  //         article={articles[index]}
  //         view={view}
  //         className={cls.card}
  //       />
  //     );
  //   }

  //   return (
  //     <div key={key} className={cls.row} style={style}>
  //       {items}
  //     </div>
  //   );
  // };

  // const renderArticle = (article: Article) => {
  //   return (
  //     <ArticleListItem
  //       target={target}
  //       key={article.id}
  //       article={article}
  //       view={view}
  //       className={cls.card}
  //     />
  //   );
  // };

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t('Статьи не найдены')} />
      </div>
    );
  }

  return (
    // <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
    //   {articles.length > 0 ? articles.map(renderArticle) : null}
    //   {isLoading && getSkeletons(view)}
    // </div>
    <div
      data-testid={'ArticleList'}
      className={classNames(cls.ArticleList, {}, [className, cls[view]])}
    >
      {articles.map((item) => (
        <ArticleListItem
          article={item}
          view={view}
          target={target}
          key={item.id}
          className={cls.card}
        />
      ))}

      {isLoading && getSkeletons(view)}
    </div>
  );
});

ArticleList.displayName = 'ArticleList';
