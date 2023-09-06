import type { ReactElement } from 'react';

import { Center } from '@components/Layout';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../.storybook/preview';

import { __DEFAULT_DELETE_ICON_BUTTON_HAS_TOOLTIP__ } from './common/constants';
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
			defaultValue: __DEFAULT_DELETE_ICON_BUTTON_HAS_TOOLTIP__,
			// description: '',
			control: { type: 'boolean' }
		}
	}
} as DeleteIconButtonStoryMeta;

export const DeleteIconButton: DeleteIconButtonStory = (
	props: DeleteIconButtonProps<DeleteIconButtonDefaultElement>
): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	return (
		<Center w='100%'>
			<DeleteIconButtonComponent {...props} color={color} colorMode={colorMode} />
		</Center>
	);
};
