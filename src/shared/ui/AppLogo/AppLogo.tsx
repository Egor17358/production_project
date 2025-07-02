import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLogo.module.scss';
import UserIcon from '../../assets/icons/user-filled.svg';
import { HStack } from '../Stack';

export interface AppLogoProps {
  className?: string;
}
export const AppLogo = ({ className }: AppLogoProps) => {
  return (
    <HStack
      max
      justify="center"
      className={classNames(cls.AppLogoWrapper, {}, [className])}
    >
      <div className={cls.gradientBig}></div>
      <div className={cls.gradientSmall}></div>
      <UserIcon className={cls.appLogo} />
    </HStack>
  );
};
