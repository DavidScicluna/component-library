import { range } from 'lodash-es';

import classes from '../../../../common/classes';
import { DEFAULT_SPACING } from '../../../../common/constants';
import { useGetColor } from '../../../../common/hooks';
import type {
	AlignContentClassArr,
	AlignItemsClassArr,
	GridAutoClassArr,
	GridAutoFlowClassArr,
	GridTemplateColumnsClassArr,
	GridTemplateRowsClassArr,
	JustifyContentClassArr,
	JustifyItemsClassArr,
	PolymorphicDefaultElement
} from '../../../../common/types';
import React from 'react';
import { useStorybookContext } from '../../../Provider/components/StorybookProvider';

import { Center } from '../Center';

import {
	DEFAULT_GRID_ALIGN_CONTENT,
	DEFAULT_GRID_ALIGN_ITEMS,
	DEFAULT_GRID_JUSTIFY_CONTENT,
	DEFAULT_GRID_JUSTIFY_ITEMS,
	DEFAULT_GRID_TEMPLATE_COLUMNS,
	DEFAULT_GRID_TEMPLATE_ROWS
} from './common/constants';
import type { GridProps } from './common/types';
import type { GridStory, GridStoryMeta } from './common/types/story';
import { GridItem } from './components/GridItem';
import { Grid as GridComponent } from '.';

import classNames from 'classnames';

export default {
	title: 'Layout/Grid',
	component: GridComponent,
	argTypes: {
		alignContent: {
			name: 'Align Content',
			type: 'string',
			defaultValue: DEFAULT_GRID_ALIGN_CONTENT,
			// description: '',
			options: [
				'center',
				'end',
				'start',
				'baseline',
				'normal',
				'between',
				'around',
				'evenly',
				'stretch'
			] as AlignContentClassArr,
			control: { type: 'radio' }
		},
		alignItems: {
			name: 'Align Items',
			type: 'string',
			defaultValue: DEFAULT_GRID_ALIGN_ITEMS,
			// description: '',
			options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'] as AlignItemsClassArr,
			control: { type: 'radio' }
		},
		autoColumns: {
			name: 'Auto Columns',
			type: 'string',
			// description: '',
			options: ['auto', 'min', 'max', 'fr'] as GridAutoClassArr,
			control: { type: 'radio' }
		},
		autoFlow: {
			name: 'Auto Flow',
			type: 'string',
			// description: '',
			options: ['row', 'col', 'dense', 'row-dense', 'col-dense'] as GridAutoFlowClassArr,
			control: { type: 'radio' }
		},
		autoRows: {
			name: 'Auto Rows',
			type: 'string',
			// description: '',
			options: ['auto', 'min', 'max', 'fr'] as GridAutoClassArr,
			control: { type: 'radio' }
		},
		columnSpacing: {
			name: 'Column Spacing (0-24 , .0, .25, .5 or .75)',
			type: 'number',
			defaultValue: 0,
			// description: '',
			control: { type: 'number' }
		},
		justifyContent: {
			name: 'Justify Content',
			type: 'string',
			defaultValue: DEFAULT_GRID_JUSTIFY_CONTENT,
			// description: '',
			options: [
				'center',
				'normal',
				'stretch',
				'flex-start',
				'flex-end',
				'space-between',
				'space-around',
				'space-evenly'
			] as JustifyContentClassArr,
			control: { type: 'radio' }
		},
		justifyItems: {
			name: 'Justify Items',
			type: 'string',
			defaultValue: DEFAULT_GRID_JUSTIFY_ITEMS,
			// description: '',
			options: ['start', 'end', 'center', 'stretch'] as JustifyItemsClassArr,
			control: { type: 'radio' }
		},
		rowSpacing: {
			name: 'Row Spacing (0-24 , .0, .25, .5 or .75)',
			type: 'number',
			defaultValue: 0,
			// description: '',
			control: { type: 'number' }
		},
		templateColumns: {
			name: 'Template Columns',
			type: 'string',
			defaultValue: DEFAULT_GRID_TEMPLATE_COLUMNS,
			// description: '',
			options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'none'] as GridTemplateColumnsClassArr,
			control: { type: 'radio' }
		},
		templateRows: {
			name: 'Template Rows',
			type: 'string',
			defaultValue: DEFAULT_GRID_TEMPLATE_ROWS,
			// description: '',
			options: [1, 2, 3, 4, 5, 6, 'none'] as GridTemplateRowsClassArr,
			control: { type: 'radio' }
		},
		spacing: {
			name: 'Spacing (0-24 , .0, .25, .5 or .75)',
			type: 'number',
			defaultValue: DEFAULT_SPACING,
			// description: '',
			control: { type: 'number' }
		}
	}
} as GridStoryMeta;

export const Grid: GridStory = (props: GridProps<PolymorphicDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	const radius = classes.borders.border_radius.base;

	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ color, colorMode, colorType: 'color', hueType: 'color', classType: 'bg' });

	return (
		<GridComponent {...props}>
			{range(1, 11).map((num) => (
				<GridItem key={num}>
					<Center className={classNames(radius, text, background)} p={4}>{`Item ${num}`}</Center>
				</GridItem>
			))}
		</GridComponent>
	);
};
