import { ReactElement } from 'react';

import { range, sample } from 'lodash-es';

import icons from '../../../common/data/icons';
import Icon from '../../../components/Icon';
import TabBarComponent from '../../../components/Navigation/TabBar';
import { RenderProps as TabRenderProps, Tab } from '../../../components/Navigation/TabBar/components/Tab/types';
import { TabBarColor, TabBarDirection, TabBarProps } from '../../../components/Navigation/TabBar/types';
import controls from '../../common/controls';
import parameters from '../../common/parameters';

import { Meta, Story } from './types';

const colorDefaultValue: TabBarColor = 'blue';
const colorOptions: TabBarColor[] = [
	'red',
	'pink',
	'purple',
	'deep_purple',
	'indigo',
	'blue',
	'light_blue',
	'cyan',
	'teal',
	'green',
	'light_green',
	'lime',
	'yellow',
	'orange',
	'deep_orange'
];

const directionDefaultValue: TabBarDirection = 'bottom';
const directionOptions: TabBarDirection[] = ['top', 'bottom'];

const tabs: Tab[] = range(0, 5).map((_dummy, index) => {
	return {
		renderIcon: (props: TabRenderProps) => <Icon {...props} icon={sample(icons) || 'crop_square'} />,
		label: `Tab ${index}`
	};
});

export default {
	title: 'Navigation/TabBar',
	component: TabBarComponent,
	argTypes: {
		activeTab: {
			name: 'Active Tab',
			defaultValue: 0,
			// description: '',
			options: [0, 1, 2, 3, 4],
			control: 'select'
		},
		color: {
			name: 'Color',
			type: 'string',
			defaultValue: colorDefaultValue,
			// description: '',
			options: [...colorOptions],
			control: 'select'
		},
		colorMode: { ...controls.theme.colorMode },
		direction: {
			name: 'Direction',
			type: 'string',
			defaultValue: directionDefaultValue,
			// description: '',
			options: [...directionOptions],
			control: 'radio'
		}
	},
	parameters: { backgrounds: { ...parameters.backgrounds } }
} as Meta;

export const TabBar: Story = (props: TabBarProps): ReactElement => <TabBarComponent {...props} tabs={tabs} />;
