import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';

export interface PageErrorProps {
  className?: string;
}
export const PageError = (props: PageErrorProps) => {
  const { t } = useTranslation('translation');

  const reloadPage = () => {
    location.reload()
  }

  return <div className={classNames(cls.PageError, {}, [props.className])}>
    <p>{t('Произошла непредвиденная ошибка')}</p>
    <Button onClick={reloadPage}>
      {t('Обновить страницу')}
    </Button>
  </div>;
};
