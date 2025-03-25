import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { HStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page/Page';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <Page>
      <BugButton />
      {t('Главная страница')}
      <HStack>
        <div>{'12312'}</div>
        <ListBox 
          defaultValue='Выберите значение'
          onChange={(v:string)=> {}}
          value={undefined}
          items={[
            {value: '1', content: '12345'},
            {value: '2', content: '123', disabled: true},
            {value: '33', content: '123111'},
          ]}

        />
      </HStack>
    </Page>
  );
};

export default MainPage;
