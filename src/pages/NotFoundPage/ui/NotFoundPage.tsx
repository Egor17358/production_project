import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';

export interface NotFoundPageProps {
  className?: string;
}
export const NotFoundPage = (props: NotFoundPageProps) => {
  const { className } = props;
  const { t } = useTranslation('translation');

  return (
    <div
      data-testid={'NotFoundPage'}
      className={classNames(cls.NotFoundPage, {}, [className])}
    >
      {t('Страница не найдена')}
    </div>
  );
};
