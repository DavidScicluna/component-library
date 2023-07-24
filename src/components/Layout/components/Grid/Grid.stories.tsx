/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement } from 'react';

import classNames from 'classnames';
import { range } from 'lodash-es';

import classes from '@common/classes';
import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetColor } from '@common/hooks';
import type {
	AlignContentArr,
	AlignItemsArr,
	GridAutoArr,
	GridAutoFlowArr,
	GridTemplateColumnsArr,
	GridTemplateRowsArr,
	JustifyContentArr,
	JustifyItemsArr
} from '@common/types/classes';

import Center from '../Center';

import {
	__DEFAULT_GRID_ALIGN_CONTENT__,
	__DEFAULT_GRID_ALIGN_ITEMS__,
	__DEFAULT_GRID_JUSTIFY_CONTENT__,
	__DEFAULT_GRID_JUSTIFY_ITEMS__,
	__DEFAULT_GRID_TEMPLATE_COLUMNS__,
	__DEFAULT_GRID_TEMPLATE_ROWS__
} from './common/constants';
import type { GridProps } from './common/types';
import type { GridStory, GridStoryMeta } from './common/types/story';
import GridItem from './components/GridItem';
import GridComponent from '.';

export default {
	title: 'Layout/Grid',
	component: GridComponent,
	argTypes: {
		alignContent: {
			name: 'Align Content',
			type: 'string',
			defaultValue: __DEFAULT_GRID_ALIGN_CONTENT__,
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
			] as AlignContentArr,
			control: { type: 'radio' }
		},
		alignItems: {
			name: 'Align Items',
			type: 'string',
			defaultValue: __DEFAULT_GRID_ALIGN_ITEMS__,
			// description: '',
			options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'] as AlignItemsArr,
			control: { type: 'radio' }
		},
		autoColumns: {
			name: 'Auto Columns',
			type: 'string',
			// description: '',
			options: ['auto', 'min', 'max', 'fr'] as GridAutoArr,
			control: { type: 'radio' }
		},
		autoFlow: {
			name: 'Auto Flow',
			type: 'string',
			// description: '',
			options: ['row', 'col', 'dense', 'row-dense', 'col-dense'] as GridAutoFlowArr,
			control: { type: 'radio' }
		},
		autoRows: {
			name: 'Auto Rows',
			type: 'string',
			// description: '',
			options: ['auto', 'min', 'max', 'fr'] as GridAutoArr,
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
			defaultValue: __DEFAULT_GRID_JUSTIFY_CONTENT__,
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
			] as JustifyContentArr,
			control: { type: 'radio' }
		},
		justifyItems: {
			name: 'Justify Items',
			type: 'string',
			defaultValue: __DEFAULT_GRID_JUSTIFY_ITEMS__,
			// description: '',
			options: ['start', 'end', 'center', 'stretch'] as JustifyItemsArr,
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
			defaultValue: __DEFAULT_GRID_TEMPLATE_COLUMNS__,
			// description: '',
			options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'none'] as GridTemplateColumnsArr,
			control: { type: 'radio' }
		},
		templateRows: {
			name: 'Template Rows',
			type: 'string',
			defaultValue: __DEFAULT_GRID_TEMPLATE_ROWS__,
			// description: '',
			options: [1, 2, 3, 4, 5, 6, 'none'] as GridTemplateRowsArr,
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
} as GridStoryMeta;

export const Grid: GridStory = (props: GridProps<any>): ReactElement => {
	const radius = classes.borders.radius.base;

	const text = useGetColor({ colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ colorType: 'appColor', hueType: 'color', classType: 'bg' });

	const padding = classes.spacing.p[4];

	return (
		<GridComponent {...props}>
			{range(1, 11).map((num) => (
				<GridItem key={num}>
					<Center className={classNames(radius, text, background, padding)}>{`Item ${num}`}</Center>
				</GridItem>
			))}
		</GridComponent>
	);
};
