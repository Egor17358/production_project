import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AvatarDropdown.module.scss';
import { useTranslation } from 'react-i18next';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, isUserManager, userActions } from '@/entities/User';
import { useCallback } from 'react';
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { useUserRole } from '@/entities/User';
import { ToggleFeatures } from '@/shared/lib/features';
import { Dropdown } from '@/shared/ui/redesigned/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';

export interface AvatarDropdownProps {
  className?: string;
}
export const AvatarDropdown = ({ className }: AvatarDropdownProps) => {
  const { t } = useTranslation('translation');

  const dispatch = useDispatch();
  // const isAdmin = useSelector(isUserAdmin);
  const isAdmin = useUserRole();
  const isManager = useSelector(isUserManager);
  const authData = useSelector(getUserAuthData);

  const onLogOut = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!authData) {
    return null;
  }

  const items = [
    {
      content: t('Выйти'),
      onClick: onLogOut,
    },
    ...(isAdminPanelAvailable
      ? [
          {
            content: t('Админка'),
            href: getRouteAdmin(),
          },
        ]
      : []),
    {
      content: t('Профиль'),
      href: getRouteProfile(authData.id),
    },
  ];

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={
        <Dropdown
          className={classNames(cls.AvatarDropdown, {}, [className])}
          direction={'bottom end'}
          items={items}
          trigger={<Avatar size={40} src={authData.avatar} />}
        />
      }
      off={
        <DropdownDeprecated
          className={classNames(cls.AvatarDropdown, {}, [className])}
          direction={'bottom end'}
          items={items}
          trigger={
            <AvatarDeprecated
              fallbackInverted
              size={30}
              src={authData.avatar}
            />
          }
        />
      }
    />
  );
};
