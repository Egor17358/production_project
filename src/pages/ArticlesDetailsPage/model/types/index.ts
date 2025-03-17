import { ArticleDetailsPageRecommendationsSchema } from './ArticleDetailsPageRecommendationsSchema';
import { ArticlesDetailsCommentsSchema } from './ArticlesDetailsCommentsSchema';

export interface ArticleDetailsPageSchema {
  comments: ArticlesDetailsCommentsSchema;
  recommendations: ArticleDetailsPageRecommendationsSchema;
}
