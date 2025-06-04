import { User } from '@/entites/User';

export interface CommentType {
  id: string;
  user: User;
  text: string;
}
