import { Button } from '../../../Buttons';
import React from 'react';
import { useStorybookContext } from '../../../Provider/components/StorybookProvider';

import {
	DEFAULT_POPPER_CLOSE_DELAY,
	DEFAULT_POPPER_CLOSE_ON_CLICK_OUTSIDE,
	DEFAULT_POPPER_CLOSE_ON_ESC,
	DEFAULT_POPPER_GUTTER,
	DEFAULT_POPPER_IS_DISABLED,
	DEFAULT_POPPER_OPEN_DELAY,
	DEFAULT_POPPER_PLACEMENT
} from './common/constants';
import type { PopperPlacement, PopperProps } from './common/types';
import type { PopperStory, PopperStoryMeta } from './common/types/story';
import { Popper as PopperComponent } from '.';
import { PolymorphicDefaultElement } from '../../../../common/types';

export default {
	title: 'Overlay/Popper',
	component: PopperComponent,
	argTypes: {
		closeDelay: {
			name: 'Close Delay',
			type: 'number',
			defaultValue: DEFAULT_POPPER_CLOSE_DELAY,
			// description: '',
			control: { type: 'number' }
		},
		openDelay: {
			name: 'Open Delay',
			type: 'number',
			defaultValue: DEFAULT_POPPER_OPEN_DELAY,
			// description: '',
			control: { type: 'number' }
		},
		closeOnClickOutside: {
			name: 'Close On Click Outside',
			type: 'boolean',
			defaultValue: DEFAULT_POPPER_CLOSE_ON_CLICK_OUTSIDE,
			// description: '',
			control: { type: 'boolean' }
		},
		closeOnEsc: {
			name: 'Close On Esc',
			type: 'boolean',
			defaultValue: DEFAULT_POPPER_CLOSE_ON_ESC,
			// description: '',
			control: { type: 'boolean' }
		},
		gutter: {
			name: 'Gutter',
			type: 'number',
			defaultValue: DEFAULT_POPPER_GUTTER,
			// description: '',
			control: { type: 'number' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: DEFAULT_POPPER_IS_DISABLED,
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
			defaultValue: DEFAULT_POPPER_PLACEMENT,
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
			] as Array<PopperPlacement>,
			control: { type: 'radio' }
		}
	}
} as PopperStoryMeta;

export const Popper: PopperStory = (props: PopperProps<PolymorphicDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	return (
		<PopperComponent {...props} color={color} colorMode={colorMode}>
			<Button color={color} colorMode={colorMode}>
				Hover me
			</Button>
		</PopperComponent>
	);
};
