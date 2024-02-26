import { Button } from '../../../Buttons';
import React from 'react';
import { useStorybookContext } from '../../../Provider/components/StorybookProvider';

import {
	DEFAULT_TOOLTIP_CLOSE_DELAY,
	DEFAULT_TOOLTIP_CLOSE_ON_CLICK,
	DEFAULT_TOOLTIP_CLOSE_ON_ESC,
	DEFAULT_TOOLTIP_GUTTER,
	DEFAULT_TOOLTIP_IS_DISABLED,
	DEFAULT_TOOLTIP_OPEN_DELAY,
	DEFAULT_TOOLTIP_PLACEMENT
} from './common/constants';
import type { TooltipPlacement, TooltipProps } from './common/types';
import type { TooltipStory, TooltipStoryMeta } from './common/types/story';
import { Tooltip as TooltipComponent } from '.';
import { PolymorphicDefaultElement } from '../../../../common/types';

export default {
	title: 'Overlay/Tooltip',
	component: TooltipComponent,
	argTypes: {
		closeDelay: {
			name: 'Close Delay',
			type: 'number',
			defaultValue: DEFAULT_TOOLTIP_CLOSE_DELAY,
			// description: '',
			control: { type: 'number' }
		},
		openDelay: {
			name: 'Open Delay',
			type: 'number',
			defaultValue: DEFAULT_TOOLTIP_OPEN_DELAY,
			// description: '',
			control: { type: 'number' }
		},
		closeOnClick: {
			name: 'Close On Click',
			type: 'boolean',
			defaultValue: DEFAULT_TOOLTIP_CLOSE_ON_CLICK,
			// description: '',
			control: { type: 'boolean' }
		},
		closeOnEsc: {
			name: 'Close On Esc',
			type: 'boolean',
			defaultValue: DEFAULT_TOOLTIP_CLOSE_ON_ESC,
			// description: '',
			control: { type: 'boolean' }
		},
		gutter: {
			name: 'Gutter',
			type: 'number',
			defaultValue: DEFAULT_TOOLTIP_GUTTER,
			// description: '',
			control: { type: 'number' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: DEFAULT_TOOLTIP_IS_DISABLED,
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
			defaultValue: DEFAULT_TOOLTIP_PLACEMENT,
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

export const Tooltip: TooltipStory = (props: TooltipProps<PolymorphicDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	return (
		<TooltipComponent {...props} color={color} colorMode={colorMode}>
			<Button color={color} colorMode={colorMode}>
				Hover me
			</Button>
		</TooltipComponent>
	);
};
