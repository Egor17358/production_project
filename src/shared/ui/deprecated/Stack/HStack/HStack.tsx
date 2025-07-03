import { Flex, FlexProps } from '../Flex/Flex';

export type HStackProps = Omit<FlexProps, 'direction'>;
/**
 * Устарел, используем компоненты из папки redesigned
 * @deprecated
 */
export const HStack = (props: HStackProps) => {
  return <Flex direction={'row'} {...props} />;
};
