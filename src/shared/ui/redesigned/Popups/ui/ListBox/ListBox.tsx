import {
  // Button,
  Listbox as HListBox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { Fragment, ReactNode, useMemo } from 'react';
import cls from './ListBox.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
// import { AnchorPropsWithSelection } from '@headlessui/react/dist/internal/floating';
import { HStack } from '../../../../redesigned/Stack';
import popupCls from '../../styles/popup.module.scss';
import { Button } from '../../../Button';
import { mapDirectionClass } from '../../styles/consts';
import { DropdownDirection } from '@/shared/types/ui';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { Icon } from '../../../Icon';

export interface ListBoxItem<T extends string> {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps<T extends string> {
  items?: ListBoxItem<T>[];
  className?: string;
  value?: T;
  defaultValue?: string;
  onChange?: (value: T) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
  const {
    items,
    className,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = 'bottom right',
    label,
  } = props;

  const optionsClasses = [mapDirectionClass[direction], popupCls.menu];

  const selectedItem = useMemo(() => {
    return items?.find((item) => item.value === value);
  }, [items, value]);

  return (
    <HStack gap={'4'}>
      {label && <span>{`${label}>`}</span>}
      <HListBox
        disabled={readonly}
        as={'div'}
        className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
        value={value}
        onChange={onChange}
      >
        <ListboxButton as={Fragment}>
          <Button
            addonRight={<Icon Svg={ArrowIcon} />}
            variant="filled"
            disabled={readonly}
          >
            {selectedItem?.content ?? defaultValue}
          </Button>
        </ListboxButton>
        <ListboxOptions className={classNames(cls.options, {}, optionsClasses)}>
          {items?.map((item) => (
            <ListboxOption
              key={item.value}
              disabled={item.disabled}
              value={item.value}
              as={Fragment}
            >
              {({ focus, selected }) => (
                <li
                  className={classNames(cls.item, {
                    [popupCls.active]: focus,
                    [popupCls.disabled]: item.disabled,
                    [popupCls.selected]: selected,
                  })}
                >
                  {selected}
                  {item.content}
                </li>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </HListBox>
    </HStack>
  );
}
