import { createContext, FC, useMemo } from 'react';

import { Modal as CUIModal, ModalContent } from '@chakra-ui/react';

import { useWindowSize } from 'rooks';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	method as defaultOnClose
} from '../../../common/default/props';
import { useGetColor, useTheme } from '../../../common/hooks';
import { convertREMToPixels, convertStringToNumber } from '../../../common/utils';
import { useProviderContext } from '../../Provider/common/hooks';

import {
	hasBackdrop as defaultHasBackdrop,
	isOpen as defaultIsOpen,
	size as defaultSize,
	spacing as defaultSpacing
} from './common/default/props';
import { ModalContext as ModalContextType, ModalProps } from './common/types';
import ModalBackdrop from './components/ModalBackdrop';

export const ModalContext = createContext<ModalContextType>({
	color: defaultColor,
	colorMode: defaultColorMode,
	isOpen: defaultIsOpen,
	onClose: defaultOnClose,
	size: defaultSize,
	spacing: defaultSpacing
});

const Modal: FC<ModalProps> = (props) => {
	const theme = useTheme();

	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const { innerHeight: windowHeight } = useWindowSize();

	const {
		children,
		color = defaultColor,
		colorMode = defaultColorMode,
		isOpen = defaultIsOpen,
		hasBackdrop = defaultHasBackdrop,
		onClose,
		renderBackdrop,
		size = defaultSize,
		spacing = defaultSpacing,
		...rest
	} = props;

	const background = useGetColor({ color: 'gray', colorMode, type: 'background' });

	const width = useMemo((): string => {
		if (size === 'full') {
			return '100%';
		} else {
			const spacingWidth = convertREMToPixels(convertStringToNumber(theme.space[spacing], 'rem'));
			return `calc(100% - ${spacingWidth * 2}px)`;
		}
	}, [size, spacing]);

	const height = useMemo((): string => {
		const height = windowHeight ? `${windowHeight}px` : '100vh';

		if (size === 'full') {
			return height;
		} else {
			const spacingWidth = convertREMToPixels(convertStringToNumber(theme.space[spacing], 'rem'));
			return `calc(${height} - ${spacingWidth * 2}px)`;
		}
	}, [size, spacing]);

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
			<ModalContext.Provider value={{ color, colorMode, isOpen, onClose, size, spacing }}>
				{hasBackdrop && renderBackdrop ? (
					renderBackdrop({ color, colorMode })
				) : hasBackdrop ? (
					<ModalBackdrop />
				) : null}

				<ModalContent
					width={width}
					maxHeight={height}
					backgroundColor={background}
					borderRadius={size === 'full' ? 'none' : 'xl'}
					m={0}
				>
					{children}
				</ModalContent>
			</ModalContext.Provider>
		</CUIModal>
	);
};

export default Modal;
