import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleImageBlock } from '../../model/types/article';
import { Text, TextAlign } from '@/shared/ui/Text';

export interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}
export const ArticleImageBlockComponent = memo(({ className, block }: ArticleImageBlockComponentProps) => {
  const { t } = useTranslation('translation');

  return (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
      <img src={block.src} alt={block.title} className={cls.img} />
      {block.title && (
        <Text align={TextAlign.CENTER} text={block.title} />
      )}
    </div>
  );
});

ArticleImageBlockComponent.displayName = 'ArticleImageBlockComponent';
