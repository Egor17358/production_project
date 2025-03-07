import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import { useTranslation } from 'react-i18next';
import { ChangeEvent, memo, useMemo } from 'react';

export interface SelectOption {
  value: string;
  content: string;
}

export interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  readonly?: boolean;
  onChange?: (value: string) => void;
}
export const Select = memo((props: SelectProps) => {
  const { className, label, options, value, readonly, onChange } = props;

  const { t } = useTranslation('translation');

  const optionsList = useMemo(() => {
    return options?.map((opt, index) => (
      <option className={cls.option} key={index} value={opt.value}>
        {opt.content}
      </option>
    ));
  }, [options]);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    if (onChange) {
      onChange(value);
    }
  };

  const mods: Mods = {};

  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      {label && <span className={cls.label}>{`${label}>`}</span>}
      <select disabled={readonly} className={cls.select} value={value} onChange={onChangeHandler}>
        {optionsList}
      </select>
    </div>
  );
});

Select.displayName = 'Select';
