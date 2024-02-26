import { range } from 'lodash-es';

import classes from '../../../../../common/classes';
import { DEFAULT_SPACING } from '../../../../../common/constants';
import { useGetColor } from '../../../../../common/hooks';
import type {
	AlignItemsClassArr,
	FlexWrapClassArr,
	JustifyContentClassArr,
	PolymorphicDefaultElement
} from '../../../../../common/types';

import { Center } from '../../Center';

import { useStorybookContext } from '../../../../Provider/components/StorybookProvider';
import React from 'react';
import {
	DEFAULT_STACK_ALIGN_ITEMS,
	DEFAULT_STACK_JUSTIFY_CONTENT,
	DEFAULT_STACK_WRAP
} from '../Stack/common/constants';

import type { HStackProps } from './common/types';
import type { HStackStory, HStackStoryMeta } from './common/types/story';
import { HStack as HStackComponent } from '.';

import classNames from 'classnames';

export default {
	title: 'Layout/Stacks/HStack',
	component: HStackComponent,
	argTypes: {
		alignItems: {
			name: 'Align Items',
			type: 'string',
			defaultValue: DEFAULT_STACK_ALIGN_ITEMS,
			// description: '',
			options: ['center', 'baseline', 'flex-start', 'flex-end', 'stretch'] as AlignItemsClassArr,
			control: { type: 'radio' }
		},
		wrap: {
			name: 'Wrap',
			type: 'string',
			defaultValue: DEFAULT_STACK_WRAP,
			// description: '',
			options: ['wrap', 'wrap-reverse', 'nowrap'] as FlexWrapClassArr,
			control: { type: 'radio' }
		},
		justifyContent: {
			name: 'Justify Content',
			type: 'string',
			defaultValue: DEFAULT_STACK_JUSTIFY_CONTENT,
			// description: '',
			options: [
				'center',
				'flex-start',
				'flex-end',
				'stretch',
				'normal',
				'space-between',
				'space-around',
				'space-evenly'
			] as JustifyContentClassArr,
			control: { type: 'radio' }
		},
		spacing: {
			name: 'Spacing (0-24 | .0, .25, .5 or .75)',
			type: 'number',
			defaultValue: DEFAULT_SPACING,
			// description: '',
			control: { type: 'number' }
		}
	}
} as HStackStoryMeta;

export const HStack: HStackStory = (props: HStackProps<PolymorphicDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	const radius = classes.borders.border_radius.base;

	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ color, colorMode, colorType: 'color', hueType: 'color', classType: 'bg' });

	return (
		<HStackComponent {...props}>
			{range(1, 11).map((num) => (
				<Center key={num} className={classNames(radius, text, background)} p={4}>
					{`Item ${num}`}
				</Center>
			))}
		</HStackComponent>
	);
};
