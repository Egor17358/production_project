import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AvatarDropdown.module.scss';
import { useTranslation } from 'react-i18next';
import { Dropdown } from '@/shared/ui/Popups';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';
import { useCallback } from 'react';
import { RoutePath } from '@/shared/const/router';
import { Avatar } from '@/shared/ui/Avatar';

export interface AvatarDropdownProps {
  className?: string;
}
export const AvatarDropdown = ({ className }: AvatarDropdownProps) => {
  const { t } = useTranslation('translation');

  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);
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
                href: RoutePath.admin_panel,
              },
            ]
          : []),
        {
          content: t('Профиль'),
          href: RoutePath.profile + authData.id,
        },
      ]}
      trigger={<Avatar size={30} src={authData.avatar} />}
    />
  );
};
