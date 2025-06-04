import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleEditPage.module.scss';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

export interface ArticleEditPageProps {
  className?: string;
}
const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
  const { t } = useTranslation('translation');
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <div className={classNames(cls.ArticleEditPage, {}, [className])}>
      {isEdit ? t('Редактирование статьи') + id : t('Создание новой статьи')}
    </div>
  );
});

ArticleEditPage.displayName = 'ArticleEditPage';

export default ArticleEditPage;
