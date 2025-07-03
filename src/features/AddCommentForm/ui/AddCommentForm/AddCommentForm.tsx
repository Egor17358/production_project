import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '@/shared/ui/deprecated/Input';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
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
import { HStack } from '@/shared/ui/deprecated/Stack';

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
        <HStack
          data-testid={'AddCommentForm'}
          justify="between"
          max
          className={classNames(cls.AddCommentForm, {}, [className])}
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
            theme={ButtonTheme.OUTLINE}
          >
            {t('Отправить')}
          </Button>
        </HStack>
      </DynamicModuleLoader>
    );
  },
);

AddCommentForm.displayName = 'AddCommentForm';

export default AddCommentForm;
