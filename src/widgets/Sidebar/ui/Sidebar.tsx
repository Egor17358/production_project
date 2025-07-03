import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { memo, useMemo, useState } from 'react';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { geSidebarItems } from '../model/selectors/getSidebarItems';
import { Sidebaritem } from './Sidebaritem/Sidebaritem';
import { useSelector } from 'react-redux';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
export interface SidebarProps {
  className?: string;
}
export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const SidebarItemsList = useSelector(geSidebarItems);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemList = useMemo(
    () =>
      SidebarItemsList.map((item, index) => (
        <Sidebaritem key={index} item={item} collapsed={collapsed} />
      )),
    [collapsed, SidebarItemsList],
  );

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={
        <aside
          data-testid="sidebar"
          className={classNames(
            cls.SidebarRedesigned,
            { [cls.collapsedRedesigned]: collapsed },
            [className],
          )}
        >
          <AppLogo size={collapsed ? 30 : 50} className={cls.appLogo} />
          <VStack role="navigation" gap="8" className={cls.items}>
            {itemList}
          </VStack>
          <Icon
            data-testid="sidebar-toggle"
            onClick={onToggle}
            className={cls.collapseBtn}
            Svg={ArrowIcon}
            clickable
          />
          <div className={cls.switchers}>
            <ThemeSwitcher />
            <LangSwitcher short={collapsed} className={cls.language} />
          </div>
        </aside>
      }
      off={
        <aside
          data-testid="sidebar"
          className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
            className,
          ])}
        >
          <Button
            data-testid="sidebar-toggle"
            onClick={onToggle}
            className={cls.collapseBtn}
            theme={ButtonTheme.BACKGROUND_INVERTED}
            square
            size={ButtonSize.L}
          >
            {collapsed ? '>' : '<'}
          </Button>
          <VStack role="navigation" gap="8" className={cls.items}>
            {itemList}
          </VStack>
          <div className={cls.switchers}>
            <ThemeSwitcher />
            <LangSwitcher short={collapsed} className={cls.language} />
          </div>
        </aside>
      }
    />
  );
});

Sidebar.displayName = 'Sidebar';
