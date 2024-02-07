import type { ReactElement } from 'react';

import { __DEFAULT_BORDER_WIDTH__, __DEFAULT_SPACING__ } from '@common/constants';
import type { ThemeBorderWidthArr } from '@common/types';

import { useStorybookContext } from '@components/Provider/components/StorybookProvider';

import {
	__DEFAULT_DIVIDER_ORIENTATION__,
	__DEFAULT_DIVIDER_PLACEMENT__,
	__DEFAULT_DIVIDER_VARIANT__
} from './common/constants';
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
			defaultValue: __DEFAULT_DIVIDER_ORIENTATION__,
			// description: '',
			options: ['vertical', 'horizontal'] as DividerOrientations,
			control: { type: 'radio' }
		},
		placement: {
			name: 'Placement',
			type: 'string',
			defaultValue: __DEFAULT_DIVIDER_PLACEMENT__,
			// description: '',
			options: ['left', 'center', 'right'] as Array<DividerPlacement>,
			control: { type: 'radio' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: __DEFAULT_BORDER_WIDTH__,
			// description: '',
			options: [0, 1, 2, 4, 8] as ThemeBorderWidthArr,
			control: { type: 'radio' }
		},
		spacing: {
			name: 'Spacing (0-24 | .0, .25, .5 or .75)',
			type: 'number',
			defaultValue: __DEFAULT_SPACING__,
			// description: '',
			control: { type: 'number' }
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: __DEFAULT_DIVIDER_VARIANT__,
			// description: '',
			options: ['dotted', 'dashed', 'solid'] as Array<DividerVariant>,
			control: { type: 'radio' }
		}
	}
} as DividerStoryMeta;

export const Divider: DividerStory = (props: DividerProps<DividerDefaultElement>): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	return (
		<DividerComponent {...props} color={color} colorMode={colorMode}>
			Hello
		</DividerComponent>
	);
};
