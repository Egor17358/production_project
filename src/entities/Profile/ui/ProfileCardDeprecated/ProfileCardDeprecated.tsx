import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './ProfileCardDeprecated.module.scss';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { VStack, HStack } from '@/shared/ui/redesigned/Stack';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Loader as LoaderDeprecated } from '@/shared/ui/deprecated/Loader';
import {
  TextAlign,
  Text as TextDeprecated,
  TextTheme,
} from '@/shared/ui/deprecated/Text';

export const ProfileCardDeprecatedLoader = () => {
  return (
    <HStack
      justify="center"
      max
      className={classNames(cls.ProfileCard, { [cls.loading]: true }, [])}
    >
      <LoaderDeprecated />
    </HStack>
  );
};

export const ProfileCardDeprecatedError = () => {
  const { t } = useTranslation('profile');

  return (
    <HStack
      justify="center"
      max
      className={classNames(cls.ProfileCard, {}, [cls.error])}
    >
      <TextDeprecated
        theme={TextTheme.ERROR}
        title={t('Произошла ошибка при загрузке профиля')}
        text={t('Попробуйте обновить страницу')}
        align={TextAlign.CENTER}
      />
    </HStack>
  );
};

export const ProfileCardDeprecated = memo((props: ProfileCardProps) => {
  const {
    className,
    data,
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
          <AvatarDeprecated src={data?.avatar} />
        </HStack>
      )}
      <InputDeprecated
        onChange={onChangeFirstname}
        value={data?.first}
        placeholder={t('Ваше имя')}
        className={cls.input}
        readonly={readonly}
        data-testid={'ProfileCard.firstName'}
      />
      <InputDeprecated
        onChange={onChangeLastname}
        value={data?.lastname}
        placeholder={t('Ваша фамилия')}
        className={cls.input}
        readonly={readonly}
        data-testid={'ProfileCard.lastName'}
      />
      <InputDeprecated
        onChange={onChangeAge}
        value={data?.age}
        placeholder={t('Ваш возраст')}
        className={cls.input}
        readonly={readonly}
        data-testid={'ProfileCard.age'}
      />
      <InputDeprecated
        onChange={onChangeCity}
        value={data?.city}
        placeholder={t('Ваш город')}
        className={cls.input}
        readonly={readonly}
        data-testid={'ProfileCard.city'}
      />
      <InputDeprecated
        onChange={onChangeUsername}
        value={data?.username}
        placeholder={t('Введите имя пользователя')}
        className={cls.input}
        readonly={readonly}
        data-testid={'ProfileCard.username'}
      />
      {__PROJECT__ !== 'storybook' && (
        <>
          <InputDeprecated
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
});

ProfileCardDeprecated.displayName = 'ProfileCardDeprecated';
