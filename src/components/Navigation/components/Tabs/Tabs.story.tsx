import { useState } from 'react';

import { range, sample } from 'lodash-es';

import { __DEFAULT_SPACING__ } from '../../../../common/constants';
import { appColors } from '../../../../common/data';
import { useGetColor } from '../../../../common/hooks';
import type { ThemeAppColor } from '../../../../common/types';
import React from 'react';
import { Center } from '../../../Layout';
import { Text } from '../../../Typography';
import { useStorybookContext } from '../../../Provider/components/StorybookProvider';

import {
	__DEFAULT_TABS_IS_DISABLED__,
	__DEFAULT_TABS_IS_FITTED__,
	__DEFAULT_TABS_ORIENTATION__,
	__DEFAULT_TABS_SIZE__
} from './common/constants';
import type { TabsAlign, TabsDefaultElement, TabsOrientation, TabsProps, TabsSize } from './common/types';
import type { TabsStory, TabsStoryMeta } from './common/types/story';
import { Tab, TabIcon, TabList, TabPanels, Tabs as TabsComponent } from '.';

const __DEFAULT_TABS_STORY_COLOR__: ThemeAppColor = sample(appColors) || 'blue';
const __DEFAULT_TABS_STORY_TABS__ = range(10);

export default {
	title: 'Navigation/Tabs',
	component: TabsComponent,
	argTypes: {
		align: {
			name: 'Align',
			type: 'string',
			defaultValue: __DEFAULT_TABS_SIZE__,
			// description: '',
			options: ['center', 'end', 'start'] as Array<TabsAlign>,
			control: { type: 'radio' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: __DEFAULT_TABS_IS_DISABLED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isFitted: {
			name: 'Fitted',
			type: 'boolean',
			defaultValue: __DEFAULT_TABS_IS_FITTED__,
			// description: '',
			control: { type: 'boolean' }
		},
		orientation: {
			name: 'Size',
			type: 'string',
			defaultValue: __DEFAULT_TABS_ORIENTATION__,
			// description: '',
			options: ['top', 'bottom', 'left', 'right'] as Array<TabsOrientation>,
			control: { type: 'radio' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: __DEFAULT_TABS_SIZE__,
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl'] as Array<TabsSize>,
			control: { type: 'radio' }
		},
		spacing: {
			name: 'Spacing (0-24 , .0, .25, .5 or .75)',
			type: 'number',
			defaultValue: __DEFAULT_SPACING__,
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
				{__DEFAULT_TABS_STORY_TABS__.map((tab, index) => (
					<Tab
						key={tab}
						color={!color ? __DEFAULT_TABS_STORY_COLOR__ : color}
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
				{__DEFAULT_TABS_STORY_TABS__.map((tab, index) => (
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
