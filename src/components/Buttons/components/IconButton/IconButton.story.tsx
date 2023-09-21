import type { ReactElement } from 'react';

import { Center } from '@components/Layout';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../../.storybook/preview';

import {
	__DEFAULT_ICON_BUTTON_CAN_CLICK_ON_ENTER__,
	__DEFAULT_ICON_BUTTON_CAN_CLICK_ON_SPACE__,
	__DEFAULT_ICON_BUTTON_IS_ACTIVE__,
	__DEFAULT_ICON_BUTTON_IS_COMPACT__,
	__DEFAULT_ICON_BUTTON_IS_DISABLED__,
	__DEFAULT_ICON_BUTTON_IS_FOCUSABLE__,
	__DEFAULT_ICON_BUTTON_IS_LOADING__,
	__DEFAULT_ICON_BUTTON_IS_ROUND__,
	__DEFAULT_ICON_BUTTON_SIZE__,
	__DEFAULT_ICON_BUTTON_VARIANT__
} from './common/constants';
import type { IconButtonDefaultElement, IconButtonProps, IconButtonSize, IconButtonVariant } from './common/types';
import type { IconButtonStory, IconButtonStoryMeta } from './common/types/story';
import { IconButtonIcon, IconButtonSpinner } from './components';
import { IconButton as IconButtonComponent } from '.';

export default {
	title: 'Buttons/IconButton',
	component: IconButtonComponent,
	argTypes: {
		canClickOnEnter: {
			name: 'Click On Enter',
			type: 'boolean',
			defaultValue: __DEFAULT_ICON_BUTTON_CAN_CLICK_ON_ENTER__,
			// description: '',
			control: { type: 'boolean' }
		},
		canClickOnSpace: {
			name: 'Click On Space',
			type: 'boolean',
			defaultValue: __DEFAULT_ICON_BUTTON_CAN_CLICK_ON_SPACE__,
			// description: '',
			control: { type: 'boolean' }
		},
		isActive: {
			name: 'Active',
			type: 'boolean',
			defaultValue: __DEFAULT_ICON_BUTTON_IS_ACTIVE__,
			// description: '',
			control: { type: 'boolean' }
		},
		isCompact: {
			name: 'Compact',
			type: 'boolean',
			defaultValue: __DEFAULT_ICON_BUTTON_IS_COMPACT__,
			// description: '',
			control: { type: 'boolean' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: __DEFAULT_ICON_BUTTON_IS_DISABLED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isFocusable: {
			name: 'Focusable',
			type: 'boolean',
			defaultValue: __DEFAULT_ICON_BUTTON_IS_FOCUSABLE__,
			// description: '',
			control: { type: 'boolean' }
		},
		isLoading: {
			name: 'Loading',
			type: 'boolean',
			defaultValue: __DEFAULT_ICON_BUTTON_IS_LOADING__,
			// description: '',
			control: { type: 'boolean' }
		},
		isRound: {
			name: 'Round',
			type: 'boolean',
			defaultValue: __DEFAULT_ICON_BUTTON_IS_ROUND__,
			// description: '',
			control: { type: 'boolean' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: __DEFAULT_ICON_BUTTON_SIZE__,
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl'] as Array<IconButtonSize>,
			control: { type: 'radio' }
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: __DEFAULT_ICON_BUTTON_VARIANT__,
			// description: '',
			options: ['contained', 'light', 'dark', 'outlined', 'monochrome', 'icon'] as Array<IconButtonVariant>,
			control: { type: 'radio' }
		}
	}
} as IconButtonStoryMeta;

export const IconButton: IconButtonStory = (props: IconButtonProps<IconButtonDefaultElement>): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	return (
		<Center w='100%'>
			<IconButtonComponent
				{...props}
				color={color}
				colorMode={colorMode}
				renderSpinner={() => <IconButtonSpinner />}
			>
				<IconButtonIcon icon='12mp' category='filled' />
			</IconButtonComponent>
		</Center>
	);
};
