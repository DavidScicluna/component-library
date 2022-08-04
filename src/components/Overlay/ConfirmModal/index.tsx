import { FC, createContext, useCallback, useEffect } from 'react';

import {
	useColorMode,
	// useMediaQuery,
	useBoolean,
	Modal as CUIModal,
	ModalOverlay,
	ModalContent,
	VStack,
	Center
} from '@chakra-ui/react';

import { useTimeout } from 'usehooks-ts';

import { useTheme } from '../../../common/hooks';
import { convertStringToNumber } from '../../../common/utils';
import { getHue } from '../../../common/utils/color';
import Divider from '../../Divider';

import { ConfirmModalContext as ConfirmModalContextType, ConfirmModalProps } from './types';
import {
	colorMode as defaultColorMode,
	isOpen as defaultIsOpen,
	size as defaultSize,
	spacing as defaultSpacing
} from './common/data/defaultPropValues';

export const ConfirmModalContext = createContext<ConfirmModalContextType>({ colorMode: 'light' });

const ConfirmModal: FC<ConfirmModalProps> = (props) => {
	const theme = useTheme();
	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	// const [isXs] = useMediaQuery('(max-width: 600px)');

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

	const [isMounted, setIsMounted] = useBoolean();

	const handleCheckIsMounted = useCallback(() => {
		if (isOpen) {
			setIsMounted.on();
		}
	}, [isOpen]);

	useTimeout(
		() => setIsMounted.off(),
		!isOpen ? convertStringToNumber(theme.transition.duration.faster, 'ms') : null
	);

	useEffect(() => handleCheckIsMounted(), [isOpen]);

	return (
		(isMounted && (
			<CUIModal
				{...rest}
				isOpen={isOpen}
				onClose={onClose}
				isCentered
				motionPreset='slideInBottom'
				scrollBehavior='inside'
				size={size}
			>
				<ConfirmModalContext.Provider value={{ colorMode, spacing }}>
					<ModalOverlay />
					<ModalContent
						position='relative'
						backgroundColor={`gray.${getHue({
							colorMode,
							type: colorMode === 'light' ? 'lightest' : 'darkest'
						})}`}
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

						<VStack
							width='100%'
							divider={<Divider colorMode={colorMode} />}
							spacing={spacing}
							p={spacing * 2}
						>
							{children}
						</VStack>
					</ModalContent>
				</ConfirmModalContext.Provider>
			</CUIModal>
		)) ||
		null
	);
};

export default ConfirmModal;
