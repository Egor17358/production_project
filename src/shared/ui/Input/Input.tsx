import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import React, { InputHTMLAttributes, memo, MutableRefObject, useEffect, useRef, useState } from 'react';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readonly'
>;

export interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    type = 'text',
    onChange,
    placeholder,
    autofocus,
    readonly,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>

  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  const isCaretVisible = isFocused && !readonly

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      if (ref.current) {
        ref.current.focus()
      }
    }
  }, [autofocus]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
    setCaretPosition(event.target.value.length);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  const mods: Mods = {
    [cls.readonly]: readonly,
  }

  return (
    <div className={classNames(cls.InputWrapper, mods, [className])}>
      {placeholder && (
        <div
          style={{whiteSpace: __PROJECT__ === 'storybook' ? 'nowrap' : 'unset'}}
          className={cls.placeholder}>{`${placeholder}>`}</div>
      )}
      <div className={cls.caretWrapper}>
        <input
          ref={ref ? ref : null}
          className={cls.input}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onBlur={onBlur}
          onFocus={onFocus}
          onSelect={onSelect}
          readOnly={readonly}
          {...otherProps}
        />
        {isCaretVisible && (
          <span
            style={{ left: `${caretPosition * 9}px` }}
            className={cls.caret}
          />
        )}
      </div>
    </div>
  );
});

Input.displayName = 'Input';
