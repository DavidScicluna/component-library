import { Center } from '../../../Layout';

import { useStorybookContext } from '../../../Provider/components/StorybookProvider';
import React from 'react';
import {
	DEFAULT_ICON_BUTTON_IS_ACTIVE,
	DEFAULT_ICON_BUTTON_IS_COMPACT,
	DEFAULT_ICON_BUTTON_IS_DISABLED,
	DEFAULT_ICON_BUTTON_IS_FOCUSED,
	DEFAULT_ICON_BUTTON_IS_LOADING,
	DEFAULT_ICON_BUTTON_IS_OUTLINED,
	DEFAULT_ICON_BUTTON_IS_ROUND,
	DEFAULT_ICON_BUTTON_SIZE,
	DEFAULT_ICON_BUTTON_VARIANT
} from './common/constants';
import type { IconButtonDefaultElement, IconButtonProps, IconButtonSize, IconButtonVariant } from './common/types';
import type { IconButtonStory, IconButtonStoryMeta } from './common/types/story';
import { IconButtonIcon, IconButtonSpinner } from './components';
import { IconButton as IconButtonComponent } from '.';

export default {
	title: 'Buttons/IconButton',
	component: IconButtonComponent,
	argTypes: {
		isActive: {
			name: 'Active',
			type: 'boolean',
			defaultValue: DEFAULT_ICON_BUTTON_IS_ACTIVE,
			// description: '',
			control: { type: 'boolean' }
		},
		isCompact: {
			name: 'Compact',
			type: 'boolean',
			defaultValue: DEFAULT_ICON_BUTTON_IS_COMPACT,
			// description: '',
			control: { type: 'boolean' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: DEFAULT_ICON_BUTTON_IS_DISABLED,
			// description: '',
			control: { type: 'boolean' }
		},
		isFocused: {
			name: 'Focused',
			type: 'boolean',
			defaultValue: DEFAULT_ICON_BUTTON_IS_FOCUSED,
			// description: '',
			control: { type: 'boolean' }
		},
		isLoading: {
			name: 'Loading',
			type: 'boolean',
			defaultValue: DEFAULT_ICON_BUTTON_IS_LOADING,
			// description: '',
			control: { type: 'boolean' }
		},
		isRound: {
			name: 'Round',
			type: 'boolean',
			defaultValue: DEFAULT_ICON_BUTTON_IS_ROUND,
			// description: '',
			control: { type: 'boolean' }
		},
		isOutlined: {
			name: 'Outlined',
			type: 'boolean',
			defaultValue: DEFAULT_ICON_BUTTON_IS_OUTLINED,
			// description: '',
			control: { type: 'boolean' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: DEFAULT_ICON_BUTTON_SIZE,
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl'] as Array<IconButtonSize>,
			control: { type: 'radio' }
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: DEFAULT_ICON_BUTTON_VARIANT,
			// description: '',
			options: [
				'contained',
				'light',
				'dark',
				'outlined',
				'monochrome',
				'icon',
				'unstyled'
			] as Array<IconButtonVariant>,
			control: { type: 'radio' }
		}
	}
} as IconButtonStoryMeta;

export const IconButton: IconButtonStory = (props: IconButtonProps<IconButtonDefaultElement>): JSX.Element => {
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
