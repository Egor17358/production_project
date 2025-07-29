import { getArticleDetailsData } from '@/entities/Article';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleAdditionalInfo } from '@/widgets/ ArticleAdditionalInfo';
import { useSelector } from 'react-redux';
import cls from './AdditionalContainer.module.scss';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRouteArticlesEdit } from '@/shared/const/router';

export const AdditionalContainer = memo(() => {
  const article = useSelector(getArticleDetailsData);

  const navigate = useNavigate();
  const onEditArticle = useCallback(() => {
    if (article) {
      navigate(getRouteArticlesEdit(article.id));
    }
  }, [navigate, article]);

  if (!article) {
    return null;
  }

  return (
    <Card className={cls.card} padding="24" border="round">
      <ArticleAdditionalInfo
        onEdit={onEditArticle}
        author={article.user}
        createdAt={article.createdAt}
        views={article.views}
      ></ArticleAdditionalInfo>
    </Card>
  );
});

AdditionalContainer.displayName = 'AdditionalContainer';
