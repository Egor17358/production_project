// import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
// import { Select } from '@/shared/ui/deprecated/Select/Select';
import { Currency } from '../../model/types/currency';
import { memo, useCallback } from 'react';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

export interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  readonly?: boolean;
  onChange?: (value: Currency) => void;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(
  ({ className, value, readonly, onChange }: CurrencySelectProps) => {
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Currency);
      },
      [onChange],
    );

    const propsComponent = {
      className: className,
      value: value,
      onChange: onChangeHandler,
      items: options,
      defaultValue: t('Укажите Валюту'),
      readonly: readonly,
      label: t('Укажите Валюту'),
    };

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <ListBox
            direction={
              __PROJECT__ !== 'storybook' ? 'top right' : 'bottom left'
            }
            {...propsComponent}
          />
        }
        off={<ListBoxDeprecated {...propsComponent} />}
      />
    );
  },
);

CurrencySelect.displayName = 'CurrencySelect';
