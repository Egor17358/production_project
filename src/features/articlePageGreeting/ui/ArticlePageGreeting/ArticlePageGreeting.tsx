import { useTranslation } from 'react-i18next';
import { memo, useEffect, useState } from 'react';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Text } from '@/shared/ui/deprecated/Text';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { isMobile } from 'react-device-detect';

export const ArticlePageGreeting = memo(() => {
  const { t } = useTranslation('translation');

  const [isOpen, setIsOpen] = useState(false);

  const { isArticlesPageWasOpened } = useJsonSettings();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isArticlesPageWasOpened) {
      setIsOpen(true);
      dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }));
    }
  }, [dispatch, isArticlesPageWasOpened]);

  const onClose = () => {
    setIsOpen(false);
  };

  const text = (
    <Text
      title={t('Добро пожаловать')}
      text={t('Здесь вы можете просматривать статьи на различные темы')}
    />
  );

  if (isMobile) {
    return (
      <Drawer lazy isOpen={isOpen} onClose={onClose}>
        {text}
      </Drawer>
    );
  }

  return (
    <Modal lazy isOpen={isOpen} onClose={onClose}>
      <Text
        title={t('Добро пожаловать')}
        text={t('Здесь вы можете просматривать статьи на различные темы')}
      />
    </Modal>
  );
});

ArticlePageGreeting.displayName = 'ArticlePageGreeting';
