import { Center } from '../../../Layout';
import React from 'react';
import { useStorybookContext } from '../../../Provider/components/StorybookProvider';

import {
	DEFAULT_BUTTON_IS_ACTIVE,
	DEFAULT_BUTTON_IS_COMPACT,
	DEFAULT_BUTTON_IS_DISABLED,
	DEFAULT_BUTTON_IS_FOCUSED,
	DEFAULT_BUTTON_IS_FULLWIDTH,
	DEFAULT_BUTTON_IS_LOADING,
	DEFAULT_BUTTON_IS_ROUND,
	DEFAULT_BUTTON_SIZE,
	DEFAULT_BUTTON_VARIANT
} from './common/constants';
import type { ButtonDefaultElement, ButtonProps, ButtonSize, ButtonVariant } from './common/types';
import type { ButtonStory, ButtonStoryMeta } from './common/types/story';
import { ButtonIcon, ButtonSpinner } from './components';
import { Button as ButtonComponent } from '.';

export default {
	title: 'Buttons/Button',
	component: ButtonComponent,
	argTypes: {
		isActive: {
			name: 'Active',
			type: 'boolean',
			defaultValue: DEFAULT_BUTTON_IS_ACTIVE,
			// description: '',
			control: { type: 'boolean' }
		},
		isCompact: {
			name: 'Compact',
			type: 'boolean',
			defaultValue: DEFAULT_BUTTON_IS_COMPACT,
			// description: '',
			control: { type: 'boolean' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: DEFAULT_BUTTON_IS_DISABLED,
			// description: '',
			control: { type: 'boolean' }
		},
		isFocused: {
			name: 'Focused',
			type: 'boolean',
			defaultValue: DEFAULT_BUTTON_IS_FOCUSED,
			// description: '',
			control: { type: 'boolean' }
		},
		isFullWidth: {
			name: 'FullWidth',
			type: 'boolean',
			defaultValue: DEFAULT_BUTTON_IS_FULLWIDTH,
			// description: '',
			control: { type: 'boolean' }
		},
		isLoading: {
			name: 'Loading',
			type: 'boolean',
			defaultValue: DEFAULT_BUTTON_IS_LOADING,
			// description: '',
			control: { type: 'boolean' }
		},
		isRound: {
			name: 'Round',
			type: 'boolean',
			defaultValue: DEFAULT_BUTTON_IS_ROUND,
			// description: '',
			control: { type: 'boolean' }
		},
		isOutlined: {
			name: 'Outlined',
			type: 'boolean',
			defaultValue: DEFAULT_BUTTON_IS_ROUND,
			// description: '',
			control: { type: 'boolean' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: DEFAULT_BUTTON_SIZE,
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl'] as Array<ButtonSize>,
			control: { type: 'radio' }
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: DEFAULT_BUTTON_VARIANT,
			// description: '',
			options: [
				'contained',
				'light',
				'dark',
				'outlined',
				'monochrome',
				'text',
				'unstyled'
			] as Array<ButtonVariant>,
			control: { type: 'radio' }
		}
	}
} as ButtonStoryMeta;

export const Button: ButtonStory = (props: ButtonProps<ButtonDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	return (
		<Center w='100%'>
			<ButtonComponent
				{...props}
				color={color}
				colorMode={colorMode}
				renderLeft={() => <ButtonIcon icon='10k' category='filled' />}
				renderRight={() => <ButtonIcon icon='12mp' category='filled' />}
				renderSpinner={() => <ButtonSpinner />}
			>
				Hello I am a Button
			</ButtonComponent>
		</Center>
	);
};
