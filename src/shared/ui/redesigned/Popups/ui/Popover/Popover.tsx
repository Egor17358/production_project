import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Popover.module.scss';
import {
  Popover as HPopover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react';
import { ReactNode } from 'react';
import { AnchorProps } from '@headlessui/react/dist/internal/floating';
import popupCls from '../../styles/popup.module.scss';

export interface PopoverProps {
  className?: string;
  trigger: ReactNode;
  direction?: AnchorProps;
  children: ReactNode;
}

export function Popover(props: PopoverProps) {
  const { className, trigger, direction = 'bottom', children } = props;

  return (
    <HPopover
      className={classNames(cls.Popover, {}, [className, popupCls.popup])}
    >
      <PopoverButton as="div" className={popupCls.trigger}>
        {trigger}
      </PopoverButton>
      <PopoverPanel
        anchor={direction}
        className={classNames(cls.panel, {}, [
          className,
          // popupCls.popup,
          popupCls.menu,
        ])}
      >
        {children}
      </PopoverPanel>
    </HPopover>
  );
}

Popover.displayName = 'Popover';
