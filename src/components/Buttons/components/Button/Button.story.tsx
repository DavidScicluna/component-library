import type { ReactElement } from 'react';

import { Center } from '@components/Layout';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../../.storybook/preview';

import {
	// __DEFAULT_BUTTON_CAN_CLICK_ON_ENTER__,
	// __DEFAULT_BUTTON_CAN_CLICK_ON_SPACE__,
	__DEFAULT_BUTTON_IS_ACTIVE__,
	__DEFAULT_BUTTON_IS_COMPACT__,
	__DEFAULT_BUTTON_IS_DISABLED__,
	// __DEFAULT_BUTTON_IS_FOCUSABLE__,
	__DEFAULT_BUTTON_IS_FULLWIDTH__,
	__DEFAULT_BUTTON_IS_LOADING__,
	__DEFAULT_BUTTON_IS_ROUND__,
	__DEFAULT_BUTTON_SIZE__,
	__DEFAULT_BUTTON_VARIANT__
} from './common/constants';
import type { ButtonDefaultElement, ButtonProps, ButtonSize, ButtonVariant } from './common/types';
import type { ButtonStory, ButtonStoryMeta } from './common/types/story';
import { ButtonIcon, ButtonSpinner } from './components';
import { Button as ButtonComponent } from '.';

export default {
	title: 'Buttons/Button',
	component: ButtonComponent,
	argTypes: {
		// canClickOnEnter: {
		// 	name: 'Click On Enter',
		// 	type: 'boolean',
		// 	defaultValue: __DEFAULT_BUTTON_CAN_CLICK_ON_ENTER__,
		// 	// description: '',
		// 	control: { type: 'boolean' }
		// },
		// canClickOnSpace: {
		// 	name: 'Click On Space',
		// 	type: 'boolean',
		// 	defaultValue: __DEFAULT_BUTTON_CAN_CLICK_ON_SPACE__,
		// 	// description: '',
		// 	control: { type: 'boolean' }
		// },
		isActive: {
			name: 'Active',
			type: 'boolean',
			defaultValue: __DEFAULT_BUTTON_IS_ACTIVE__,
			// description: '',
			control: { type: 'boolean' }
		},
		isCompact: {
			name: 'Compact',
			type: 'boolean',
			defaultValue: __DEFAULT_BUTTON_IS_COMPACT__,
			// description: '',
			control: { type: 'boolean' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: __DEFAULT_BUTTON_IS_DISABLED__,
			// description: '',
			control: { type: 'boolean' }
		},
		// isFocusable: {
		// 	name: 'Focusable',
		// 	type: 'boolean',
		// 	defaultValue: __DEFAULT_BUTTON_IS_FOCUSABLE__,
		// 	// description: '',
		// 	control: { type: 'boolean' }
		// },
		isFullWidth: {
			name: 'FullWidth',
			type: 'boolean',
			defaultValue: __DEFAULT_BUTTON_IS_FULLWIDTH__,
			// description: '',
			control: { type: 'boolean' }
		},
		isLoading: {
			name: 'Loading',
			type: 'boolean',
			defaultValue: __DEFAULT_BUTTON_IS_LOADING__,
			// description: '',
			control: { type: 'boolean' }
		},
		isRound: {
			name: 'Round',
			type: 'boolean',
			defaultValue: __DEFAULT_BUTTON_IS_ROUND__,
			// description: '',
			control: { type: 'boolean' }
		},
		isOutlined: {
			name: 'Outlined',
			type: 'boolean',
			defaultValue: __DEFAULT_BUTTON_IS_ROUND__,
			// description: '',
			control: { type: 'boolean' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: __DEFAULT_BUTTON_SIZE__,
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl'] as Array<ButtonSize>,
			control: { type: 'radio' }
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: __DEFAULT_BUTTON_VARIANT__,
			// description: '',
			options: ['contained', 'light', 'dark', 'outlined', 'monochrome', 'text'] as Array<ButtonVariant>,
			control: { type: 'radio' }
		}
	}
} as ButtonStoryMeta;

export const Button: ButtonStory = (props: ButtonProps<ButtonDefaultElement>): ReactElement => {
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
