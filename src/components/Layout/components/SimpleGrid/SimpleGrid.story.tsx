import { range } from 'lodash-es';

import classes from '../../../../common/classes';
import { DEFAULT_SPACING } from '../../../../common/constants';
import { useGetColor } from '../../../../common/hooks';
import React from 'react';
import { useStorybookContext } from '../../../Provider/components/StorybookProvider';

import { Center } from '../Center';

import type { SimpleGridProps } from './common/types';
import type { SimpleGridStory, SimpleGridStoryMeta } from './common/types/story';
import { SimpleGrid as SimpleGridComponent } from '.';

import classNames from 'classnames';
import { PolymorphicDefaultElement } from '../../../../common/types';

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
			defaultValue: DEFAULT_SPACING,
			// description: '',
			control: { type: 'number' }
		}
	}
} as SimpleGridStoryMeta;

export const SimpleGrid: SimpleGridStory = (props: SimpleGridProps<PolymorphicDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	const radius = classes.borders.border_radius.base;

	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ color, colorMode, colorType: 'color', hueType: 'color', classType: 'bg' });

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
