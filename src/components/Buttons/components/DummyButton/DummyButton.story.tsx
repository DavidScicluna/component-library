import { Center } from '../../../Layout';

import { useStorybookContext } from '../../../Provider/components/StorybookProvider';
import React from 'react';
import {
	DEFAULT_DUMMY_BUTTON_IS_ANIMATED,
	DEFAULT_DUMMY_BUTTON_IS_COMPACT,
	DEFAULT_DUMMY_BUTTON_IS_FULLWIDTH,
	DEFAULT_DUMMY_BUTTON_IS_OUTLINED,
	DEFAULT_DUMMY_BUTTON_IS_ROUND,
	DEFAULT_DUMMY_BUTTON_SIZE,
	DEFAULT_DUMMY_BUTTON_VARIANT
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
			defaultValue: DEFAULT_DUMMY_BUTTON_IS_ANIMATED,
			// description: '',
			control: { type: 'boolean' }
		},
		isCompact: {
			name: 'Compact',
			type: 'boolean',
			defaultValue: DEFAULT_DUMMY_BUTTON_IS_COMPACT,
			// description: '',
			control: { type: 'boolean' }
		},
		isFullWidth: {
			name: 'FullWidth',
			type: 'boolean',
			defaultValue: DEFAULT_DUMMY_BUTTON_IS_FULLWIDTH,
			// description: '',
			control: { type: 'boolean' }
		},
		isRound: {
			name: 'Round',
			type: 'boolean',
			defaultValue: DEFAULT_DUMMY_BUTTON_IS_ROUND,
			// description: '',
			control: { type: 'boolean' }
		},
		isOutlined: {
			name: 'Outlined',
			type: 'boolean',
			defaultValue: DEFAULT_DUMMY_BUTTON_IS_OUTLINED,
			// description: '',
			control: { type: 'boolean' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: DEFAULT_DUMMY_BUTTON_SIZE,
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl'] as Array<DummyButtonSize>,
			control: { type: 'radio' }
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: DEFAULT_DUMMY_BUTTON_VARIANT,
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
