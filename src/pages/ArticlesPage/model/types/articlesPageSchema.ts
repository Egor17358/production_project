import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entites/Article'

export interface ArticlesPageSchema extends EntityState<Article, string> {
  isLoading?: boolean;
  error?: string;

  view: ArticleView
}
