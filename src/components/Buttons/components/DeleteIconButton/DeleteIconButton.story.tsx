import { Center } from '../../../Layout';
import React from 'react';
import { useStorybookContext } from '../../../Provider/components/StorybookProvider';

import { DEFAULT_DELETE_ICON_BUTTON_HAS_TOOLTIP } from './common/constants';
import type { DeleteIconButtonDefaultElement, DeleteIconButtonProps } from './common/types';
import type { DeleteIconButtonStory, DeleteIconButtonStoryMeta } from './common/types/story';
import { DeleteIconButton as DeleteIconButtonComponent } from '.';

export default {
	title: 'Buttons/DeleteIconButton',
	component: DeleteIconButtonComponent,
	argTypes: {
		hasTooltip: {
			name: 'Has Tooltip',
			type: 'boolean',
			defaultValue: DEFAULT_DELETE_ICON_BUTTON_HAS_TOOLTIP,
			// description: '',
			control: { type: 'boolean' }
		}
	}
} as DeleteIconButtonStoryMeta;

export const DeleteIconButton: DeleteIconButtonStory = (
	props: DeleteIconButtonProps<DeleteIconButtonDefaultElement>
): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	return (
		<Center w='100%'>
			<DeleteIconButtonComponent {...props} color={color} colorMode={colorMode} />
		</Center>
	);
};
