import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import { Profile } from '../../model/types/profile';
import { Loader } from '@/shared/ui/Loader';
import { Avatar } from '@/shared/ui/Avatar';
import { Currency } from '@/entities/Currency';
import { CurrencySelect } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/Stack';

export interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency?: Currency) => void;
  onChangeCountry?: (country?: Country) => void;
}
export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    error,
    isLoading,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <HStack
        justify="center"
        max
        className={classNames(cls.ProfileCard, { [cls.loading]: true }, [
          className,
        ])}
      >
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack
        justify="center"
        max
        className={classNames(cls.ProfileCard, {}, [className, cls.error])}
      >
        <Text
          theme={TextTheme.ERROR}
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте обновить страницу')}
          align={TextAlign.CENTER}
        />
      </HStack>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack
      gap="8"
      max
      className={classNames(cls.ProfileCard, mods, [className])}
    >
      {data?.avatar && (
        <HStack justify="center" max className={cls.avatarWrapper}>
          <Avatar src={data?.avatar} />
        </HStack>
      )}
      <Input
        onChange={onChangeFirstname}
        value={data?.first}
        placeholder={t('Ваше имя')}
        className={cls.input}
        readonly={readonly}
        data-testid={'ProfileCard.firstName'}
      />
      <Input
        onChange={onChangeLastname}
        value={data?.lastname}
        placeholder={t('Ваша фамилия')}
        className={cls.input}
        readonly={readonly}
        data-testid={'ProfileCard.lastName'}
      />
      <Input
        onChange={onChangeAge}
        value={data?.age}
        placeholder={t('Ваш возраст')}
        className={cls.input}
        readonly={readonly}
        data-testid={'ProfileCard.age'}
      />
      <Input
        onChange={onChangeCity}
        value={data?.city}
        placeholder={t('Ваш город')}
        className={cls.input}
        readonly={readonly}
        data-testid={'ProfileCard.city'}
      />
      <Input
        onChange={onChangeUsername}
        value={data?.username}
        placeholder={t('Введите имя пользователя')}
        className={cls.input}
        readonly={readonly}
        data-testid={'ProfileCard.username'}
      />
      {__PROJECT__ !== 'storybook' && (
        <>
          <Input
            onChange={onChangeAvatar}
            value={data?.avatar}
            placeholder={t('Введите ссылку на аватар')}
            className={cls.input}
            readonly={readonly}
            data-testid={'ProfileCard.avatar'}
          />
          <CurrencySelect
            className={cls.input}
            value={data?.currency}
            onChange={onChangeCurrency}
            readonly={readonly}
          />
          <CountrySelect
            className={cls.input}
            value={data?.country}
            onChange={onChangeCountry}
            readonly={readonly}
          />
        </>
      )}
    </VStack>
  );
};
