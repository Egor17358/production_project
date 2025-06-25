import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

export interface ForbiddenPageProps {
  className?: string;
}
const ForbiddenPage = ({ className }: ForbiddenPageProps) => {
  const { t } = useTranslation('translation');

  return (
    <Page data-testid="ForbiddenPage">
      {t('У вас нет доступа к этой странице')}
    </Page>
  );
};

export default ForbiddenPage;
