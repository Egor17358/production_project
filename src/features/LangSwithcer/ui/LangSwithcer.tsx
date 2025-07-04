import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { memo } from 'react';

export interface LangSwithcerProps {
  className?: string;
  short?: boolean;
}
export const LangSwithcer = memo(({ className, short }: LangSwithcerProps) => {
  const { t, i18n } = useTranslation('translation');

  const toogle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toogle}
      className={classNames('', {}, [className])}
    >
      {short ? t('Короткий язык') : t('Язык')}
    </Button>
  );
});

LangSwithcer.displayName = 'LangSwithcer';
