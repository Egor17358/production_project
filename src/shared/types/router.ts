// eslint-disable-next-line my-plugin-test-for-me/layer-imports
import { UserRole } from '@/entites/User';
import { RouteProps } from 'react-router-dom';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};
