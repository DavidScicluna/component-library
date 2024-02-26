import { useState } from 'react';

import { range, sample } from 'lodash-es';

import { DEFAULT_SPACING } from '../../../../common/constants';
import { appColors } from '../../../../common/data';
import { useGetColor } from '../../../../common/hooks';
import type { ThemeAppColor } from '../../../../common/types';
import React from 'react';
import { Center } from '../../../Layout';
import { Text } from '../../../Typography';
import { useStorybookContext } from '../../../Provider/components/StorybookProvider';

import {
	DEFAULT_TABS_IS_DISABLED,
	DEFAULT_TABS_IS_FITTED,
	DEFAULT_TABS_ORIENTATION,
	DEFAULT_TABS_SIZE
} from './common/constants';
import type { TabsAlign, TabsDefaultElement, TabsOrientation, TabsProps, TabsSize } from './common/types';
import type { TabsStory, TabsStoryMeta } from './common/types/story';
import { Tab, TabIcon, TabList, TabPanels, Tabs as TabsComponent } from '.';

const DEFAULT_TABS_STORY_COLOR: ThemeAppColor = sample(appColors) || 'blue';
const DEFAULT_TABS_STORY_TABS = range(10);

export default {
	title: 'Navigation/Tabs',
	component: TabsComponent,
	argTypes: {
		align: {
			name: 'Align',
			type: 'string',
			defaultValue: DEFAULT_TABS_SIZE,
			// description: '',
			options: ['center', 'end', 'start'] as Array<TabsAlign>,
			control: { type: 'radio' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: DEFAULT_TABS_IS_DISABLED,
			// description: '',
			control: { type: 'boolean' }
		},
		isFitted: {
			name: 'Fitted',
			type: 'boolean',
			defaultValue: DEFAULT_TABS_IS_FITTED,
			// description: '',
			control: { type: 'boolean' }
		},
		orientation: {
			name: 'Size',
			type: 'string',
			defaultValue: DEFAULT_TABS_ORIENTATION,
			// description: '',
			options: ['top', 'bottom', 'left', 'right'] as Array<TabsOrientation>,
			control: { type: 'radio' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: DEFAULT_TABS_SIZE,
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl'] as Array<TabsSize>,
			control: { type: 'radio' }
		},
		spacing: {
			name: 'Spacing (0-24 , .0, .25, .5 or .75)',
			type: 'number',
			defaultValue: DEFAULT_SPACING,
			// description: '',
			control: { type: 'number' }
		}
	}
} as TabsStoryMeta;

export const Tabs: TabsStory = (props: TabsProps<TabsDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'background', classType: 'text' });

	const [index, setIndex] = useState<number>(0);

	return (
		<TabsComponent
			{...props}
			color={color}
			colorMode={colorMode}
			w='100%'
			index={index}
			onChange={(index) => setIndex(index as number)}
		>
			<TabList>
				{DEFAULT_TABS_STORY_TABS.map((tab, index) => (
					<Tab
						key={tab}
						color={!color ? DEFAULT_TABS_STORY_COLOR : color}
						index={index}
						renderTop={
							props.orientation === 'top' ? () => <TabIcon icon='12mp' category='filled' /> : undefined
						}
						spacing={0}
					>
						{`Tab ${index + 1}`}
					</Tab>
				))}
			</TabList>
			<TabPanels>
				{DEFAULT_TABS_STORY_TABS.map((tab, index) => (
					<Center key={tab} p={4}>
						<Text align='center' color={text}>
							{`Tab ${index + 1} Panel`}
						</Text>
					</Center>
				))}
			</TabPanels>
		</TabsComponent>
	);
};
