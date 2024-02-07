import type { ReactElement } from 'react';

import { range } from 'lodash-es';

import classes from '@common/classes';
import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetColor } from '@common/hooks';
import type { AlignItemsClassArr, FlexWrapClassArr, JustifyContentClassArr } from '@common/types';

import { Center } from '@components/Layout';

import { useStorybookContext } from '@components/Provider/components/StorybookProvider';

import {
	__DEFAULT_STACK_ALIGN_ITEMS__,
	__DEFAULT_STACK_JUSTIFY_CONTENT__,
	__DEFAULT_STACK_WRAP__
} from '../Stack/common/constants';

import type { VStackProps } from './common/types';
import type { VStackStory, VStackStoryMeta } from './common/types/story';
import { VStack as VStackComponent } from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

export default {
	title: 'Layout/Stacks/VStack',
	component: VStackComponent,
	argTypes: {
		alignItems: {
			name: 'Align Items',
			type: 'string',
			defaultValue: __DEFAULT_STACK_ALIGN_ITEMS__,
			// description: '',
			options: ['center', 'baseline', 'flex-start', 'flex-end', 'stretch'] as AlignItemsClassArr,
			control: { type: 'radio' }
		},
		wrap: {
			name: 'Wrap',
			type: 'string',
			defaultValue: __DEFAULT_STACK_WRAP__,
			// description: '',
			options: ['wrap', 'wrap-reverse', 'nowrap'] as FlexWrapClassArr,
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
			] as JustifyContentClassArr,
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
	const { color, colorMode } = useStorybookContext();

	const radius = classes.borders.border_radius.base;

	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ color, colorMode, colorType: 'color', hueType: 'color', classType: 'bg' });

	return (
		<VStackComponent {...props}>
			{range(1, 11).map((num) => (
				<Center key={num} className={classNames(radius, text, background)} p={4}>
					{`Item ${num}`}
				</Center>
			))}
		</VStackComponent>
	);
};
