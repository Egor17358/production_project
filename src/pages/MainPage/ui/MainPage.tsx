import { BugButton } from 'app/providers/ErrorBoundary';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
  const { t } = useTranslation('main');

  const [value, setValue] = useState('');

  const onChange = (val: string) => {
    setValue(val);
  };
  return (
    <div>
      <Input placeholder='Enter text' value={value} onChange={onChange} />
      <BugButton />
      {t('Главная страница')}
    </div>
  );
};

export default MainPage;
