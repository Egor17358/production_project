import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import { memo } from 'react';

export enum TextTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error',
}
export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export enum TextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
}
export interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
  'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1',
};

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
    'data-testid': dataTestId = 'Text',
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];

  const mods: Mods = {
    [cls[theme]]: true,
    [cls[align]]: true,
    [cls[size]]: true,
  };

  return (
    <div className={classNames(cls.Text, mods, [className])}>
      {title && (
        <HeaderTag data-testid={`${dataTestId}.Header`} className={cls.title}>
          {title}
        </HeaderTag>
      )}
      {text && (
        <p data-testid={`${dataTestId}.Paragraph`} className={cls.text}>
          {text}
        </p>
      )}
    </div>
  );
});

Text.displayName = 'Text';
