import { Center } from '../../../Layout';

import { useStorybookContext } from '../../../Provider/components/StorybookProvider';
import React from 'react';
import {
	DEFAULT_BADGE_IS_ACTIVE,
	DEFAULT_BADGE_IS_CLICKABLE,
	DEFAULT_BADGE_IS_COMPACT,
	DEFAULT_BADGE_IS_DISABLED,
	DEFAULT_BADGE_IS_FULLWIDTH,
	DEFAULT_BADGE_IS_OUTLINED,
	DEFAULT_BADGE_IS_ROUND,
	DEFAULT_BADGE_IS_UPPERCASE,
	DEFAULT_BADGE_SIZE,
	DEFAULT_BADGE_VARIANT
} from './common/constants';
import type { BadgeDefaultElement, BadgeProps, BadgeSize, BadgeVariant } from './common/types';
import type { BadgeStory, BadgeStoryMeta } from './common/types/story';
import { BadgeCloseIconButton, BadgeIcon } from './components';
import { Badge as BadgeComponent } from '.';

export default {
	title: 'Data Display/Badge',
	component: BadgeComponent,
	argTypes: {
		isActive: {
			name: 'Active',
			type: 'boolean',
			defaultValue: DEFAULT_BADGE_IS_ACTIVE,
			// description: '',
			control: { type: 'boolean' }
		},
		isClickable: {
			name: 'Clickable',
			type: 'boolean',
			defaultValue: DEFAULT_BADGE_IS_CLICKABLE,
			// description: '',
			control: { type: 'boolean' }
		},
		isCompact: {
			name: 'Compact',
			type: 'boolean',
			defaultValue: DEFAULT_BADGE_IS_COMPACT,
			// description: '',
			control: { type: 'boolean' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: DEFAULT_BADGE_IS_DISABLED,
			// description: '',
			control: { type: 'boolean' }
		},
		isFullWidth: {
			name: 'FullWidth',
			type: 'boolean',
			defaultValue: DEFAULT_BADGE_IS_FULLWIDTH,
			// description: '',
			control: { type: 'boolean' }
		},
		isOutlined: {
			name: 'Outlined',
			type: 'boolean',
			defaultValue: DEFAULT_BADGE_IS_OUTLINED,
			// description: '',
			control: { type: 'boolean' }
		},
		isRound: {
			name: 'Round',
			type: 'boolean',
			defaultValue: DEFAULT_BADGE_IS_ROUND,
			// description: '',
			control: { type: 'boolean' }
		},
		isUppercase: {
			name: 'Uppercase',
			type: 'boolean',
			defaultValue: DEFAULT_BADGE_IS_UPPERCASE,
			// description: '',
			control: { type: 'boolean' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: DEFAULT_BADGE_SIZE,
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
			] as Array<BadgeSize>,
			control: { type: 'radio' }
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: DEFAULT_BADGE_VARIANT,
			// description: '',
			options: ['contained', 'light', 'dark', 'outlined', 'monochrome', 'text'] as Array<BadgeVariant>,
			control: { type: 'radio' }
		}
	}
} as BadgeStoryMeta;

export const Badge: BadgeStory = (props: BadgeProps<BadgeDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	return (
		<Center w='100%'>
			<BadgeComponent
				{...props}
				color={color}
				colorMode={colorMode}
				renderLeft={() => <BadgeIcon icon='10k' category='filled' />}
				renderRight={() => <BadgeIcon icon='12mp' category='filled' />}
				renderAction={() => <BadgeCloseIconButton />}
			>
				Hello I am a Badge
			</BadgeComponent>
		</Center>
	);
};
