import { sample } from 'lodash-es';

import { DEFAULT_SPACING } from '../../../../common/constants';
import { appColors } from '../../../../common/data';
import type { ThemeAppColor } from '../../../../common/types';
import React from 'react';
import { Button, CloseIconButton } from '../../../Buttons';

import { useStorybookContext } from '../../../Provider/components/StorybookProvider';

import {
	DEFAULT_CONFIRM_MODAL_CLOSE_ON_ESC,
	DEFAULT_CONFIRM_MODAL_CLOSE_ON_OVERLAY_CLICK,
	DEFAULT_CONFIRM_MODAL_HAS_BACKDROP,
	// DEFAULT_CONFIRM_MODAL_IS_OPEN,
	DEFAULT_CONFIRM_MODAL_SIZE
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

const DEFAULT_CONFIRM_MODAL_STORY_COLOR: ThemeAppColor = sample(appColors) || 'blue';

export default {
	title: 'Overlay/ConfirmModal',
	component: ConfirmModalComponent,
	argTypes: {
		closeOnEsc: {
			name: 'Close On Esc',
			type: 'boolean',
			defaultValue: DEFAULT_CONFIRM_MODAL_CLOSE_ON_ESC,
			// description: '',
			control: { type: 'boolean' }
		},
		closeOnOverlayClick: {
			name: 'Close On Overlay Click',
			type: 'boolean',
			defaultValue: DEFAULT_CONFIRM_MODAL_CLOSE_ON_OVERLAY_CLICK,
			// description: '',
			control: { type: 'boolean' }
		},
		hasBackdrop: {
			name: 'Backdrop',
			type: 'boolean',
			defaultValue: DEFAULT_CONFIRM_MODAL_HAS_BACKDROP,
			// description: '',
			control: { type: 'boolean' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: DEFAULT_CONFIRM_MODAL_SIZE,
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl'] as Array<ConfirmModalSize>,
			control: { type: 'radio' }
		},
		spacing: {
			name: 'Spacing (0-24 | .0, .25, .5 or .75)',
			type: 'number',
			defaultValue: DEFAULT_SPACING,
			// description: '',
			control: { type: 'number' }
		}
	}
} as ConfirmModalStoryMeta;

export const ConfirmModal: ConfirmModalStory = (props: ConfirmModalProps<ConfirmModalDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	return (
		<ConfirmModalComponent
			{...props}
			color={color}
			colorMode={colorMode}
			renderTrigger={({ onOpen }) => <Button onClick={onOpen}>click</Button>}
			renderCancel={(props) => <CloseIconButton {...props} />}
		>
			<ConfirmModalStack alignItems='center' justifyContent='center'>
				<ConfirmModalIcon
					color={!color ? DEFAULT_CONFIRM_MODAL_STORY_COLOR : color}
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
					renderCancel={(props) => <Button {...props}>cancel</Button>}
					renderAction={(props) => (
						<Button {...props} color={!color ? DEFAULT_CONFIRM_MODAL_STORY_COLOR : color}>
							action
						</Button>
					)}
					spacing={2}
				/>
			</ConfirmModalStack>
		</ConfirmModalComponent>
	);
};
