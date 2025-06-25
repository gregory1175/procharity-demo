import { Registration } from './registration.tsx';
import { expect, within } from '@storybook/test';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/Registration',
  component: Registration,
} satisfies Meta<typeof Registration>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CatalogStory: Story = {
  name: 'Default',
  args: {
    di: {
      ProductList: function () { return <span>mock</span> }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const element = canvas.getByTestId('Registration');
    await expect(element).toBeInTheDocument();
  },
};
