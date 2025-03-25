import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwithcer } from 'widgets/LangSwithcer/LangSwithcer';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { geSidebarItems } from '../model/selectors/getSidebarItems';
import { Sidebaritem } from './Sidebaritem/Sidebaritem';
import { useSelector } from 'react-redux';
import { VStack } from 'shared/ui/Stack';

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
    <aside
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
      <VStack role='navigation' gap='8' className={cls.items}>
        {itemList}
      </VStack>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwithcer short={collapsed} className={cls.language} />
      </div>
    </aside>
  );
});

Sidebar.displayName = 'Sidebar';
