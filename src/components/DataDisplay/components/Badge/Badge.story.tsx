import type { ReactElement } from 'react';

import type { PolymorphicDefaultElement } from '@common/types';

import { Center } from '@components/Layout';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../../.storybook/preview';

import {
	__DEFAULT_BADGE_IS_ACTIVE__,
	__DEFAULT_BADGE_IS_CLICKABLE__,
	__DEFAULT_BADGE_IS_COMPACT__,
	__DEFAULT_BADGE_IS_DISABLED__,
	__DEFAULT_BADGE_IS_FULLWIDTH__,
	__DEFAULT_BADGE_IS_OUTLINED__,
	__DEFAULT_BADGE_IS_ROUND__,
	__DEFAULT_BADGE_IS_UPPERCASE__,
	__DEFAULT_BADGE_SIZE__,
	__DEFAULT_BADGE_VARIANT__
} from './common/constants';
import type { BadgeProps, BadgeSize, BadgeVariant } from './common/types';
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
			defaultValue: __DEFAULT_BADGE_IS_ACTIVE__,
			// description: '',
			control: { type: 'boolean' }
		},
		isClickable: {
			name: 'Clickable',
			type: 'boolean',
			defaultValue: __DEFAULT_BADGE_IS_CLICKABLE__,
			// description: '',
			control: { type: 'boolean' }
		},
		isCompact: {
			name: 'Compact',
			type: 'boolean',
			defaultValue: __DEFAULT_BADGE_IS_COMPACT__,
			// description: '',
			control: { type: 'boolean' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: __DEFAULT_BADGE_IS_DISABLED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isFullWidth: {
			name: 'FullWidth',
			type: 'boolean',
			defaultValue: __DEFAULT_BADGE_IS_FULLWIDTH__,
			// description: '',
			control: { type: 'boolean' }
		},
		isOutlined: {
			name: 'Outlined',
			type: 'boolean',
			defaultValue: __DEFAULT_BADGE_IS_OUTLINED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isRound: {
			name: 'Round',
			type: 'boolean',
			defaultValue: __DEFAULT_BADGE_IS_ROUND__,
			// description: '',
			control: { type: 'boolean' }
		},
		isUppercase: {
			name: 'Uppercase',
			type: 'boolean',
			defaultValue: __DEFAULT_BADGE_IS_UPPERCASE__,
			// description: '',
			control: { type: 'boolean' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: __DEFAULT_BADGE_SIZE__,
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
			defaultValue: __DEFAULT_BADGE_VARIANT__,
			// description: '',
			options: ['contained', 'light', 'dark', 'outlined', 'monochrome', 'text'] as Array<BadgeVariant>,
			control: { type: 'radio' }
		}
	}
} as BadgeStoryMeta;

export const Badge: BadgeStory = (props: BadgeProps<PolymorphicDefaultElement>): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	return (
		<Center w='100%'>
			<BadgeComponent
				{...props}
				color={color}
				colorMode={colorMode}
				// renderLeft={() => <BadgeIcon icon='10k' category='filled' />}
				// renderRight={() => <BadgeIcon icon='12mp' category='filled' />}
				renderAction={(props) => <BadgeCloseIconButton {...props} />}
			>
				Hello I am a Badge
			</BadgeComponent>
		</Center>
	);
};
