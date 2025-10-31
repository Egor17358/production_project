import { useTranslation } from 'react-i18next';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Page } from '@/widgets/Page';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <Page data-testid="MainPage">
      {t('Главная страница')}
      <VStack style={{ marginTop: '50px' }} gap="8">
        <span>{'Логин: admin'}</span>
        <span>{'Пароль: 123'}</span>
      </VStack>
    </Page>
  );
};

export default MainPage;
