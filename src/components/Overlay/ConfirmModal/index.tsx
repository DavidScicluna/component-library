import { createContext, FC, useMemo } from 'react';

import { Center, Modal as CUIModal, ModalContent } from '@chakra-ui/react';

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
import { ConfirmModalContext as ConfirmModalContextType, ConfirmModalProps } from './common/types';
import ConfirmModalBackdrop from './components/ConfirmModalBackdrop';

export const ConfirmModalContext = createContext<ConfirmModalContextType>({
	color: defaultColor,
	colorMode: defaultColorMode,
	isOpen: defaultIsOpen,
	onClose: defaultOnClose,
	size: defaultSize,
	spacing: defaultSpacing
});

const ConfirmModal: FC<ConfirmModalProps> = (props) => {
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
		renderCancel,
		size = defaultSize,
		spacing = defaultSpacing,
		...rest
	} = props;

	const background = useGetColor({ color: 'gray', colorMode, type: 'background' });

	const width = useMemo((): string => {
		const spacingWidth = convertREMToPixels(convertStringToNumber(theme.space[spacing], 'rem'));
		return `calc(100% - ${spacingWidth * 2}px)`;
	}, [size, spacing]);

	const height = useMemo((): string => {
		const height = windowHeight ? `${windowHeight}px` : '100vh';
		const spacingWidth = convertREMToPixels(convertStringToNumber(theme.space[spacing], 'rem'));

		return `calc(${height} - ${spacingWidth * 2}px)`;
	}, [size, spacing]);

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
			<ConfirmModalContext.Provider value={{ color, colorMode, isOpen, onClose, size, spacing }}>
				{hasBackdrop && renderBackdrop ? (
					renderBackdrop({ color, colorMode })
				) : hasBackdrop ? (
					<ConfirmModalBackdrop />
				) : null}

				<ModalContent
					width={width}
					maxHeight={height}
					position='relative'
					backgroundColor={background}
					borderRadius='xl'
					m={0}
				>
					{renderCancel ? (
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
					) : null}

					{children}
				</ModalContent>
			</ConfirmModalContext.Provider>
		</CUIModal>
	);
};

export default ConfirmModal;
