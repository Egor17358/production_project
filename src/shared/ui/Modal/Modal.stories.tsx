import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';

import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundCo lor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum blanditiis, eligendi suscipit earum eos, ab nesciunt ex eius omnis iste rem sunt animi alias quia? At amet optio similique quibusdam modi eos praesentium maiores quas beatae repellat numquam, tempora officiis quod iusto nihil, atque excepturi qui esse error porro! Expedita, sit consequatur ipsam dolore pariatur aspernatur commodi sed illo corrupti iste veniam repellendus blanditiis reiciendis enim itaque! Ducimus voluptate eligendi quisquam, molestiae asperiores ab error adipisci est quis. Culpa cum quibusdam dolorem obcaecati sequi ipsa illum exercitationem minima facilis reiciendis eum odio repellat, magnam, asperiores nesciunt minus tenetur corporis saepe?',
  },
};

// export const Dark: Story = {
//   args: {
//     isOpen: true,
//     children:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum blanditiis, eligendi suscipit earum eos, ab nesciunt ex eius omnis iste rem sunt animi alias quia? At amet optio similique quibusdam modi eos praesentium maiores quas beatae repellat numquam, tempora officiis quod iusto nihil, atque excepturi qui esse error porro! Expedita, sit consequatur ipsam dolore pariatur aspernatur commodi sed illo corrupti iste veniam repellendus blanditiis reiciendis enim itaque! Ducimus voluptate eligendi quisquam, molestiae asperiores ab error adipisci est quis. Culpa cum quibusdam dolorem obcaecati sequi ipsa illum exercitationem minima facilis reiciendis eum odio repellat, magnam, asperiores nesciunt minus tenetur corporis saepe?',
//   },
// };
// Dark.decorators = [ThemeDecorator];
// Dark.parameters = {
//   theme: Theme.DARK,
// };

// export const OutlineDark: Story = {
//   args: {
//     children: 'Text',
//     theme: ButtonTheme.OUTLINE,
//   },
// };
