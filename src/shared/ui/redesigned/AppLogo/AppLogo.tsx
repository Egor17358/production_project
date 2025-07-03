import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLogo.module.scss';
import UserIcon from '../../../assets/icons/user-filled.svg';
import { HStack } from '../../deprecated/Stack';

export interface AppLogoProps {
  className?: string;
  size?: number;
}

export const AppLogo = ({ className, size = 50 }: AppLogoProps) => {
  return (
    <HStack
      max
      justify="center"
      className={classNames(cls.AppLogoWrapper, {}, [className])}
    >
      <div className={cls.gradientBig}></div>
      <div className={cls.gradientSmall}></div>
      <UserIcon
        width={size}
        height={size}
        color={'black'}
        className={cls.appLogo}
      />
    </HStack>
  );
};
