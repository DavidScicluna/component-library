import type { ReactElement } from 'react';

import { Center } from '@components/Layout';

import { useStorybookContext } from '@components/Provider/components/StorybookProvider';

import {
	__DEFAULT_DUMMY_BADGE_IS_ANIMATED__,
	__DEFAULT_DUMMY_BADGE_IS_COMPACT__,
	__DEFAULT_DUMMY_BADGE_IS_FULLWIDTH__,
	__DEFAULT_DUMMY_BADGE_IS_OUTLINED__,
	__DEFAULT_DUMMY_BADGE_IS_ROUND__,
	__DEFAULT_DUMMY_BADGE_IS_UPPERCASE__,
	__DEFAULT_DUMMY_BADGE_SIZE__,
	__DEFAULT_DUMMY_BADGE_VARIANT__
} from './common/constants';
import type { DummyBadgeProps, DummyBadgeSize, DummyBadgeVariant } from './common/types';
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
			defaultValue: __DEFAULT_DUMMY_BADGE_IS_ANIMATED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isCompact: {
			name: 'Compact',
			type: 'boolean',
			defaultValue: __DEFAULT_DUMMY_BADGE_IS_COMPACT__,
			// description: '',
			control: { type: 'boolean' }
		},
		isFullWidth: {
			name: 'FullWidth',
			type: 'boolean',
			defaultValue: __DEFAULT_DUMMY_BADGE_IS_FULLWIDTH__,
			// description: '',
			control: { type: 'boolean' }
		},
		isOutlined: {
			name: 'Outlined',
			type: 'boolean',
			defaultValue: __DEFAULT_DUMMY_BADGE_IS_OUTLINED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isRound: {
			name: 'Round',
			type: 'boolean',
			defaultValue: __DEFAULT_DUMMY_BADGE_IS_ROUND__,
			// description: '',
			control: { type: 'boolean' }
		},
		isUppercase: {
			name: 'Uppercase',
			type: 'boolean',
			defaultValue: __DEFAULT_DUMMY_BADGE_IS_UPPERCASE__,
			// description: '',
			control: { type: 'boolean' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: __DEFAULT_DUMMY_BADGE_SIZE__,
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
			defaultValue: __DEFAULT_DUMMY_BADGE_VARIANT__,
			// description: '',
			options: ['contained', 'light', 'dark', 'outlined', 'monochrome', 'text'] as Array<DummyBadgeVariant>,
			control: { type: 'radio' }
		}
	}
} as DummyBadgeStoryMeta;

export const DummyBadge: DummyBadgeStory = (props: DummyBadgeProps<any>): ReactElement => {
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
