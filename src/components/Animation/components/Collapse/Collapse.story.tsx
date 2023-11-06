import type { ReactElement } from 'react';

import classes from '@common/classes';
import { useGetColor } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types';

import { Center } from '@components/Layout';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../../.storybook/preview';
import { __DEFAULT_ANIMATION_IN__ } from '../../common/constants';

import { __DEFAULT_COLLAPSE_IS_OPACITY_ANIMATED__ } from './common/constants';
import type { CollapseProps } from './common/types';
import type { CollapseStory, CollapseStoryMeta } from './common/types/story';
import { Collapse as CollapseComponent } from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

export default {
	title: 'Animation/Collapse',
	component: CollapseComponent,
	argTypes: {
		in: {
			name: 'Animate',
			type: 'boolean',
			defaultValue: __DEFAULT_ANIMATION_IN__,
			// description: '',
			control: { type: 'boolean' }
		},
		isOpacityAnimated: {
			name: 'Opacity Animated',
			type: 'boolean',
			defaultValue: __DEFAULT_COLLAPSE_IS_OPACITY_ANIMATED__,
			// description: '',
			control: { type: 'boolean' }
		}
		// transition,
		// transitionEnd,
	}
} as CollapseStoryMeta;

export const Collapse: CollapseStory = (props: CollapseProps<PolymorphicDefaultElement>): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	const radius = classes.borders.border_radius.base;

	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ color, colorMode, colorType: 'color', hueType: 'color', classType: 'bg' });

	const padding = classes.spacing.p[4];

	return (
		<Center w='auto'>
			<CollapseComponent {...props}>
				<Center className={classNames(radius, text, background, padding)} w='100px' h='100px' />
			</CollapseComponent>
		</Center>
	);
};
