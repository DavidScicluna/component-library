import type { ReactElement } from 'react';

import classNames from 'classnames';
import { range } from 'lodash-es';

import classes from '@common/classes';
import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetColor } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types/polymorphic';

import { Center } from '../Center';

import type { SimpleGridProps } from './common/types';
import type { SimpleGridStory, SimpleGridStoryMeta } from './common/types/story';
import { SimpleGrid as SimpleGridComponent } from '.';

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

export const SimpleGrid: SimpleGridStory = (props: SimpleGridProps<PolymorphicDefaultElement>): ReactElement => {
	const radius = classes.borders.border_radius.base;

	const text = useGetColor({ colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ colorType: 'color', hueType: 'color', classType: 'bg' });

	return (
		<SimpleGridComponent {...props}>
			{range(1, 13).map((num) => (
				<Center key={num} className={classNames(radius, text, background)} p={4}>
					{`Column ${num}`}
				</Center>
			))}
		</SimpleGridComponent>
	);
};
