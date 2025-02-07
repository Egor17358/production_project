import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

export interface LangSwithcerProps {
  className?: string;
}
export const LangSwithcer = ({ className }: LangSwithcerProps) => {
  const { t, i18n } = useTranslation('translation');

  const toogle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toogle}
      className={classNames('', {}, [className])}
    >
      {t('Язык')}
    </Button>
  );
};
