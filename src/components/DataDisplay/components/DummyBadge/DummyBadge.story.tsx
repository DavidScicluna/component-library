import { Center } from '../../../Layout';
import React from 'react';
import { useStorybookContext } from '../../../Provider/components/StorybookProvider';

import {
	DEFAULT_DUMMY_BADGE_IS_ANIMATED,
	DEFAULT_DUMMY_BADGE_IS_COMPACT,
	DEFAULT_DUMMY_BADGE_IS_FULLWIDTH,
	DEFAULT_DUMMY_BADGE_IS_OUTLINED,
	DEFAULT_DUMMY_BADGE_IS_ROUND,
	DEFAULT_DUMMY_BADGE_IS_UPPERCASE,
	DEFAULT_DUMMY_BADGE_SIZE,
	DEFAULT_DUMMY_BADGE_VARIANT
} from './common/constants';
import type { DummyBadgeDefaultElement, DummyBadgeProps, DummyBadgeSize, DummyBadgeVariant } from './common/types';
import type { DummyBadgeStory, DummyBadgeStoryMeta } from './common/types/story';
import { DummyBadgeIcon } from './components';
import { DummyBadge as DummyBadgeComponent } from '.';

export default {
	title: 'Data Display/DummyBadge',
	component: DummyBadgeComponent,
	argTypes: {
		isAnimated: {
			name: 'Animated',
			type: 'boolean',
			defaultValue: DEFAULT_DUMMY_BADGE_IS_ANIMATED,
			// description: '',
			control: { type: 'boolean' }
		},
		isCompact: {
			name: 'Compact',
			type: 'boolean',
			defaultValue: DEFAULT_DUMMY_BADGE_IS_COMPACT,
			// description: '',
			control: { type: 'boolean' }
		},
		isFullWidth: {
			name: 'FullWidth',
			type: 'boolean',
			defaultValue: DEFAULT_DUMMY_BADGE_IS_FULLWIDTH,
			// description: '',
			control: { type: 'boolean' }
		},
		isOutlined: {
			name: 'Outlined',
			type: 'boolean',
			defaultValue: DEFAULT_DUMMY_BADGE_IS_OUTLINED,
			// description: '',
			control: { type: 'boolean' }
		},
		isRound: {
			name: 'Round',
			type: 'boolean',
			defaultValue: DEFAULT_DUMMY_BADGE_IS_ROUND,
			// description: '',
			control: { type: 'boolean' }
		},
		isUppercase: {
			name: 'Uppercase',
			type: 'boolean',
			defaultValue: DEFAULT_DUMMY_BADGE_IS_UPPERCASE,
			// description: '',
			control: { type: 'boolean' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: DEFAULT_DUMMY_BADGE_SIZE,
			// description: '',
			options: [
				'xs',
				'sm',
				'md',
				'lg',
				'xl',
				'2xl',
				'3xl',
				'4xl',
				'5xl',
				'6xl',
				'7xl',
				'8xl',
				'9xl'
			] as Array<DummyBadgeSize>,
			control: { type: 'radio' }
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: DEFAULT_DUMMY_BADGE_VARIANT,
			// description: '',
			options: ['contained', 'light', 'dark', 'outlined', 'monochrome', 'text'] as Array<DummyBadgeVariant>,
			control: { type: 'radio' }
		}
	}
} as DummyBadgeStoryMeta;

export const DummyBadge: DummyBadgeStory = (props: DummyBadgeProps<DummyBadgeDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	return (
		<Center w='100%'>
			<DummyBadgeComponent
				{...props}
				color={color}
				colorMode={colorMode}
				renderLeft={() => <DummyBadgeIcon icon='10k' category='filled' />}
				renderRight={() => <DummyBadgeIcon icon='12mp' category='filled' />}
				renderAction={() => <DummyBadgeIcon icon='close' category='filled' />}
			>
				Hello I am a DummyBadge
			</DummyBadgeComponent>
		</Center>
	);
};
