import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwithcer } from 'widgets/LangSwithcer/LangSwithcer';
import { useTranslation } from 'react-i18next';
export interface SidebarProps {
  className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed(prev => !prev);
  };

  const { t } = useTranslation('translation');

  return (
    <div
      data-testid='sidebar'
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button data-testid='sidebar-toggle' onClick={onToggle}>
        {t('toggleS')}
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwithcer className={cls.language} />
      </div>
    </div>
  );
};
