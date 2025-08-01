import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';
import { memo } from 'react';
import { ArticleImageBlock } from '../../model/types/article';
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

export interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}
export const ArticleImageBlockComponent = memo(
  ({ className, block }: ArticleImageBlockComponentProps) => {
    return (
      <div
        className={classNames(cls.ArticleImageBlockComponent, {}, [className])}
      >
        <img src={block.src} alt={block.title} className={cls.img} />
        {block.title && (
          <ToggleFeatures
            feature="isAppRedesigned"
            on={<Text align="center" text={block.title} />}
            off={<TextDeprecated align={TextAlign.CENTER} text={block.title} />}
          />
        )}
      </div>
    );
  },
);

ArticleImageBlockComponent.displayName = 'ArticleImageBlockComponent';
