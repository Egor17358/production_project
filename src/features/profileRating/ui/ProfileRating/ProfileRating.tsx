import { RatingCard } from '@/entities/Rating';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  useGetProfileRatings,
  useRateProfile,
} from '../../api/profileRatingApi';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

export interface ProfileRatingProps {
  className?: string;
  profileId?: string;
}

const ProfileRating = memo(
  ({ className, profileId = '' }: ProfileRatingProps) => {
    const { t } = useTranslation('translation');
    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetProfileRatings({
      userId: userData?.id ?? '',
      profileId,
    });

    const [rateProfileMutation] = useRateProfile();

    const handleRateProfile = useCallback(
      (starsCount: number, feedback?: string) => {
        try {
          rateProfileMutation({
            userId: userData?.id ?? '',
            rate: starsCount,
            profileId,
            feedback,
          });
        } catch (error) {
          console.log(error);
        }
      },
      [profileId, rateProfileMutation, userData?.id],
    );

    const onCancel = useCallback(
      (starsCount: number) => {
        handleRateProfile(starsCount);
      },
      [handleRateProfile],
    );

    const onAccept = useCallback(
      (starsCount: number, feedback?: string) => {
        handleRateProfile(starsCount, feedback);
      },
      [handleRateProfile],
    );

    if (isLoading && __PROJECT__ !== 'storybook') {
      return <Skeleton width={'100%'} height={120} />;
    }

    const rating = data?.[0];

    return (
      <RatingCard
        onAccept={onAccept}
        onCancel={onCancel}
        rate={rating?.rate}
        title={t('Оцените пользователя')}
        feedbackTitle={t('Оставьте отзыв о пользователе')}
        className={className}
        hasFeedback
      />
    );
  },
);

ProfileRating.displayName = 'ProfileRating';
export default ProfileRating;
