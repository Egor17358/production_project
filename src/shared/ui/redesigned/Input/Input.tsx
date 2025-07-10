import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import React, {
  InputHTMLAttributes,
  memo,
  ReactNode,
  // MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import { HStack } from '../Stack';
import { Text } from '../Text';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readonly' | 'size'
>;

type InputSize = 'm' | 'l' | 's';

export interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  label?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  size?: InputSize;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    label,
    type = 'text',
    onChange,
    placeholder,
    autofocus,
    readonly,
    addonLeft,
    addonRight,
    size = 'm',
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      if (ref.current) {
        ref.current.focus();
      }
    }
  }, [autofocus]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const mods: Mods = {
    [cls.readonly]: readonly,
    [cls.focused]: isFocused,
    [cls.withAddonLeft]: Boolean(addonLeft),
    [cls.withAddonRight]: Boolean(addonRight),
  };

  const input = (
    <div className={classNames(cls.InputWrapper, mods, [className, cls[size]])}>
      <div className={cls.addonLeft}>{addonLeft}</div>
      <input
        ref={ref ? ref : null}
        className={cls.input}
        type={type}
        value={value}
        onChange={onChangeHandler}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        readOnly={readonly}
        {...otherProps}
      />
      <div className={cls.addonRight}>{addonRight}</div>
    </div>
  );

  if (label) {
    return (
      <HStack max gap="8">
        <Text text={label} />
        {input}
      </HStack>
    );
  }

  return input;
});

Input.displayName = 'Input';
