import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from '@/shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';
import { memo, useCallback } from 'react';
import { ListBox } from '@/shared/ui/Popups/index';

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
      [onChange]
    );

    return (
      <ListBox
        className={className}
        value={value}
        onChange={onChangeHandler}
        items={options}
        defaultValue={t('Укажите Валюту')}
        readonly={readonly}
        label={t('Укажите Валюту')}
      />
    );
  }
);

CurrencySelect.displayName = 'CurrencySelect';
