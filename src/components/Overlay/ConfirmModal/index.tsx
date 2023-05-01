import { createContext, FC } from 'react';

import { Center, Modal as CUIModal, ModalContent, ModalOverlay } from '@chakra-ui/react';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	method as defaultOnClose
} from '../../../common/default/props';
import { useProviderContext, useTheme } from '../../../common/hooks';
import { getColor } from '../../../common/utils/color';

import { isOpen as defaultIsOpen, size as defaultSize, spacing as defaultSpacing } from './common/default/props';
import { ConfirmModalContext as ConfirmModalContextType, ConfirmModalProps } from './common/types';

export const ConfirmModalContext = createContext<ConfirmModalContextType>({
	color: defaultColor,
	colorMode: defaultColorMode,
	onClose: defaultOnClose,
	spacing: defaultSpacing
});

const ConfirmModal: FC<ConfirmModalProps> = (props) => {
	const theme = useTheme();

	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const {
		children,
		color = defaultColor,
		colorMode = defaultColorMode,
		isOpen = defaultIsOpen,
		onClose,
		renderCancel,
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
			scrollBehavior='outside'
			size={size}
		>
			<ConfirmModalContext.Provider value={{ color, colorMode, onClose, spacing }}>
				<ModalOverlay />
				<ModalContent
					position='relative'
					backgroundColor={getColor({ theme, colorMode, type: 'background' })}
					borderRadius='xl'
				>
					{renderCancel && (
						<Center position='absolute' top={theme.space[2]} right={theme.space[2]}>
							{renderCancel({
								'aria-label': 'Close Modal',
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
