import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Popover.module.scss';
import { Popover as HPopover, PopoverButton, PopoverPanel } from '@headlessui/react';
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
    <HPopover className={classNames(cls.Popover, {}, [className, popupCls.popup])}>
      <PopoverButton className={popupCls.trigger}>{trigger}</PopoverButton>
      <PopoverPanel anchor={direction} className={cls.panel}>
        {children}
      </PopoverPanel>
    </HPopover>
  );
}

Popover.displayName = 'Popover';
