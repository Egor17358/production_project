import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebaritem.module.scss';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { memo } from 'react';

export interface SidebaritemProps {
  item?: SidebarItemType;
  collapsed: boolean;
}
export const Sidebaritem = memo(({ item, collapsed }: SidebaritemProps) => {
  const { t } = useTranslation('translation');

  return (
    <AppLink
      className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  );
});

Sidebaritem.displayName = 'Sidebaritem';
