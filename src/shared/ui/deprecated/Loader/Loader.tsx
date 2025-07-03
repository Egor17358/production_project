import { classNames } from '@/shared/lib/classNames/classNames';
import './Loader.scss';

export interface LoaderProps {
  classes?: string;
}
/**
 * Устарел, используем компоненты из папки redesigned
 * @deprecated
 */
export const Loader = ({ classes }: LoaderProps) => {
  return (
    <div className={classNames('lds-ellipsis', {}, [classes])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
