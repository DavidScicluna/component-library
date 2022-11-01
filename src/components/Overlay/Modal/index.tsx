import { FC, createContext } from 'react';

import { useColorMode, useMediaQuery, Modal as CUIModal, ModalOverlay, ModalContent } from '@chakra-ui/react';

import { useTheme } from '../../../common/hooks';
import { getColor } from '../../../common/utils/color';

import {
	colorMode as defaultColorMode,
	isOpen as defaultIsOpen,
	size as defaultSize,
	spacing as defaultSpacing
} from './common/data/defaultPropValues';
import { ModalContext as ModalContextType, ModalProps } from './types';

export const ModalContext = createContext<ModalContextType>({
	colorMode: 'light',
	onClose: () => undefined,
	size: defaultSize,
	spacing: defaultSpacing
});

const Modal: FC<ModalProps> = (props) => {
	const theme = useTheme();
	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	const [isSm] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

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
			size={size === 'full' || isSm ? 'full' : size}
		>
			<ModalContext.Provider value={{ colorMode, onClose, size, spacing }}>
				<ModalOverlay />

				<ModalContent
					height='100%'
					backgroundColor={getColor({ theme, colorMode, type: 'background' })}
					borderRadius={size === 'full' || isSm ? 'none' : 'xl'}
				>
					{children}
				</ModalContent>
			</ModalContext.Provider>
		</CUIModal>
	);
};

export default Modal;
