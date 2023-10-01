import { type ReactElement, useState } from 'react';

import { range, sample } from 'lodash-es';

import { __DEFAULT_SPACING__ } from '@common/constants';
import { colors } from '@common/data';
import { useGetColor } from '@common/hooks';
import type { PolymorphicDefaultElement, ThemeAppColor } from '@common/types';

import { Center } from '@components/Layout';
import { Text } from '@components/Typography';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../../.storybook/preview';

import { __DEFAULT_TABS_IS_DISABLED__, __DEFAULT_TABS_IS_FITTED__, __DEFAULT_TABS_SIZE__ } from './common/constants';
import type { TabsAlign, TabsProps, TabsSize } from './common/types';
import type { TabsStory, TabsStoryMeta } from './common/types/story';
import { Tab, TabList, TabPanels, Tabs as TabsComponent } from '.';

const __DEFAULT_TABS_STORY_COLOR__: ThemeAppColor = sample(colors) || 'blue';
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
		// orientation
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

export const Tabs: TabsStory = (props: TabsProps<PolymorphicDefaultElement>): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	const text = useGetColor({ colorType: 'default', hueType: 'background', classType: 'text' });

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
					<Tab key={tab} color={!color ? __DEFAULT_TABS_STORY_COLOR__ : color} index={index}>
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