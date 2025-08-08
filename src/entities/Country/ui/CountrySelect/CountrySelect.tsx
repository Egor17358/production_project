// import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
// import { Select } from '@/shared/ui/deprecated/Select/Select';
import { Country } from '../../model/types/country';
import { memo, useCallback } from 'react';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';
// import {Counter} from '@/entities/Counter/ui/Counter'

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
      [onChange],
    );

    const propsComponent = {
      className: className,
      value: value,
      onChange: onChangeHandler,
      items: options,
      defaultValue: t('Выберите страну'),
      readonly: readonly,
      label: t('Выберите страну'),
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
        off={<ListBoxDeprecated direction={'top'} {...propsComponent} />}
      />
    );
  },
);

CountrySelect.displayName = 'CurrencySelect';
