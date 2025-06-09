import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import { ChangeEvent, useMemo } from 'react';

export interface SelectOption<T extends string> {
  value: string;
  content: string;
}

export interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  readonly?: boolean;
  onChange?: (value: T) => void;
}
export const Select = <T extends string>(props: SelectProps<T>) => {
  const { className, label, options, value, readonly, onChange } = props;

  const optionsList = useMemo(() => {
    return options?.map((opt, index) => (
      <option className={cls.option} key={index} value={opt.value}>
        {opt.content}
      </option>
    ));
  }, [options]);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as T;

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
};
