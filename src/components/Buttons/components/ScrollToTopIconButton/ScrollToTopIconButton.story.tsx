import type { ReactElement } from 'react';

import { Center } from '@components/Layout';

import { useStorybookContext } from '@components/Provider/components/StorybookProvider';

import { __DEFAULT_SCROLL_TO_TOP_ICON_BUTTON_HAS_TOOLTIP__ } from './common/constants';
import type { ScrollToTopIconButtonDefaultElement, ScrollToTopIconButtonProps } from './common/types';
import type { ScrollToTopIconButtonStory, ScrollToTopIconButtonStoryMeta } from './common/types/story';
import { ScrollToTopIconButton as ScrollToTopIconButtonComponent } from '.';

export default {
	title: 'Buttons/ScrollToTopIconButton',
	component: ScrollToTopIconButtonComponent,
	argTypes: {
		hasTooltip: {
			name: 'Has Tooltip',
			type: 'boolean',
			defaultValue: __DEFAULT_SCROLL_TO_TOP_ICON_BUTTON_HAS_TOOLTIP__,
			// description: '',
			control: { type: 'boolean' }
		}
	}
} as ScrollToTopIconButtonStoryMeta;

export const ScrollToTopIconButton: ScrollToTopIconButtonStory = (
	props: ScrollToTopIconButtonProps<ScrollToTopIconButtonDefaultElement>
): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	return (
		<Center w='100%'>
			<ScrollToTopIconButtonComponent {...props} color={color} colorMode={colorMode} />
		</Center>
	);
};
