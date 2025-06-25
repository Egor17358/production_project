import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss';
import { Loader } from '@/shared/ui/Loader';

export interface PageLoaderProps {
  classes?: string;
}
export const PageLoader = ({ classes }: PageLoaderProps) => {
  return (
    <div className={classNames(cls.PageLoader, {}, [classes])}>
      <Loader />
    </div>
  );
};
