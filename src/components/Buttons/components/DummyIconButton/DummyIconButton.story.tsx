import { Center } from '../../../Layout';

import { useStorybookContext } from '../../../Provider/components/StorybookProvider';
import React from 'react';
import {
	DEFAULT_DUMMY_ICON_BUTTON_IS_ANIMATED,
	DEFAULT_DUMMY_ICON_BUTTON_IS_COMPACT,
	DEFAULT_DUMMY_ICON_BUTTON_IS_OUTLINED,
	DEFAULT_DUMMY_ICON_BUTTON_IS_ROUND,
	DEFAULT_DUMMY_ICON_BUTTON_SIZE,
	DEFAULT_DUMMY_ICON_BUTTON_VARIANT
} from './common/constants';
import type {
	DummyIconButtonDefaultElement,
	DummyIconButtonProps,
	DummyIconButtonSize,
	DummyIconButtonVariant
} from './common/types';
import type { DummyIconButtonStory, DummyIconButtonStoryMeta } from './common/types/story';
import { DummyIconButtonIcon } from './components';
import { DummyIconButton as DummyIconButtonComponent } from '.';

export default {
	title: 'Buttons/DummyIconButton',
	component: DummyIconButtonComponent,
	argTypes: {
		isAnimated: {
			name: 'Animated',
			type: 'boolean',
			defaultValue: DEFAULT_DUMMY_ICON_BUTTON_IS_ANIMATED,
			// description: '',
			control: { type: 'boolean' }
		},
		isCompact: {
			name: 'Compact',
			type: 'boolean',
			defaultValue: DEFAULT_DUMMY_ICON_BUTTON_IS_COMPACT,
			// description: '',
			control: { type: 'boolean' }
		},
		isRound: {
			name: 'Round',
			type: 'boolean',
			defaultValue: DEFAULT_DUMMY_ICON_BUTTON_IS_ROUND,
			// description: '',
			control: { type: 'boolean' }
		},
		isOutlined: {
			name: 'Outlined',
			type: 'boolean',
			defaultValue: DEFAULT_DUMMY_ICON_BUTTON_IS_OUTLINED,
			// description: '',
			control: { type: 'boolean' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: DEFAULT_DUMMY_ICON_BUTTON_SIZE,
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl'] as Array<DummyIconButtonSize>,
			control: { type: 'radio' }
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: DEFAULT_DUMMY_ICON_BUTTON_VARIANT,
			// description: '',
			options: [
				'contained',
				'light',
				'dark',
				'outlined',
				'monochrome',
				'icon',
				'unstyled'
			] as Array<DummyIconButtonVariant>,
			control: { type: 'radio' }
		}
	}
} as DummyIconButtonStoryMeta;

export const DummyIconButton: DummyIconButtonStory = (
	props: DummyIconButtonProps<DummyIconButtonDefaultElement>
): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	return (
		<Center w='100%'>
			<DummyIconButtonComponent {...props} color={color} colorMode={colorMode}>
				<DummyIconButtonIcon icon='10k' category='filled' />
			</DummyIconButtonComponent>
		</Center>
	);
};
