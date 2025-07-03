import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import cls from './Dropdown.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Fragment, ReactNode } from 'react';
import { AnchorProps } from '@headlessui/react/dist/internal/floating';
import { AppLink } from '../../../AppLink/AppLink';
import popupCls from '../../styles/popup.module.scss';

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
  direction?: AnchorProps;
}
/**
 * Устарел, используем компоненты из папки redesigned
 * @deprecated
 */
export function Dropdown(props: DropdownProps) {
  const { className, items, trigger, direction = 'bottom' } = props;

  return (
    <Menu
      as={'div'}
      className={classNames(cls.Dropdown, {}, [className, popupCls.popup])}
    >
      <MenuButton className={popupCls.trigger}>{trigger}</MenuButton>
      <MenuItems anchor={direction} className={cls.menu}>
        {items.map((item, index) => {
          const content = ({ focus }: { focus: boolean }) => (
            <button
              type="button"
              disabled={item.disabled}
              onClick={item.onClick}
              className={classNames(cls.item, { [popupCls.active]: focus }, [])}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <MenuItem
                key={'dropdown-key' + index}
                as={AppLink}
                to={item.href}
                disabled={item.disabled}
              >
                {content}
              </MenuItem>
            );
          }
          return (
            <MenuItem
              key={'dropdown-key' + index}
              as={Fragment}
              disabled={item.disabled}
            >
              {content}
            </MenuItem>
          );
        })}
      </MenuItems>
    </Menu>
  );
}
