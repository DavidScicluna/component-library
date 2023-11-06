import type { ReactElement } from 'react';

import classes from '@common/classes';
import { useGetColor } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types';

import { Center } from '@components/Layout';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../../.storybook/preview';
import { __DEFAULT_ANIMATION_IN__ } from '../../common/constants';

import { __DEFAULT_POP_INITIAL_SCALE__, __DEFAULT_POP_IS_REVERSED__ } from './common/constants';
import type { PopProps } from './common/types';
import type { PopStory, PopStoryMeta } from './common/types/story';
import { Pop as PopComponent } from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

export default {
	title: 'Animation/Pop',
	component: PopComponent,
	argTypes: {
		in: {
			name: 'Animate',
			type: 'boolean',
			defaultValue: __DEFAULT_ANIMATION_IN__,
			// description: '',
			control: { type: 'boolean' }
		},
		initialScale: {
			name: 'Initial Scale',
			type: 'number',
			defaultValue: __DEFAULT_POP_INITIAL_SCALE__,
			// description: '',
			control: { type: 'number' }
		},
		isReversed: {
			name: 'Reversed',
			type: 'boolean',
			defaultValue: __DEFAULT_POP_IS_REVERSED__,
			// description: '',
			control: { type: 'boolean' }
		}
		// transition,
		// transitionEnd,
	}
} as PopStoryMeta;

export const Pop: PopStory = (props: PopProps<PolymorphicDefaultElement>): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	const radius = classes.borders.border_radius.base;

	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ color, colorMode, colorType: 'color', hueType: 'color', classType: 'bg' });

	const padding = classes.spacing.p[4];

	return (
		<Center w='auto'>
			<PopComponent {...props}>
				<Center className={classNames(radius, text, background, padding)} w='100px' h='100px' />
			</PopComponent>
		</Center>
	);
};
