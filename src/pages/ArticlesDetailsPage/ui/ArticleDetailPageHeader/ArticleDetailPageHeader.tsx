import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailPageHeader.module.scss';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { getCanEditArticle } from 'pages/ArticlesDetailsPage/model/selectors/article';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entites/Article';

export interface ArticleDetailPageHeaderProps {
  className?: string;
}
export const ArticleDetailPageHeader = memo(({ className }: ArticleDetailPageHeaderProps) => {
  const { t } = useTranslation('translation');
  const navigate = useNavigate();
  const isAuth = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.article_details}${article?.id}/edit`);
  }, [navigate, article?.id]);

  return (
    <div className={classNames(cls.ArticleDetailPageHeader, {}, [className])}>
      <Button onClick={onBackToList} theme={ButtonTheme.OUTLINE}>
        {t('Назад к списку')}
      </Button>
      {isAuth && (
        <Button className={cls.editBtn} onClick={onEditArticle} theme={ButtonTheme.OUTLINE}>
          {t('Редактировать')}
        </Button>
      )}
    </div>
  );
});

ArticleDetailPageHeader.displayName = 'ArticleDetailPageHeader';
