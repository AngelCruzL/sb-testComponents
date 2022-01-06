import { MyLabel } from '../../components/MyLabel';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'UI/MyLabel',
  component: MyLabel,
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = args => <MyLabel {...args} />;

export const Basic = Template.bind({});
Basic.args = { size: 'normal' };

export const AllCaps = Template.bind({});

export const Secondary = Template.bind({});
