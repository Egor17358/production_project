import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AvatarDropdown.module.scss';
import { useTranslation } from 'react-i18next';
import { Dropdown } from '@/shared/ui/Popups';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, isUserManager, userActions } from '@/entities/User';
import { useCallback } from 'react';
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router';
import { Avatar } from '@/shared/ui/Avatar';
import { useUserRole } from '@/entities/User';

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

  return (
    <Dropdown
      className={classNames(cls.AvatarDropdown, {}, [className])}
      direction={'bottom end'}
      items={[
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
      ]}
      trigger={<Avatar fallbackInverted size={30} src={authData.avatar} />}
    />
  );
};
