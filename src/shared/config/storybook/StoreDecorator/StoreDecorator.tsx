import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator: Decorator = (Story, { parameters }) => {
  const state: Partial<StateSchema> = parameters.state;

  console.log('parameters', parameters.state);
  
  return (
    <StoreProvider initialState={state}>
      <Story />
    </StoreProvider>
  );
};
