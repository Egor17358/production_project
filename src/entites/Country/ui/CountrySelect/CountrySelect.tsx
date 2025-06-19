// import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
// import { Select } from '@/shared/ui/Select/Select';
import { Country } from '../../model/types/country';
import { memo, useCallback } from 'react';
import { ListBox } from '@/shared/ui/Popups';
// import {Counter} from '@/entites/Counter/ui/Counter'

export interface CountrySelectProps {
  className?: string;
  value?: Country;
  readonly?: boolean;
  onChange?: (value: Country) => void;
}

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.USA, content: Country.USA },
];

export const CountrySelect = memo(
  ({ className, value, readonly, onChange }: CountrySelectProps) => {
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Country);
      },
      [onChange]
    );

    return (
      <ListBox
        className={className}
        value={value}
        onChange={onChangeHandler}
        items={options}
        defaultValue={t('Выберите страну')}
        readonly={readonly}
        direction='top'
        label={t('Выберите страну')}
      />
    );
  }
);

CountrySelect.displayName = 'CurrencySelect';
