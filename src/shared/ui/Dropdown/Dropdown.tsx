import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import cls from './Dropdown.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment, ReactNode } from 'react';
import { AnchorProps } from '@headlessui/react/dist/internal/floating';
import { AppLink } from '../AppLink/AppLink';

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

export function Dropdown(props: DropdownProps) {
  const { className, items, trigger, direction = 'bottom' } = props;

  return (
    <Menu as={'div'} className={classNames(cls.Dropdown, {}, [className])}>
      <MenuButton className={cls.btn}>{trigger}</MenuButton>
      <MenuItems anchor={direction} className={cls.menu}>
        {items.map((item, index) => {
          const content = ({ focus }: { focus: boolean }) => (
            <button
              key={index}
              type='button'
              disabled={item.disabled}
              onClick={item.onClick}
              className={classNames(cls.item, { [cls.active]: focus }, [])}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <>
                <MenuItem as={AppLink} to={item.href} disabled={item.disabled}>
                  {content}
                </MenuItem>
              </>
            );
          }
          return (
            <>
              <MenuItem as={Fragment} disabled={item.disabled}>
                {content}
              </MenuItem>
            </>
          );
        })}
      </MenuItems>
    </Menu>
  );
}
