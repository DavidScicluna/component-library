import type { ReactElement } from 'react';

import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetColor } from '@common/hooks';

import { Text } from '@components/Typography';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../.storybook/preview';

import {
	__DEFAULT_MODAL_CLOSE_ON_ESC__,
	__DEFAULT_MODAL_CLOSE_ON_OVERLAY_CLICK__,
	__DEFAULT_MODAL_HAS_BACKDROP__,
	// __DEFAULT_MODAL_IS_OPEN__,
	__DEFAULT_MODAL_SIZE__
} from './common/constants';
import type { ModalDefaultElement, ModalProps, ModalSize } from './common/types';
import type { ModalStory, ModalStoryMeta } from './common/types/story';
import { Modal as ModalComponent, ModalBody, ModalFooter, ModalHeader, ModalStack, ModalSubtitle, ModalTitle } from '.';

export default {
	title: 'Overlay/Modal',
	component: ModalComponent,
	argTypes: {
		closeOnEsc: {
			name: 'Close On Esc',
			type: 'boolean',
			defaultValue: __DEFAULT_MODAL_CLOSE_ON_ESC__,
			// description: '',
			control: { type: 'boolean' }
		},
		closeOnOverlayClick: {
			name: 'Close On Overlay Click',
			type: 'boolean',
			defaultValue: __DEFAULT_MODAL_CLOSE_ON_OVERLAY_CLICK__,
			// description: '',
			control: { type: 'boolean' }
		},
		hasBackdrop: {
			name: 'Backdrop',
			type: 'boolean',
			defaultValue: __DEFAULT_MODAL_HAS_BACKDROP__,
			// description: '',
			control: { type: 'boolean' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: __DEFAULT_MODAL_SIZE__,
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', 'full'] as ModalSize[],
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
} as ModalStoryMeta;

// TODO: Convert button to our own Buttons
export const Modal: ModalStory = (props: ModalProps<ModalDefaultElement>): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	const text = useGetColor({ colorType: 'default', hueType: 'text.primary', classType: 'text' });

	return (
		<ModalComponent
			{...props}
			color={color}
			colorMode={colorMode}
			renderTrigger={({ onOpen }) => <button onClick={onOpen}>click</button>}
		>
			<ModalStack>
				<ModalHeader
					renderTitle={() => <ModalTitle>Modal Title</ModalTitle>}
					renderSubtitle={() => <ModalSubtitle>Modal Subtitle</ModalSubtitle>}
				/>
				<ModalBody p={4}>
					<Text align='center' color={text}>
						Hello
					</Text>
				</ModalBody>
				<ModalFooter
					renderCancel={(props) => <button {...props}>cancel</button>}
					renderAction={(props) => <button {...props}>action</button>}
				/>
			</ModalStack>
		</ModalComponent>
	);
};
