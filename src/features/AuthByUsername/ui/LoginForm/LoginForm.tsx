import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

export interface LoginFormProps {
  className?: string;
}
export const LoginForm = (props: LoginFormProps) => {
  const { t } = useTranslation('translation');

  return (
    <div className={classNames(cls.LoginForm, {}, [])}>
      <Input 
        placeholder={t('Введите username')}
        className={cls.input}
        autofocus
        />
      <Input 
        placeholder={t('Введите пароль')}
        className={cls.input}/>
      <Button className={cls.loginBtn}>{t('Войти')}</Button>
    </div>
  );
};
