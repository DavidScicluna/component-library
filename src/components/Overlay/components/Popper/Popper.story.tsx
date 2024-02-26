import { Button } from '../../../Buttons';
import React from 'react';
import { useStorybookContext } from '../../../Provider/components/StorybookProvider';

import {
	__DEFAULT_POPPER_CLOSE_DELAY__,
	__DEFAULT_POPPER_CLOSE_ON_CLICK_OUTSIDE__,
	__DEFAULT_POPPER_CLOSE_ON_ESC__,
	__DEFAULT_POPPER_GUTTER__,
	__DEFAULT_POPPER_IS_DISABLED__,
	__DEFAULT_POPPER_OPEN_DELAY__,
	__DEFAULT_POPPER_PLACEMENT__
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
			defaultValue: __DEFAULT_POPPER_CLOSE_DELAY__,
			// description: '',
			control: { type: 'number' }
		},
		openDelay: {
			name: 'Open Delay',
			type: 'number',
			defaultValue: __DEFAULT_POPPER_OPEN_DELAY__,
			// description: '',
			control: { type: 'number' }
		},
		closeOnClickOutside: {
			name: 'Close On Click Outside',
			type: 'boolean',
			defaultValue: __DEFAULT_POPPER_CLOSE_ON_CLICK_OUTSIDE__,
			// description: '',
			control: { type: 'boolean' }
		},
		closeOnEsc: {
			name: 'Close On Esc',
			type: 'boolean',
			defaultValue: __DEFAULT_POPPER_CLOSE_ON_ESC__,
			// description: '',
			control: { type: 'boolean' }
		},
		gutter: {
			name: 'Gutter',
			type: 'number',
			defaultValue: __DEFAULT_POPPER_GUTTER__,
			// description: '',
			control: { type: 'number' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: __DEFAULT_POPPER_IS_DISABLED__,
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
			defaultValue: __DEFAULT_POPPER_PLACEMENT__,
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
