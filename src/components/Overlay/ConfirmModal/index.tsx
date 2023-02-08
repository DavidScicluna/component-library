import { FC, createContext } from 'react';

import { useColorMode, Modal as CUIModal, ModalOverlay, ModalContent, Center } from '@chakra-ui/react';

import { method as defaultOnClose } from '../../../common/data/defaultPropValues';
import { useTheme } from '../../../common/hooks';
import { getColor } from '../../../common/utils/color';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isOpen as defaultIsOpen,
	size as defaultSize
} from './common/data/defaultPropValues';
import { ConfirmModalContext as ConfirmModalContextType, ConfirmModalProps } from './types';

export const ConfirmModalContext = createContext<ConfirmModalContextType>({
	color: defaultColor,
	colorMode: defaultColorMode,
	onClose: defaultOnClose
});

const ConfirmModal: FC<ConfirmModalProps> = (props) => {
	const theme = useTheme();
	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	const {
		children,
		color = defaultColor,
		colorMode = colorModeHook,
		isOpen = defaultIsOpen,
		onClose,
		renderCancel,
		size = defaultSize,
		...rest
	} = props;

	return (
		<CUIModal
			{...rest}
			isOpen={isOpen}
			onClose={onClose}
			isCentered
			motionPreset='slideInBottom'
			scrollBehavior='outside'
			size={size}
		>
			<ConfirmModalContext.Provider value={{ color, colorMode, onClose }}>
				<ModalOverlay />
				<ModalContent
					position='relative'
					backgroundColor={getColor({ theme, colorMode, type: 'background' })}
					borderRadius='xl'
				>
					{renderCancel && (
						<Center position='absolute' top={theme.space[2]} right={theme.space[2]}>
							{renderCancel({
								'aria-label': 'Close modal?',
								'color': 'gray',
								'colorMode': colorMode,
								'icon': 'close',
								'category': 'outlined',
								'onClick': () => onClose(),
								'variant': 'icon'
							})}
						</Center>
					)}

					{children}
				</ModalContent>
			</ConfirmModalContext.Provider>
		</CUIModal>
	);
};

export default ConfirmModal;
