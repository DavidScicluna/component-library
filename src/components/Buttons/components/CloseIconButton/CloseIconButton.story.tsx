import { Center } from '../../../Layout';

import { useStorybookContext } from '../../../Provider/components/StorybookProvider';
import React from 'react';
import { DEFAULT_CLOSE_ICON_BUTTON_HAS_TOOLTIP } from './common/constants';
import type { CloseIconButtonDefaultElement, CloseIconButtonProps } from './common/types';
import type { CloseIconButtonStory, CloseIconButtonStoryMeta } from './common/types/story';
import { CloseIconButton as CloseIconButtonComponent } from '.';

export default {
	title: 'Buttons/CloseIconButton',
	component: CloseIconButtonComponent,
	argTypes: {
		hasTooltip: {
			name: 'Has Tooltip',
			type: 'boolean',
			defaultValue: DEFAULT_CLOSE_ICON_BUTTON_HAS_TOOLTIP,
			// description: '',
			control: { type: 'boolean' }
		}
	}
} as CloseIconButtonStoryMeta;

export const CloseIconButton: CloseIconButtonStory = (
	props: CloseIconButtonProps<CloseIconButtonDefaultElement>
): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	return (
		<Center w='100%'>
			<CloseIconButtonComponent {...props} color={color} colorMode={colorMode} />
		</Center>
	);
};
