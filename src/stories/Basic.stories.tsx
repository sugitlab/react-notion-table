import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReactNotionTable, { ReactNotionTableProps } from '../'


const arg: ReactNotionTableProps = {
  name: 'BasicTable',
  height: '100vh',
  width: '100vw',
}
export default {
  title: 'Basic',
  component: ReactNotionTable,
  argTypes: {
    props: arg,
  },
} as ComponentMeta<typeof ReactNotionTable>;

const Template: ComponentStory<typeof ReactNotionTable> = (args) => <ReactNotionTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'Primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  name: 'Secondary'
};

