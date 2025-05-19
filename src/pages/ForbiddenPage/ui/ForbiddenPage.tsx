import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ForbiddenPage.module.scss';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

export interface ForbiddenPageProps {
  className?: string;
}
const ForbiddenPage = ({ className }: ForbiddenPageProps) => {
  const { t } = useTranslation('translation');

  return <Page>{t('У вас нет доступа к этой странице')}</Page>;
};

export default ForbiddenPage;
