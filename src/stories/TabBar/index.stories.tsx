import { ReactElement } from 'react';

import { range, sample } from 'lodash';

import { Meta, Story } from './types';

import icons from '../../common/data/icons';
import Icon from '../../components/Icon';
import TabBarComponent from '../../components/TabBar';
import { RenderProps as TabRenderProps, Tab } from '../../components/TabBar/components/Tab/types';
import { TabBarColor, TabBarDirection, TabBarProps } from '../../components/TabBar/types';
import controls from '../common/controls';

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

console.log(tabs);

export default {
	title: 'TabBar',
	component: TabBarComponent,
	argTypes: {
		activeTab: {
			name: 'Active Tab',
			defaultValue: 0,
			// description: '',
			options: [0, 1, 2, 3],
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
		padding: { ...controls.theme.padding, defaultValue: 2 },
		margin: { ...controls.theme.margin },
		direction: {
			name: 'Direction',
			type: 'string',
			defaultValue: directionDefaultValue,
			// description: '',
			options: [...directionOptions],
			control: 'radio'
		}
	}
	// parameters: {
	// 	backgrounds: {
	// 		default: 'twitter',
	// 		values: [
	// 			{ name: 'twitter', value: '#00aced' },
	// 			{ name: 'facebook', value: '#3b5998' }
	// 		]
	// 	}
	// }
} as Meta;

export const TabBar: Story = (props: TabBarProps): ReactElement => <TabBarComponent {...props} tabs={tabs} />;
