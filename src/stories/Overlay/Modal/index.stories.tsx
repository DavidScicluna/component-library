import { ReactElement } from 'react';

import { Box, Text } from '@chakra-ui/react';

import { Modal as ModalComponent, ModalProps, ModalBody, ModalFooter, ModalHeader } from '../../..';
import {
	isOpen as defaultIsOpen,
	size as defaultSize,
	spacing as defaultSpacing
} from '../../../components/Overlay/Modal/common/data/defaultPropValues';
import { ModalSize } from '../../../components/Overlay/Modal/types';
import controls from '../../common/controls';
import parameters from '../../common/parameters';

import { Meta, Story } from './types';

const sizeOptions: ModalSize[] = ['full', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'];

export default {
	title: 'Overlay/Modal',
	component: ModalComponent,
	argTypes: {
		colorMode: { ...controls.theme.colorMode },
		isOpen: {
			name: 'Open',
			type: 'boolean',
			defaultValue: defaultIsOpen,
			// description: '',
			control: 'boolean'
		},
		size: {
			name: 'Size',
			type: 'boolean',
			defaultValue: defaultSize,
			// description: '',
			options: [...sizeOptions],
			control: 'select'
		},
		spacing: { ...controls.theme.spacing, defaultValue: defaultSpacing }
	},
	parameters: { backgrounds: { ...parameters.backgrounds } }
} as Meta;

export const Modal: Story = (props: ModalProps): ReactElement => (
	<ModalComponent {...props}>
		<ModalHeader
			renderTitle={(props) => <Text {...props}>Title</Text>}
			renderSubtitle={(props) => <Text {...props}>Subtitle</Text>}
			renderCancel={() => <Box width='42px' height='42px' backgroundColor='red.300' borderRadius='base' />}
		/>
		<ModalBody>
			<Box width='100%' p={4} backgroundColor='red.400' borderRadius='base' />
		</ModalBody>
		<ModalFooter
			renderCancel={() => <Box width='87.7px' height='42px' backgroundColor='red.500' borderRadius='base' />}
			renderAction={() => <Box width='87.7px' height='42px' backgroundColor='red.600' borderRadius='base' />}
		/>
	</ModalComponent>
);
