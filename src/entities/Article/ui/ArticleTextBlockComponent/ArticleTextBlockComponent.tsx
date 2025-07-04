import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';
// import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from '@/shared/ui/Text';
import { ArticleTextBlock } from '../../model/types/article';

export interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}
export const ArticleTextBlockComponent = memo(
  ({ className, block }: ArticleTextBlockComponentProps) => {
    // const { t } = useTranslation('translation');

    return (
      <div
        className={classNames(cls.ArticleTextBlockComponent, {}, [className])}
      >
        {block.title && <Text title={block.title} className={cls.title} />}
        {block.paragraphs.map((paragraph) => (
          <Text key={paragraph} text={paragraph} className={cls.paragraph} />
        ))}
      </div>
    );
  },
);

ArticleTextBlockComponent.displayName = 'ArticleTextBlockComponent';
