import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Input } from '@/shared/ui/redesigned/Input';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';
import {
  DynamicModuleLoader,
  ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slices/addCommentForm';
import {
  getAddCommentFormText,
  // getAddCommentFormError,
} from '../../model/selectors/addCommentFormSelectors';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (v: string) => void;
}

const reducers: ReducerList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(
  ({ className, onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation('translation');
    const text = useSelector(getAddCommentFormText);
    // const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentChangeText = useCallback(
      (value: string) => {
        dispatch(addCommentFormActions.setText(value));
      },
      [dispatch],
    );

    const onSendHandler = useCallback(() => {
      onSendComment(text || '');
      onCommentChangeText('');
    }, [onSendComment, onCommentChangeText, text]);

    return (
      <DynamicModuleLoader reducers={reducers}>
        <ToggleFeatures
          feature="isAppRedesigned"
          on={
            <Card padding="24" border="round" max>
              <HStack
                data-testid={'AddCommentForm'}
                justify="between"
                max
                gap="16"
                className={classNames(cls.AddCommentFormRedesigned, {}, [
                  className,
                ])}
              >
                <Input
                  data-testid={'AddCommentForm.Input'}
                  className={cls.input}
                  value={text}
                  onChange={onCommentChangeText}
                  placeholder={t('Введите текст комментария')}
                />
                <Button
                  data-testid={'AddCommentForm.Button'}
                  onClick={onSendHandler}
                >
                  {t('Отправить')}
                </Button>
              </HStack>
            </Card>
          }
          off={
            <HStack
              data-testid={'AddCommentForm'}
              justify="between"
              max
              className={classNames(cls.AddCommentForm, {}, [className])}
            >
              <InputDeprecated
                data-testid={'AddCommentForm.Input'}
                className={cls.input}
                value={text}
                onChange={onCommentChangeText}
                placeholder={t('Введите текст комментария')}
              />
              <ButtonDeprecated
                data-testid={'AddCommentForm.Button'}
                onClick={onSendHandler}
                theme={ButtonTheme.OUTLINE}
              >
                {t('Отправить')}
              </ButtonDeprecated>
            </HStack>
          }
        />
      </DynamicModuleLoader>
    );
  },
);

AddCommentForm.displayName = 'AddCommentForm';

export default AddCommentForm;
