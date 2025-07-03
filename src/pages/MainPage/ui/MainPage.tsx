// eslint-disable-next-line my-plugin-test-for-me/layer-imports
import { BugButton } from '@/app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/deprecated/Popups';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { Page } from '@/widgets/Page';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <Page data-testid="MainPage">
      <BugButton />
      {t('Главная страница')}
      <VStack>
        <div>{'test message'}</div>
        <ListBox
          defaultValue="Выберите значение"
          onChange={() => {}}
          value={undefined}
          items={[
            { value: '1', content: '12345' },
            { value: '2', content: '123', disabled: true },
            { value: '33', content: '123111' },
          ]}
        />
      </VStack>
    </Page>
  );
};

export default MainPage;
