import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { useParams } from 'react-router-dom';
// import { Text } from '@/shared/ui/deprecated/Text/Text';
// import { useTranslation } from 'react-i18next';
import { ProfileRating } from '@/features/profileRating';

export interface ProfilePageProps {
  className?: string;
}
const ProfilePage = ({ className }: ProfilePageProps) => {
  // const { t } = useTranslation('profile');
  const { id } = useParams<{ id: string }>();

  // if (!id) {
  //   return <Text text={t('Произошла ошибка при загрузке профиля')} />;
  // }

  return (
    <Page
      data-testid={'ProfilePage'}
      className={classNames('', {}, [className])}
    >
      <VStack gap="16" max>
        <EditableProfileCard id={id} />
        <ProfileRating profileId={id} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;
