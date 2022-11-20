import { FC, createContext, useCallback } from 'react';

import { useColorMode, useMediaQuery, Modal as CUIModal, ModalOverlay, ModalContent } from '@chakra-ui/react';

import { useTheme } from '../../../common/hooks';
import { getColor } from '../../../common/utils/color';
import { convertREMToPixels, convertStringToNumber } from '../../../common/utils';

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

	const handleCalculateWidth = useCallback((): string => {
		if (size !== 'full') {
			const spacingWidth = convertREMToPixels(convertStringToNumber(theme.space[spacing], 'rem'));

			return `calc(100% - ${spacingWidth * 2}px)`;
		} else {
			return '100%';
		}
	}, [theme, size, spacing]);

	const handleCalculateHeight = useCallback((): string => {
		if (size !== 'full') {
			const spacingWidth = convertREMToPixels(convertStringToNumber(theme.space[spacing], 'rem'));

			return `calc(100vh - ${spacingWidth * 2}px)`;
		} else {
			return '100vh';
		}
	}, [theme, size, spacing]);

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
					width={handleCalculateWidth()}
					maxHeight={handleCalculateHeight()}
					backgroundColor={getColor({ theme, colorMode, type: 'background' })}
					borderRadius={size === 'full' || isSm ? 'none' : 'xl'}
					m={0}
				>
					{children}
				</ModalContent>
			</ModalContext.Provider>
		</CUIModal>
	);
};

export default Modal;
