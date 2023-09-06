import type { ReactElement } from 'react';

import { Center } from '@components/Layout';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../.storybook/preview';

import { __DEFAULT_CLEAR_ICON_BUTTON_HAS_TOOLTIP__ } from './common/constants';
import type { ClearIconButtonDefaultElement, ClearIconButtonProps } from './common/types';
import type { ClearIconButtonStory, ClearIconButtonStoryMeta } from './common/types/story';
import { ClearIconButton as ClearIconButtonComponent } from '.';

export default {
	title: 'Buttons/ClearIconButton',
	component: ClearIconButtonComponent,
	argTypes: {
		hasTooltip: {
			name: 'Has Tooltip',
			type: 'boolean',
			defaultValue: __DEFAULT_CLEAR_ICON_BUTTON_HAS_TOOLTIP__,
			// description: '',
			control: { type: 'boolean' }
		}
	}
} as ClearIconButtonStoryMeta;

export const ClearIconButton: ClearIconButtonStory = (
	props: ClearIconButtonProps<ClearIconButtonDefaultElement>
): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	return (
		<Center w='100%'>
			<ClearIconButtonComponent {...props} color={color} colorMode={colorMode} />
		</Center>
	);
};
