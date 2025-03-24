import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwithcer } from 'widgets/LangSwithcer/LangSwithcer';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { geSidebarItems } from '../model/selectors/getSidebarItems';
import { Sidebaritem } from './Sidebaritem/Sidebaritem';
import { useSelector } from 'react-redux';

export interface SidebarProps {
  className?: string;
}
export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const SidebarItemsList = useSelector(geSidebarItems);

  const onToggle = () => {
    setCollapsed(prev => !prev);
  };

  const itemList = useMemo(
    () =>
      SidebarItemsList.map((item, index) => (
        <Sidebaritem key={index} item={item} collapsed={collapsed} />
      )),
    [collapsed, SidebarItemsList]
  );

  return (
    <menu
      data-testid='sidebar'
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button
        data-testid='sidebar-toggle'
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>{itemList}</div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwithcer short={collapsed} className={cls.language} />
      </div>
    </menu>
  );
});

Sidebar.displayName = 'Sidebar';
