import { FC, createContext } from 'react';

import { useColorMode, Modal as CUIModal, ModalOverlay, ModalContent, VStack, Center } from '@chakra-ui/react';

import { useTheme } from '../../../common/hooks';
import { getColor } from '../../../common/utils/color';
import Divider from '../../Divider';

import { ConfirmModalContext as ConfirmModalContextType, ConfirmModalProps } from './types';
import {
	colorMode as defaultColorMode,
	isOpen as defaultIsOpen,
	size as defaultSize,
	spacing as defaultSpacing
} from './common/data/defaultPropValues';

export const ConfirmModalContext = createContext<ConfirmModalContextType>({
	colorMode: 'light',
	onClose: () => {
		return;
	},
	spacing: defaultSpacing
});

const ConfirmModal: FC<ConfirmModalProps> = (props) => {
	const theme = useTheme();
	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	const {
		children,
		colorMode = colorModeHook,
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
			scrollBehavior='inside'
			size={size}
		>
			<ConfirmModalContext.Provider value={{ colorMode, onClose, spacing }}>
				<ModalOverlay />
				<ModalContent
					position='relative'
					backgroundColor={getColor({ theme, colorMode, type: 'background' })}
					borderRadius='xl'
				>
					{renderCancel && (
						<Center position='absolute' top={theme.space[spacing]} right={theme.space[spacing]}>
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

					<VStack width='100%' divider={<Divider colorMode={colorMode} />} spacing={spacing} p={spacing * 2}>
						{children}
					</VStack>
				</ModalContent>
			</ConfirmModalContext.Provider>
		</CUIModal>
	);
};

export default ConfirmModal;
