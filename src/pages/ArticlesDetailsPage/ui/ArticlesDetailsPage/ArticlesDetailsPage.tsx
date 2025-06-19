import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesDetailsPage.module.scss';
// import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import {
  DynamicModuleLoader,
  ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailPageHeader } from '../ArticleDetailPageHeader/ArticleDetailPageHeader';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleRating } from '@/features/articleRating';

export interface ArticlesDetailsPageProps {
  className?: string;
}

const reducers: ReducerList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticlesDetailsPage = ({ className }: ArticlesDetailsPageProps) => {
  // const { t } = useTranslation('article-details');

  const { id } = useParams<{ id: string }>();

  // if (!id || (!id && __PROJECT__ !== 'storybook')) {
  //   return (
  //     <Page className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
  //       {t('Статья не найдена')}
  //     </Page>
  //   );
  // }

  if (!id) {
    return null;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
        <VStack gap='16' max>
          <ArticleDetailPageHeader />
          {__PROJECT__ === 'storybook' ? null : (
            <>
              <ArticleDetails id={id} />
              <ArticleRating articleId={id} />
              <ArticleRecommendationsList />
            </>
          )}
          <ArticleDetailsComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesDetailsPage);
