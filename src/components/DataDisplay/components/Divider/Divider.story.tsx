import { DEFAULT_BORDER_WIDTH, DEFAULT_SPACING } from '../../../../common/constants';
import type { ThemeBorderWidthArr } from '../../../../common/types';

import { useStorybookContext } from '../../../Provider/components/StorybookProvider';
import React from 'react';
import { DEFAULT_DIVIDER_ORIENTATION, DEFAULT_DIVIDER_PLACEMENT, DEFAULT_DIVIDER_VARIANT } from './common/constants';
import type {
	DividerDefaultElement,
	DividerOrientations,
	DividerPlacement,
	DividerProps,
	DividerVariant
} from './common/types';
import type { DividerStory, DividerStoryMeta } from './common/types/story';
import { Divider as DividerComponent } from '.';

export default {
	title: 'Data Display/Divider',
	component: DividerComponent,
	argTypes: {
		orientation: {
			name: 'Orientation',
			type: 'string',
			defaultValue: DEFAULT_DIVIDER_ORIENTATION,
			// description: '',
			options: ['vertical', 'horizontal'] as DividerOrientations,
			control: { type: 'radio' }
		},
		placement: {
			name: 'Placement',
			type: 'string',
			defaultValue: DEFAULT_DIVIDER_PLACEMENT,
			// description: '',
			options: ['left', 'center', 'right'] as Array<DividerPlacement>,
			control: { type: 'radio' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: DEFAULT_BORDER_WIDTH,
			// description: '',
			options: [0, 1, 2, 4, 8] as ThemeBorderWidthArr,
			control: { type: 'radio' }
		},
		spacing: {
			name: 'Spacing (0-24 | .0, .25, .5 or .75)',
			type: 'number',
			defaultValue: DEFAULT_SPACING,
			// description: '',
			control: { type: 'number' }
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: DEFAULT_DIVIDER_VARIANT,
			// description: '',
			options: ['dotted', 'dashed', 'solid'] as Array<DividerVariant>,
			control: { type: 'radio' }
		}
	}
} as DividerStoryMeta;

export const Divider: DividerStory = (props: DividerProps<DividerDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	return (
		<DividerComponent {...props} color={color} colorMode={colorMode}>
			Hello
		</DividerComponent>
	);
};
