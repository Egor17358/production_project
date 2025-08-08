import { setFeatureFlags } from '@/shared/lib/features';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { Decorator } from '@storybook/react';

export const FeatureFlagsDecorator =
  (features: FeatureFlags): Decorator =>
  // eslint-disable-next-line react/display-name
  (Story) => {
    setFeatureFlags(features);
    return <Story />;
  };
