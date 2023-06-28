import { ReactElement, useState } from 'react';

import { range } from 'lodash-es';

import { AppColors, Icon, TabList, TabPanels, Tabs as TabsComponent, TabsProps, TabsSize } from '../../../..';
import { color as defaultColor } from '../../../../common/default/props';
import {
	isDisabled as defaultIsDisabled,
	isFitted as defaultIsFitted,
	size as defaultSize
} from '../../../../components/Navigation/Tabs/common/default/props';
import controls from '../../../common/controls';
import parameters from '../../../common/parameters';

import { Meta, Story } from './types';

const tabs = range(5);

const colorOptions: AppColors = [
	'gray',
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

const sizeOptions: TabsSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

export default {
	title: 'Navigation/Tabs',
	component: TabsComponent,
	argTypes: {
		color: {
			name: 'Color',
			type: 'string',
			defaultValue: defaultColor,
			// description: '',
			options: [...colorOptions],
			control: 'select'
		},
		colorMode: { ...controls.theme.colorMode },
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: defaultIsDisabled,
			// description: '',
			control: 'boolean'
		},
		isFitted: {
			name: 'Fitted',
			type: 'boolean',
			defaultValue: defaultIsFitted,
			// description: '',
			control: 'boolean'
		},
		size: {
			name: 'Size',
			type: 'boolean',
			defaultValue: defaultSize,
			// description: '',
			options: [...sizeOptions],
			control: 'select'
		}
	},
	parameters: { backgrounds: { ...parameters.backgrounds } }
} as Meta;

export const Tabs: Story = (props: TabsProps): ReactElement => {
	const [activeTab, setActiveTab] = useState<number>(props.activeTab || 0);

	return (
		<TabsComponent {...props} activeTab={activeTab} onChange={({ index }) => setActiveTab(index)}>
			<TabList
				tabs={tabs.map((tab) => ({
					renderLeft: ({ color, colorMode, height }) => (
						<Icon
							color={color}
							colorMode={colorMode}
							width={`${height}px`}
							height={`${height}px`}
							fontSize={`${height}px`}
							icon='crop_square'
						/>
					),
					label: `Tab ${tab}`
				}))}
			/>
			<TabPanels>
				{tabs.map((tab) => (
					<div key={tab}>
						<h1>
							Tab
							{tab}
						</h1>
					</div>
				))}
			</TabPanels>
		</TabsComponent>
	);
};
