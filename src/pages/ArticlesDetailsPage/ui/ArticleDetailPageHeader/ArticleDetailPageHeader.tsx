import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { RoutePath } from '@/shared/const/router';
import { useNavigate } from 'react-router-dom';
import { getCanEditArticle } from '../../model/selectors/article';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from '@/entites/Article';
import { HStack } from '@/shared/ui/Stack';

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
    <HStack max justify='between' className={classNames('', {}, [className])}>
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
});

ArticleDetailPageHeader.displayName = 'ArticleDetailPageHeader';
