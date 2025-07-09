import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Popover.module.scss';
import {
  Popover as HPopover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react';
import { ReactNode } from 'react';
import popupCls from '../../styles/popup.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import { DropdownDirection } from '@/shared/types/ui';

export interface PopoverProps {
  className?: string;
  trigger: ReactNode;
  direction?: DropdownDirection;
  children: ReactNode;
}

export function Popover(props: PopoverProps) {
  const { className, trigger, direction = 'bottom right', children } = props;

  const menuClasses = [mapDirectionClass[direction], popupCls.menu];

  return (
    <HPopover
      className={classNames(cls.Popover, {}, [className, popupCls.popup])}
    >
      <PopoverButton as="div" className={popupCls.trigger}>
        {trigger}
      </PopoverButton>
      <PopoverPanel
        // anchor={direction}
        className={classNames(cls.panel, {}, menuClasses)}
      >
        {children}
      </PopoverPanel>
    </HPopover>
  );
}

Popover.displayName = 'Popover';
