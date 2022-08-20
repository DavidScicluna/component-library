import { FC, createContext } from 'react';

import { useColorMode, useMediaQuery, Modal as CUIModal, ModalOverlay, ModalContent, VStack } from '@chakra-ui/react';

import { useTheme } from '../../../common/hooks';
import { getColor } from '../../../common/utils/color';
import Divider from '../../Divider';

import {
	colorMode as defaultColorMode,
	isOpen as defaultIsOpen,
	size as defaultSize,
	spacing as defaultSpacing
} from './common/data/defaultPropValues';
import { ModalContext as ModalContextType, ModalProps } from './types';

export const ModalContext = createContext<ModalContextType>({
	colorMode: 'light',
	onClose: () => {
		return;
	},
	spacing: defaultSpacing
});

const Modal: FC<ModalProps> = (props) => {
	const theme = useTheme();
	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	const [isXs] = useMediaQuery('(max-width: 600px)');

	const {
		children,
		colorMode = colorModeHook,
		isOpen = defaultIsOpen,
		onClose,
		size = defaultSize,
		spacing = defaultSpacing,
		...rest
	} = props;

	return (
		<CUIModal
			{...rest}
			isOpen={isOpen}
			onClose={onClose}
			isCentered
			motionPreset='slideInBottom'
			scrollBehavior='inside'
			size={size === 'full' || isXs ? 'full' : size}
		>
			<ModalContext.Provider value={{ colorMode, onClose, spacing }}>
				<ModalOverlay />
				<VStack
					as={ModalContent}
					width='100%'
					divider={<Divider colorMode={colorMode} />}
					backgroundColor={getColor({ theme, colorMode, type: 'background' })}
					borderRadius={size === 'full' || isXs ? 'none' : 'xl'}
					spacing={spacing}
					p={spacing}
				>
					{children}
				</VStack>
			</ModalContext.Provider>
		</CUIModal>
	);
};

export default Modal;
