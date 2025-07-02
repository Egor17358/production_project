import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainLayout.module.scss';
import { useTranslation } from 'react-i18next';
import { ReactElement } from 'react';

export interface MainLayoutProps {
  className?: string;
  header: ReactElement;
  content: ReactElement;
  sidebar: ReactElement;
  toolbar?: ReactElement;
}
export const MainLayout = (props: MainLayoutProps) => {
  const { className, content, header, sidebar, toolbar } = props;
  const { t } = useTranslation('translation');

  return (
    <div className={classNames(cls.MainLayout, {}, [className])}>
      <div className={cls.sidebar}>{sidebar}</div>
      <div className={cls.content}>{content}</div>
      <div className={cls.rightbar}>
        <div className={cls.header}>{header}</div>
        <div className={cls.toolbar}>{toolbar}</div>
      </div>
    </div>
  );
};
