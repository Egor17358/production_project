import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Card } from '@/shared/ui/redesigned/Card';
import { VStack, HStack } from '@/shared/ui/redesigned/Stack';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';

export const ProfileCardRedesignedSkeleton = () => {
  return (
    <Card padding="24" max>
      <VStack gap="32">
        <HStack max justify="center">
          <Skeleton border="100%" width={'128px'} height={'128px'} />
        </HStack>
        <HStack gap="32" max>
          <VStack gap="16" max>
            <Skeleton width={'100%'} height={'38px'} />
            <Skeleton width={'100%'} height={'38px'} />
            <Skeleton width={'100%'} height={'38px'} />
            <Skeleton width={'100%'} height={'38px'} />
          </VStack>

          <VStack gap="16" max>
            <Skeleton width={'100%'} height={'38px'} />
            <Skeleton width={'100%'} height={'38px'} />
            <Skeleton width={'100%'} height={'38px'} />
            <Skeleton width={'100%'} height={'38px'} />
          </VStack>
        </HStack>
      </VStack>
    </Card>
  );
};

export const ProfileCardRedesignedError = () => {
  const { t } = useTranslation('profile');

  return (
    <HStack justify="center" max>
      <Text
        variant={'error'}
        title={t('Произошла ошибка при загрузке профиля')}
        text={t('Попробуйте обновить страницу')}
        align={'center'}
      />
    </HStack>
  );
};

export const ProfileCardRedesigned = memo((props: ProfileCardProps) => {
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

  return (
    <Card padding="24" border="partial" max className={className}>
      <VStack gap="32">
        {data?.avatar && (
          <HStack justify="center" max>
            <Avatar size={128} src={data?.avatar} />
          </HStack>
        )}
        <HStack gap="24" max>
          <VStack gap="16" max>
            <Input
              onChange={onChangeFirstname}
              value={data?.first}
              label={t('Имя')}
              readonly={readonly}
              data-testid={'ProfileCard.firstName'}
            />
            <Input
              onChange={onChangeLastname}
              value={data?.lastname}
              label={t('Фамилия')}
              readonly={readonly}
              data-testid={'ProfileCard.lastName'}
            />
            <Input
              onChange={onChangeAge}
              value={data?.age}
              label={t('Возраст')}
              readonly={readonly}
              data-testid={'ProfileCard.age'}
            />
            <Input
              onChange={onChangeCity}
              value={data?.city}
              label={t('Город')}
              readonly={readonly}
              data-testid={'ProfileCard.city'}
            />
          </VStack>
          <VStack gap="16" max>
            <Input
              onChange={onChangeUsername}
              value={data?.username}
              label={t('Имя пользователя')}
              readonly={readonly}
              data-testid={'ProfileCard.username'}
            />
            <Input
              onChange={onChangeAvatar}
              value={data?.avatar}
              label={t('Ссылка на аватар')}
              readonly={readonly}
              data-testid={'ProfileCard.avatar'}
            />
            <CurrencySelect
              value={data?.currency}
              onChange={onChangeCurrency}
              readonly={readonly}
            />
            <CountrySelect
              value={data?.country}
              onChange={onChangeCountry}
              readonly={readonly}
            />
          </VStack>
        </HStack>
      </VStack>
    </Card>
  );
});

ProfileCardRedesigned.displayName = 'ProfileCardRedesigned';
