import type { ReactElement } from 'react';

import type { PolymorphicDefaultElement } from '@common/types';

import { Button } from '@components/Buttons';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../../.storybook/preview';

import {
	__DEFAULT_TOOLTIP_CLOSE_DELAY__,
	__DEFAULT_TOOLTIP_CLOSE_ON_CLICK__,
	__DEFAULT_TOOLTIP_CLOSE_ON_ESC__,
	__DEFAULT_TOOLTIP_GUTTER__,
	__DEFAULT_TOOLTIP_IS_DISABLED__,
	__DEFAULT_TOOLTIP_OPEN_DELAY__,
	__DEFAULT_TOOLTIP_PLACEMENT__
} from './common/constants';
import type { TooltipPlacement, TooltipProps } from './common/types';
import type { TooltipStory, TooltipStoryMeta } from './common/types/story';
import { Tooltip as TooltipComponent } from '.';

export default {
	title: 'Overlay/Tooltip',
	component: TooltipComponent,
	argTypes: {
		closeDelay: {
			name: 'Close Delay',
			type: 'number',
			defaultValue: __DEFAULT_TOOLTIP_CLOSE_DELAY__,
			// description: '',
			control: { type: 'number' }
		},
		openDelay: {
			name: 'Open Delay',
			type: 'number',
			defaultValue: __DEFAULT_TOOLTIP_OPEN_DELAY__,
			// description: '',
			control: { type: 'number' }
		},
		closeOnClick: {
			name: 'Close On Click',
			type: 'boolean',
			defaultValue: __DEFAULT_TOOLTIP_CLOSE_ON_CLICK__,
			// description: '',
			control: { type: 'boolean' }
		},
		closeOnEsc: {
			name: 'Close On Esc',
			type: 'boolean',
			defaultValue: __DEFAULT_TOOLTIP_CLOSE_ON_ESC__,
			// description: '',
			control: { type: 'boolean' }
		},
		gutter: {
			name: 'Gutter',
			type: 'number',
			defaultValue: __DEFAULT_TOOLTIP_GUTTER__,
			// description: '',
			control: { type: 'number' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: __DEFAULT_TOOLTIP_IS_DISABLED__,
			// description: '',
			control: { type: 'boolean' }
		},
		label: {
			name: 'Label',
			type: 'string',
			defaultValue: 'Hello I am a label!',
			// description: '',
			control: { type: 'text' }
		},
		placement: {
			name: 'Placement',
			type: 'string',
			defaultValue: __DEFAULT_TOOLTIP_PLACEMENT__,
			// description: '',
			options: [
				'top',
				'top-start',
				'top-end',
				'right',
				'right-start',
				'right-end',
				'bottom',
				'bottom-start',
				'bottom-end',
				'left',
				'left-start',
				'left-end'
			] as Array<TooltipPlacement>,
			control: { type: 'radio' }
		}
	}
} as TooltipStoryMeta;

export const Tooltip: TooltipStory = ({ isOpen, ...rest }: TooltipProps<PolymorphicDefaultElement>): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	return (
		<TooltipComponent {...rest} color={color} colorMode={colorMode}>
			<Button color={color} colorMode={colorMode}>
				Hover me
			</Button>
		</TooltipComponent>
	);
};
