/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactElement } from 'react';

import classNames from 'classnames';
import { range } from 'lodash-es';

import classes from '@common/classes';
import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetColor } from '@common/hooks';
import type { AlignItemsArr, FlexWrapArr, JustifyContentArr } from '@common/types/classes';

import { Center } from '@components/Layout';

import {
	__DEFAULT_STACK_ALIGN_ITEMS__,
	__DEFAULT_STACK_JUSTIFY_CONTENT__,
	__DEFAULT_STACK_WRAP__
} from '../Stack/common/constants';

import type { VStackProps } from './common/types';
import type { VStackStory, VStackStoryMeta } from './common/types/story';
import VStackComponent from '.';

export default {
	title: 'Layout/Stacks/VStack',
	component: VStackComponent,
	argTypes: {
		alignItems: {
			name: 'Align Items',
			type: 'string',
			defaultValue: __DEFAULT_STACK_ALIGN_ITEMS__,
			// description: '',
			options: ['center', 'baseline', 'flex-start', 'flex-end', 'stretch'] as AlignItemsArr,
			control: { type: 'radio' }
		},
		wrap: {
			name: 'Wrap',
			type: 'string',
			defaultValue: __DEFAULT_STACK_WRAP__,
			// description: '',
			options: ['wrap', 'wrap-reverse', 'nowrap'] as FlexWrapArr,
			control: { type: 'radio' }
		},
		justifyContent: {
			name: 'Justify Content',
			type: 'string',
			defaultValue: __DEFAULT_STACK_JUSTIFY_CONTENT__,
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
			] as JustifyContentArr,
			control: { type: 'radio' }
		},
		spacing: {
			name: 'Spacing (0-24 | .0, .25, .5 or .75)',
			type: 'number',
			defaultValue: __DEFAULT_SPACING__,
			// description: '',
			control: { type: 'number' }
		}
	}
} as VStackStoryMeta;

export const VStack: VStackStory = (props: VStackProps<any>): ReactElement => {
	const radius = classes.borders.radius.base;

	const text = useGetColor({ colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ colorType: 'color', hueType: 'color', classType: 'bg' });

	const padding = classes.spacing.p[4];

	return (
		<VStackComponent {...props}>
			{range(1, 11).map((num) => (
				<Center key={num} className={classNames(radius, text, background, padding)}>
					{`Item ${num}`}
				</Center>
			))}
		</VStackComponent>
	);
};
