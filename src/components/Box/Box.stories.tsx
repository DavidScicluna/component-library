/* eslint-disable @typescript-eslint/no-explicit-any */
import { ElementType, ReactElement } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { __DEFAULT_POLYMORPHIC_ELEMENT__, __DEFAULT_POLYMORPHIC_SX__ } from '@common/constants';
import { useGetColor } from '@common/hooks';

import type { BoxProps } from './common/types';
import type { BoxStory, BoxStoryMeta } from './common/types/story';
import BoxComponent from '.';

export default {
	title: 'Box',
	component: BoxComponent,
	argTypes: {
		as: {
			name: 'As',
			type: 'string',
			defaultValue: __DEFAULT_POLYMORPHIC_ELEMENT__,
			description: 'The component used for the root node. Either a string to use an HTML element or a component.',
			options: ['div', 'span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as ElementType[],
			control: { type: 'select' }
		},
		sx: {
			name: 'Sx',
			type: 'string',
			defaultValue: __DEFAULT_POLYMORPHIC_SX__,
			description:
				'The system prop that allows [emotion css](https://emotion.sh/docs/introduction) objects to be passed down to as styles',
			control: { type: 'object' }
		}
	}
} as BoxStoryMeta;

export const Box: BoxStory = (props: BoxProps<any>): ReactElement => {
	const radius = classes.borders.radius.base;

	const text = useGetColor({ colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ colorType: 'appColor', hueType: 'color', classType: 'bg' });

	const padding = classes.spacing.p[4];

	return (
		<BoxComponent {...props} className={classNames('w-full', radius, text, background, padding)}>
			<h6>Hello</h6>
		</BoxComponent>
	);
};
