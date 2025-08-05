import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getUserAuthData } from '@/entities/User';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';

export interface EditableProfileCardHeaderProps {
  className?: string;
}
export const EditableProfileCardHeader = memo(
  ({ className }: EditableProfileCardHeaderProps) => {
    const { t } = useTranslation('profile');

    const readonly = useSelector(getProfileReadonly);
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
      dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
      dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
      dispatch(updateProfileData());
    }, [dispatch]);

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Card padding="24" max border="partial">
            <HStack
              max
              justify="between"
              className={classNames('', {}, [className])}
            >
              <Text title={t('Профиль')} />
              {canEdit && (
                <>
                  {readonly ? (
                    <Button
                      onClick={onEdit}
                      data-testid={'EditableProfileCardHeader.EditButton'}
                    >
                      {t('Редактировать')}
                    </Button>
                  ) : (
                    <HStack gap="8">
                      <Button
                        onClick={onCancelEdit}
                        data-testid={'EditableProfileCardHeader.CancelButton'}
                        color="error"
                      >
                        {t('Отменить')}
                      </Button>
                      <Button
                        onClick={onSave}
                        color="success"
                        data-testid={'EditableProfileCardHeader.SaveButton'}
                      >
                        {t('Сохранить')}
                      </Button>
                    </HStack>
                  )}
                </>
              )}
            </HStack>
          </Card>
        }
        off={
          <HStack
            max
            justify="between"
            className={classNames('', {}, [className])}
          >
            <TextDeprecated title={t('Профиль')} />
            {canEdit && (
              <>
                {readonly ? (
                  <ButtonDeprecated
                    onClick={onEdit}
                    theme={ButtonTheme.OUTLINE}
                    data-testid={'EditableProfileCardHeader.EditButton'}
                  >
                    {t('Редактировать')}
                  </ButtonDeprecated>
                ) : (
                  <HStack gap="8">
                    <ButtonDeprecated
                      onClick={onCancelEdit}
                      theme={ButtonTheme.OUTLINE_RED}
                      data-testid={'EditableProfileCardHeader.CancelButton'}
                    >
                      {t('Отменить')}
                    </ButtonDeprecated>
                    <ButtonDeprecated
                      onClick={onSave}
                      theme={ButtonTheme.OUTLINE}
                      data-testid={'EditableProfileCardHeader.SaveButton'}
                    >
                      {t('Сохранить')}
                    </ButtonDeprecated>
                  </HStack>
                )}
              </>
            )}
          </HStack>
        }
      />
    );
  },
);

EditableProfileCardHeader.displayName = 'EditableProfileCardHeader';
