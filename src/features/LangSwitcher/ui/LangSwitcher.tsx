import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { memo } from 'react';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

export interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}
export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation('translation');

  const toogle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Button
          variant="clear"
          // onClick={toogle}
          // className={classNames('', {}, [className])}
        >
          {short ? t('Короткий язык') : t('Язык')}
        </Button>
      }
      off={
        <ButtonDeprecated
          theme={ButtonTheme.CLEAR}
          onClick={toogle}
          className={classNames('', {}, [className])}
        >
          {short ? t('Короткий язык') : t('Язык')}
        </ButtonDeprecated>
      }
    />
  );
});

LangSwitcher.displayName = 'LangSwitcher';
