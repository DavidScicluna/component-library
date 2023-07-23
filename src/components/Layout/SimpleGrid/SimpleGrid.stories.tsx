/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement } from 'react';

import classNames from 'classnames';
import { range } from 'lodash-es';

import classes from '@common/classes';
import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetColor } from '@common/hooks';

import Center from '../Center';

import type { SimpleGridProps } from './common/types';
import type { SimpleGridStory, SimpleGridStoryMeta } from './common/types/story';
import SimpleGridComponent from '.';

export default {
	title: 'Layout/SimpleGrid',
	component: SimpleGridComponent,
	argTypes: {
		columns: {
			name: 'Columns',
			type: 'number',
			defaultValue: false,
			// description: '',
			options: range(1, 13),
			control: { type: 'select' }
		},
		spacing: {
			name: 'Spacing (0-24 | .0, .25, .5 or .75)',
			type: 'number',
			defaultValue: __DEFAULT_SPACING__,
			// description: '',
			control: { type: 'number' }
		}
	}
} as SimpleGridStoryMeta;

export const SimpleGrid: SimpleGridStory = (props: SimpleGridProps<any>): ReactElement => {
	const radius = classes.borders.radius.base;

	const text = useGetColor({ colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ colorType: 'appColor', hueType: 'color', classType: 'bg' });

	const padding = classes.spacing.p[4];

	return (
		<SimpleGridComponent {...props}>
			{range(1, 13).map((num) => (
				<Center key={num} className={classNames(radius, text, background, padding)}>
					{`Column ${num}`}
				</Center>
			))}
		</SimpleGridComponent>
	);
};
