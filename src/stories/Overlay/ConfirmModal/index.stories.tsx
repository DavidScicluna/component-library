import { ReactElement } from 'react';

import { Box } from '@chakra-ui/react';

import {
	ConfirmModal as ConfirmModalComponent,
	ConfirmModalBody,
	ConfirmModalFooter,
	ConfirmModalProps,
	ConfirmModalSubtitle,
	ConfirmModalTitle
} from '../../..';
import {
	isOpen as defaultIsOpen,
	size as defaultSize,
	spacing as defaultSpacing
} from '../../../components/Overlay/ConfirmModal/common/data/defaultPropValues';
import { ConfirmModalSize } from '../../../components/Overlay/ConfirmModal/types';
import controls from '../../common/controls';
import parameters from '../../common/parameters';

import { Meta, Story } from './types';

const sizeOptions: ConfirmModalSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

export default {
	title: 'Overlay/Confirm Modal',
	component: ConfirmModalComponent,
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

export const ConfirmModal: Story = (props: ConfirmModalProps): ReactElement => (
	<ConfirmModalComponent
		{...props}
		renderCancel={() => <Box width='30px' height='30px' backgroundColor='yellow.300' borderRadius='xs' />}
	>
		<ConfirmModalBody>
			<ConfirmModalTitle align='center'>Confirm Modal Title</ConfirmModalTitle>
			<ConfirmModalSubtitle align='center'>This is the Confirm Modal description!</ConfirmModalSubtitle>
		</ConfirmModalBody>
		<ConfirmModalFooter
			renderCancel={() => <Box flex={1} height='42px' backgroundColor='red.500' borderRadius='base' />}
			renderAction={() => <Box flex={1} height='42px' backgroundColor='red.600' borderRadius='base' />}
		/>
	</ConfirmModalComponent>
);
