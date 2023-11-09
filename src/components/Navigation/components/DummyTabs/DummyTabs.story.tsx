import { type ReactElement } from 'react';

import { range, sample } from 'lodash-es';

import { __DEFAULT_SPACING__ } from '@common/constants';
import { appColors } from '@common/data';
import { useGetColor } from '@common/hooks';
import type { PolymorphicDefaultElement, ThemeAppColor } from '@common/types';

import { Center } from '@components/Layout';
import { Text } from '@components/Typography';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../../.storybook/preview';

import {
	__DEFAULT_DUMMY_TABS_IS_ANIMATED__,
	__DEFAULT_DUMMY_TABS_IS_FITTED__,
	__DEFAULT_DUMMY_TABS_SIZE__
} from './common/constants';
import type { DummyTabsAlign, DummyTabsProps, DummyTabsSize } from './common/types';
import type { DummyTabsStory, DummyTabsStoryMeta } from './common/types/story';
import { DummyTab, DummyTabList, DummyTabPanels, DummyTabs as DummyTabsComponent } from '.';

const __DEFAULT_DUMMY_TABS_STORY_COLOR__: ThemeAppColor = sample(appColors) || 'blue';
const __DEFAULT_DUMMY_TABS_STORY_DUMMY_TABS__ = range(10);

export default {
	title: 'Navigation/DummyTabs',
	component: DummyTabsComponent,
	argTypes: {
		align: {
			name: 'Align',
			type: 'string',
			defaultValue: __DEFAULT_DUMMY_TABS_SIZE__,
			// description: '',
			options: ['center', 'end', 'start'] as Array<DummyTabsAlign>,
			control: { type: 'radio' }
		},
		isAnimated: {
			name: 'Animated',
			type: 'boolean',
			defaultValue: __DEFAULT_DUMMY_TABS_IS_ANIMATED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isFitted: {
			name: 'Fitted',
			type: 'boolean',
			defaultValue: __DEFAULT_DUMMY_TABS_IS_FITTED__,
			// description: '',
			control: { type: 'boolean' }
		},
		// orientation
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: __DEFAULT_DUMMY_TABS_SIZE__,
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl'] as Array<DummyTabsSize>,
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
} as DummyTabsStoryMeta;

export const DummyTabs: DummyTabsStory = (props: DummyTabsProps<PolymorphicDefaultElement>): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'background', classType: 'text' });

	return (
		<DummyTabsComponent {...props} color={color} colorMode={colorMode} w='100%'>
			<DummyTabList>
				{__DEFAULT_DUMMY_TABS_STORY_DUMMY_TABS__.map((dummytab, index) => (
					<DummyTab key={dummytab} color={!color ? __DEFAULT_DUMMY_TABS_STORY_COLOR__ : color} index={index}>
						{`Dummy Tab ${index + 1}`}
					</DummyTab>
				))}
			</DummyTabList>
			<DummyTabPanels>
				{__DEFAULT_DUMMY_TABS_STORY_DUMMY_TABS__.map((dummytab, index) => (
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
