import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { getRouteArticles, getRouteArticlesEdit } from '@/shared/const/router';
import { useNavigate } from 'react-router-dom';
import { getCanEditArticle } from '../../model/selectors/article';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from '@/entities/Article';
import { HStack } from '@/shared/ui/deprecated/Stack';

export interface ArticleDetailPageHeaderProps {
  className?: string;
}
export const ArticleDetailPageHeader = memo(
  ({ className }: ArticleDetailPageHeaderProps) => {
    const { t } = useTranslation('translation');
    const navigate = useNavigate();
    const isAuth = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
      navigate(getRouteArticles());
    }, [navigate]);

    const onEditArticle = useCallback(() => {
      if (article) {
        navigate(getRouteArticlesEdit(article.id));
      }
    }, [navigate, article]);

    return (
      <HStack max justify="between" className={classNames('', {}, [className])}>
        <Button onClick={onBackToList} theme={ButtonTheme.OUTLINE}>
          {t('Назад к списку')}
        </Button>
        {isAuth && (
          <Button onClick={onEditArticle} theme={ButtonTheme.OUTLINE}>
            {t('Редактировать')}
          </Button>
        )}
      </HStack>
    );
  },
);

ArticleDetailPageHeader.displayName = 'ArticleDetailPageHeader';
