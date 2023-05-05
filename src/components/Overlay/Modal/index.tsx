import { createContext, FC, useMemo } from 'react';

import { Modal as CUIModal, ModalContent, ModalOverlay, useMediaQuery } from '@chakra-ui/react';

import { useWindowSize } from 'rooks';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	method as defaultOnClose
} from '../../../common/default/props';
import { useTheme } from '../../../common/hooks';
import { convertREMToPixels, convertStringToNumber } from '../../../common/utils';
import { getColor } from '../../../common/utils/color';
import { useProviderContext } from '../../Provider/common/hooks';

import { isOpen as defaultIsOpen, size as defaultSize, spacing as defaultSpacing } from './common/default/props';
import { ModalContext as ModalContextType, ModalProps } from './common/types';

export const ModalContext = createContext<ModalContextType>({
	color: defaultColor,
	colorMode: defaultColorMode,
	onClose: defaultOnClose,
	size: defaultSize,
	spacing: defaultSpacing
});

const Modal: FC<ModalProps> = (props) => {
	const theme = useTheme();

	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const [isSm] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	const { innerHeight: windowHeight } = useWindowSize();

	const {
		children,
		color = defaultColor,
		colorMode = defaultColorMode,
		isOpen = defaultIsOpen,
		onClose,
		size = defaultSize,
		spacing = defaultSpacing,
		...rest
	} = props;

	const width = useMemo((): string => {
		if (size === 'full' || isSm) {
			return '100%';
		} else {
			const spacingWidth = convertREMToPixels(convertStringToNumber(theme.space[spacing], 'rem'));
			return `calc(100% - ${spacingWidth * 2}px)`;
		}
	}, [isSm, size, spacing]);

	const height = useMemo((): string => {
		const height = windowHeight ? `${windowHeight}px` : '100vh';

		if (size === 'full' || isSm) {
			return height;
		} else {
			const spacingWidth = convertREMToPixels(convertStringToNumber(theme.space[spacing], 'rem'));
			return `calc(${height} - ${spacingWidth * 2}px)`;
		}
	}, [isSm, size, spacing]);

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
			<ModalContext.Provider value={{ color, colorMode, onClose, size, spacing }}>
				<ModalOverlay />

				<ModalContent
					width={width}
					maxHeight={height}
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
