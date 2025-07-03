import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Sidebaritem.module.scss';
import { useTranslation } from 'react-i18next';
import {
  AppLink as AppLinkDepreacted,
  AppLinkTheme,
} from '@/shared/ui/deprecated/AppLink';
import { SidebarItemType } from '../../model/type/sidebar';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Icon } from '@/shared/ui/redesigned/Icon';

export interface SidebaritemProps {
  item: SidebarItemType;
  collapsed: boolean;
}
export const Sidebaritem = memo(({ item, collapsed }: SidebaritemProps) => {
  const { t } = useTranslation('translation');

  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <AppLink
          className={classNames(
            cls.itemRedesigned,
            { [cls.collapsedRedesigned]: collapsed },
            [],
          )}
          activeClassName={cls.active}
          // theme={AppLinkTheme.SECONDARY}
          to={item.path}
        >
          <Icon Svg={item.Icon} className={cls.icon} />
          <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
      }
      off={
        <AppLinkDepreacted
          className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
          theme={AppLinkTheme.SECONDARY}
          to={item.path}
        >
          <item.Icon className={cls.icon} />
          <span className={cls.link}>{t(item.text)}</span>
        </AppLinkDepreacted>
      }
    />
  );
});

Sidebaritem.displayName = 'Sidebaritem';
