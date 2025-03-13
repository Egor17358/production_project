import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Article, ArticleList } from 'entites/Article';
import { ArticleView } from 'entites/Article';

export interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation('article-details');

  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      <ArticleList isLoading={true} articles={[]} />
    </div>
  );
};

export default memo(ArticlesPage);
