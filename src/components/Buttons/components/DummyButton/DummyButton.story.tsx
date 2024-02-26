import { Center } from '../../../Layout';

import { useStorybookContext } from '../../../Provider/components/StorybookProvider';
import React from 'react';
import {
	__DEFAULT_DUMMY_BUTTON_IS_ANIMATED__,
	__DEFAULT_DUMMY_BUTTON_IS_COMPACT__,
	__DEFAULT_DUMMY_BUTTON_IS_FULLWIDTH__,
	__DEFAULT_DUMMY_BUTTON_IS_OUTLINED__,
	__DEFAULT_DUMMY_BUTTON_IS_ROUND__,
	__DEFAULT_DUMMY_BUTTON_SIZE__,
	__DEFAULT_DUMMY_BUTTON_VARIANT__
} from './common/constants';
import type { DummyButtonDefaultElement, DummyButtonProps, DummyButtonSize, DummyButtonVariant } from './common/types';
import type { DummyButtonStory, DummyButtonStoryMeta } from './common/types/story';
import { DummyButtonIcon } from './components';
import { DummyButton as DummyButtonComponent } from '.';

export default {
	title: 'Buttons/DummyButton',
	component: DummyButtonComponent,
	argTypes: {
		isAnimated: {
			name: 'Animated',
			type: 'boolean',
			defaultValue: __DEFAULT_DUMMY_BUTTON_IS_ANIMATED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isCompact: {
			name: 'Compact',
			type: 'boolean',
			defaultValue: __DEFAULT_DUMMY_BUTTON_IS_COMPACT__,
			// description: '',
			control: { type: 'boolean' }
		},
		isFullWidth: {
			name: 'FullWidth',
			type: 'boolean',
			defaultValue: __DEFAULT_DUMMY_BUTTON_IS_FULLWIDTH__,
			// description: '',
			control: { type: 'boolean' }
		},
		isRound: {
			name: 'Round',
			type: 'boolean',
			defaultValue: __DEFAULT_DUMMY_BUTTON_IS_ROUND__,
			// description: '',
			control: { type: 'boolean' }
		},
		isOutlined: {
			name: 'Outlined',
			type: 'boolean',
			defaultValue: __DEFAULT_DUMMY_BUTTON_IS_OUTLINED__,
			// description: '',
			control: { type: 'boolean' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: __DEFAULT_DUMMY_BUTTON_SIZE__,
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl'] as Array<DummyButtonSize>,
			control: { type: 'radio' }
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: __DEFAULT_DUMMY_BUTTON_VARIANT__,
			// description: '',
			options: [
				'contained',
				'light',
				'dark',
				'outlined',
				'monochrome',
				'text',
				'unstyled'
			] as Array<DummyButtonVariant>,
			control: { type: 'radio' }
		}
	}
} as DummyButtonStoryMeta;

export const DummyButton: DummyButtonStory = (props: DummyButtonProps<DummyButtonDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	return (
		<Center w='100%'>
			<DummyButtonComponent
				{...props}
				color={color}
				colorMode={colorMode}
				renderLeft={() => <DummyButtonIcon icon='10k' category='filled' />}
				renderRight={() => <DummyButtonIcon icon='12mp' category='filled' />}
			>
				Hello I am a DummyButton
			</DummyButtonComponent>
		</Center>
	);
};
