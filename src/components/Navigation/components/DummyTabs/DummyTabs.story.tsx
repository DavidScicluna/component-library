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
	DEFAULT_DUMMY_TABS_IS_ANIMATED,
	DEFAULT_DUMMY_TABS_IS_FITTED,
	DEFAULT_DUMMY_TABS_SIZE
} from './common/constants';
import type { DummyTabsAlign, DummyTabsDefaultElement, DummyTabsProps, DummyTabsSize } from './common/types';
import type { DummyTabsStory, DummyTabsStoryMeta } from './common/types/story';
import { DummyTab, DummyTabList, DummyTabPanels, DummyTabs as DummyTabsComponent } from '.';

const DEFAULT_DUMMY_TABS_STORY_COLOR: ThemeAppColor = sample(appColors) || 'blue';
const DEFAULT_DUMMY_TABS_STORY_DUMMY_TABS = range(10);

export default {
	title: 'Navigation/DummyTabs',
	component: DummyTabsComponent,
	argTypes: {
		align: {
			name: 'Align',
			type: 'string',
			defaultValue: DEFAULT_DUMMY_TABS_SIZE,
			// description: '',
			options: ['center', 'end', 'start'] as Array<DummyTabsAlign>,
			control: { type: 'radio' }
		},
		isAnimated: {
			name: 'Animated',
			type: 'boolean',
			defaultValue: DEFAULT_DUMMY_TABS_IS_ANIMATED,
			// description: '',
			control: { type: 'boolean' }
		},
		isFitted: {
			name: 'Fitted',
			type: 'boolean',
			defaultValue: DEFAULT_DUMMY_TABS_IS_FITTED,
			// description: '',
			control: { type: 'boolean' }
		},
		// orientation
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: DEFAULT_DUMMY_TABS_SIZE,
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl'] as Array<DummyTabsSize>,
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
} as DummyTabsStoryMeta;

export const DummyTabs: DummyTabsStory = (props: DummyTabsProps<DummyTabsDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'background', classType: 'text' });

	return (
		<DummyTabsComponent {...props} color={color} colorMode={colorMode} w='100%'>
			<DummyTabList>
				{DEFAULT_DUMMY_TABS_STORY_DUMMY_TABS.map((dummytab, index) => (
					<DummyTab key={dummytab} color={!color ? DEFAULT_DUMMY_TABS_STORY_COLOR : color} index={index}>
						{`Dummy Tab ${index + 1}`}
					</DummyTab>
				))}
			</DummyTabList>
			<DummyTabPanels>
				{DEFAULT_DUMMY_TABS_STORY_DUMMY_TABS.map((dummytab, index) => (
					<Center key={dummytab} p={4}>
						<Text align='center' color={text}>
							{`Dummy Tab ${index + 1} Panel`}
						</Text>
					</Center>
				))}
			</DummyTabPanels>
		</DummyTabsComponent>
	);
};
