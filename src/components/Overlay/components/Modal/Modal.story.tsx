import { sample } from 'lodash-es';

import { DEFAULT_SPACING } from '../../../../common/constants';
import { appColors } from '../../../../common/data';
import { useGetColor } from '../../../../common/hooks';
import type { ThemeAppColor } from '../../../../common/types';
import React from 'react';
import { Button, CloseIconButton } from '../../..//Buttons';
import { Text } from '../../..//Typography';

import { useStorybookContext } from '../../..//Provider/components/StorybookProvider';

import {
	DEFAULT_MODAL_CLOSE_ON_ESC,
	DEFAULT_MODAL_CLOSE_ON_OVERLAY_CLICK,
	DEFAULT_MODAL_HAS_BACKDROP,
	// DEFAULT_MODAL_IS_OPEN,
	DEFAULT_MODAL_SIZE
} from './common/constants';
import type { ModalDefaultElement, ModalProps, ModalSize } from './common/types';
import type { ModalStory, ModalStoryMeta } from './common/types/story';
import { Modal as ModalComponent, ModalBody, ModalFooter, ModalHeader, ModalStack, ModalSubtitle, ModalTitle } from '.';

const DEFAULT_MODAL_STORY_COLOR: ThemeAppColor = sample(appColors) || 'blue';

export default {
	title: 'Overlay/Modal',
	component: ModalComponent,
	argTypes: {
		closeOnEsc: {
			name: 'Close On Esc',
			type: 'boolean',
			defaultValue: DEFAULT_MODAL_CLOSE_ON_ESC,
			// description: '',
			control: { type: 'boolean' }
		},
		closeOnOverlayClick: {
			name: 'Close On Overlay Click',
			type: 'boolean',
			defaultValue: DEFAULT_MODAL_CLOSE_ON_OVERLAY_CLICK,
			// description: '',
			control: { type: 'boolean' }
		},
		hasBackdrop: {
			name: 'Backdrop',
			type: 'boolean',
			defaultValue: DEFAULT_MODAL_HAS_BACKDROP,
			// description: '',
			control: { type: 'boolean' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: DEFAULT_MODAL_SIZE,
			// description: '',
			options: [
				'xs',
				'sm',
				'md',
				'lg',
				'xl',
				'2xl',
				'3xl',
				'4xl',
				'5xl',
				'6xl',
				'7xl',
				'full'
			] as Array<ModalSize>,
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
} as ModalStoryMeta;

export const Modal: ModalStory = (props: ModalProps<ModalDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'text.primary', classType: 'text' });

	return (
		<ModalComponent
			{...props}
			color={color}
			colorMode={colorMode}
			renderTrigger={({ onOpen }) => <Button onClick={onOpen}>click</Button>}
		>
			<ModalStack>
				<ModalHeader
					renderTitle={() => <ModalTitle>Modal Title</ModalTitle>}
					renderSubtitle={() => <ModalSubtitle>Modal Subtitle</ModalSubtitle>}
					renderCancel={(props) => <CloseIconButton {...props} />}
				/>
				<ModalBody p={4}>
					<Text align='center' color={text}>
						Hello
					</Text>
				</ModalBody>
				<ModalFooter
					renderCancel={(props) => <Button {...props}>cancel</Button>}
					renderAction={(props) => (
						<Button {...props} color={!color ? DEFAULT_MODAL_STORY_COLOR : color}>
							action
						</Button>
					)}
				/>
			</ModalStack>
		</ModalComponent>
	);
};
