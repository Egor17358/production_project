import { ArticleDetails } from '@/entities/Article';
import { Card } from '@/shared/ui/redesigned/Card';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

export interface DetailsContainerProps {
  className?: string;
}
export const DetailsContainer = memo((props: DetailsContainerProps) => {
  const { className } = props;
  const { t } = useTranslation('translation');
  const { id } = useParams<{ id: string }>();

  return (
    <Card fullHeight max className={className} padding="24" border="round">
      <ArticleDetails id={id} />
    </Card>
  );
});

DetailsContainer.displayName = 'DetailsContainer';
