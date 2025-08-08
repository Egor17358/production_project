import { setFeatureFlags } from '@/shared/lib/features';
import { getAllFeatureFlags } from '@/shared/lib/features/lib/setGetFeatures';
import { Decorator } from '@storybook/react';

export const NewDesignDecorator: Decorator = (Story) => {
  setFeatureFlags({ ...getAllFeatureFlags(), isAppRedesigned: true });

  return (
    <div id="rootApp" className="app_redesigned">
      <Story />
    </div>
  );
};
