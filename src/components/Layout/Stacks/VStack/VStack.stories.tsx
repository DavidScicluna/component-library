/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement } from 'react';

import classNames from 'classnames';
import { range } from 'lodash-es';

import classes from '../../../../common/classes';
import { useGetColor } from '../../../../common/hooks';
import { AlignItemsArr, FlexWrapArr, JustifyContentArr } from '../../../../common/types/classes';
import Center from '../../Center';
import {
	__DEFAULT_STACK_ALIGNITEMS__,
	__DEFAULT_STACK_JUSTIFYCONTENT__,
	__DEFAULT_STACK_SPACING__,
	__DEFAULT_STACK_WRAP__
} from '../Stack/common/constants';

import { VStackProps } from './common/types';
import { VStackStory, VStackStoryMeta } from './common/types/story';
import VStackComponent from '.';

export default {
	title: 'Layout/Stacks/VStack',
	component: VStackComponent,
	argTypes: {
		alignItems: {
			name: 'Align Items',
			type: 'string',
			defaultValue: __DEFAULT_STACK_ALIGNITEMS__,
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
			defaultValue: __DEFAULT_STACK_JUSTIFYCONTENT__,
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
			defaultValue: __DEFAULT_STACK_SPACING__,
			// description: '',
			control: { type: 'number' }
		}
	}
} as VStackStoryMeta;

export const VStack: VStackStory = (props: VStackProps<any>): ReactElement => {
	const radius = classes.borders.radius.base;

	const text = useGetColor({ colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ colorType: 'appColor', hueType: 'color', classType: 'bg' });

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
