import { Center } from '../../../Layout';

import { useStorybookContext } from '../../../Provider/components/StorybookProvider';
import React from 'react';
import {
	__DEFAULT_DUMMY_ICON_BUTTON_IS_ANIMATED__,
	__DEFAULT_DUMMY_ICON_BUTTON_IS_COMPACT__,
	__DEFAULT_DUMMY_ICON_BUTTON_IS_OUTLINED__,
	__DEFAULT_DUMMY_ICON_BUTTON_IS_ROUND__,
	__DEFAULT_DUMMY_ICON_BUTTON_SIZE__,
	__DEFAULT_DUMMY_ICON_BUTTON_VARIANT__
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
			defaultValue: __DEFAULT_DUMMY_ICON_BUTTON_IS_ANIMATED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isCompact: {
			name: 'Compact',
			type: 'boolean',
			defaultValue: __DEFAULT_DUMMY_ICON_BUTTON_IS_COMPACT__,
			// description: '',
			control: { type: 'boolean' }
		},
		isRound: {
			name: 'Round',
			type: 'boolean',
			defaultValue: __DEFAULT_DUMMY_ICON_BUTTON_IS_ROUND__,
			// description: '',
			control: { type: 'boolean' }
		},
		isOutlined: {
			name: 'Outlined',
			type: 'boolean',
			defaultValue: __DEFAULT_DUMMY_ICON_BUTTON_IS_OUTLINED__,
			// description: '',
			control: { type: 'boolean' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: __DEFAULT_DUMMY_ICON_BUTTON_SIZE__,
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl'] as Array<DummyIconButtonSize>,
			control: { type: 'radio' }
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: __DEFAULT_DUMMY_ICON_BUTTON_VARIANT__,
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
