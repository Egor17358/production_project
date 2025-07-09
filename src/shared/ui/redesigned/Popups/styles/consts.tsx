import { DropdownDirection } from '@/shared/types/ui';
import cls from './popup.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': cls.optionsBottomLeft,
  'bottom right': cls.optionsBottomRight,
  'top left': cls.optionsTopRight,
  'top right': cls.optionsTopLeft,
};
