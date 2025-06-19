import { EntityState } from '@reduxjs/toolkit';
import { CommentType } from '@/entities/Comment';

export interface ArticlesDetailsCommentsSchema extends EntityState<CommentType, string> {
  isLoading?: boolean;
  error?: string;
  // ids: string[];
  // entities: Record<any, any>
}
