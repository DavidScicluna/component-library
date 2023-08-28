import type { ReactElement } from 'react';

import { sample } from 'lodash-es';

import { __DEFAULT_SPACING__ } from '@common/constants';
import { colors } from '@common/data';
import type { ThemeAppColor } from '@common/types';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../../.storybook/preview';

import {
	__DEFAULT_CONFIRM_MODAL_CLOSE_ON_ESC__,
	__DEFAULT_CONFIRM_MODAL_CLOSE_ON_OVERLAY_CLICK__,
	__DEFAULT_CONFIRM_MODAL_HAS_BACKDROP__,
	// __DEFAULT_CONFIRM_MODAL_IS_OPEN__,
	__DEFAULT_CONFIRM_MODAL_SIZE__
} from './common/constants';
import type { ConfirmModalDefaultElement, ConfirmModalProps, ConfirmModalSize } from './common/types';
import type { ConfirmModalStory, ConfirmModalStoryMeta } from './common/types/story';
import {
	ConfirmModal as ConfirmModalComponent,
	ConfirmModalActions,
	ConfirmModalBody,
	ConfirmModalIcon,
	ConfirmModalStack,
	ConfirmModalSubtitle,
	ConfirmModalTitle
} from '.';

const __DEFAULT_CONFIRM_MODAL_STORY_COLOR__: ThemeAppColor = sample(colors) || 'blue';

export default {
	title: 'Overlay/ConfirmModal',
	component: ConfirmModalComponent,
	argTypes: {
		closeOnEsc: {
			name: 'Close On Esc',
			type: 'boolean',
			defaultValue: __DEFAULT_CONFIRM_MODAL_CLOSE_ON_ESC__,
			// description: '',
			control: { type: 'boolean' }
		},
		closeOnOverlayClick: {
			name: 'Close On Overlay Click',
			type: 'boolean',
			defaultValue: __DEFAULT_CONFIRM_MODAL_CLOSE_ON_OVERLAY_CLICK__,
			// description: '',
			control: { type: 'boolean' }
		},
		hasBackdrop: {
			name: 'Backdrop',
			type: 'boolean',
			defaultValue: __DEFAULT_CONFIRM_MODAL_HAS_BACKDROP__,
			// description: '',
			control: { type: 'boolean' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: __DEFAULT_CONFIRM_MODAL_SIZE__,
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl'] as Array<ConfirmModalSize>,
			control: { type: 'radio' }
		},
		spacing: {
			name: 'Spacing (0-24 | .0, .25, .5 or .75)',
			type: 'number',
			defaultValue: __DEFAULT_SPACING__,
			// description: '',
			control: { type: 'number' }
		}
	}
} as ConfirmModalStoryMeta;

// TODO: Convert button to our own Buttons
export const ConfirmModal: ConfirmModalStory = (props: ConfirmModalProps<ConfirmModalDefaultElement>): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	return (
		<ConfirmModalComponent
			{...props}
			color={color}
			colorMode={colorMode}
			renderTrigger={({ onOpen }) => <button onClick={onOpen}>click</button>}
		>
			<ConfirmModalStack alignItems='center' justifyContent='center'>
				<ConfirmModalIcon
					color={!color ? __DEFAULT_CONFIRM_MODAL_STORY_COLOR__ : color}
					icon='check'
					size='4xl'
					variant='contained'
					p={2}
				/>
				<ConfirmModalBody>
					<ConfirmModalTitle>ConfirmModal Title</ConfirmModalTitle>
					<ConfirmModalSubtitle>ConfirmModal Subtitle</ConfirmModalSubtitle>
				</ConfirmModalBody>
				<ConfirmModalActions
					renderCancel={(props) => <button {...props}>cancel</button>}
					renderAction={(props) => <button {...props}>action</button>}
				/>
			</ConfirmModalStack>
		</ConfirmModalComponent>
	);
};
