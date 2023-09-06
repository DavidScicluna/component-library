import type { ReactElement } from 'react';

import { Center } from '@components/Layout';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../.storybook/preview';

import { __DEFAULT_CLOSE_ICON_BUTTON_HAS_TOOLTIP__ } from './common/constants';
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
			defaultValue: __DEFAULT_CLOSE_ICON_BUTTON_HAS_TOOLTIP__,
			// description: '',
			control: { type: 'boolean' }
		}
	}
} as CloseIconButtonStoryMeta;

export const CloseIconButton: CloseIconButtonStory = (
	props: CloseIconButtonProps<CloseIconButtonDefaultElement>
): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	return (
		<Center w='100%'>
			<CloseIconButtonComponent {...props} color={color} colorMode={colorMode} />
		</Center>
	);
};
