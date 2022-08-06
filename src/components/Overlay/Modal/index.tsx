import { FC, createContext, useCallback, useEffect } from 'react';

import {
	useColorMode,
	useMediaQuery,
	useBoolean,
	Modal as CUIModal,
	ModalOverlay,
	ModalContent,
	VStack
} from '@chakra-ui/react';

import { useTimeout } from 'usehooks-ts';

import { useTheme } from '../../../common/hooks';
import { convertStringToNumber } from '../../../common/utils';
import { getHue } from '../../../common/utils/color';
import Divider from '../../Divider';

import { ModalContext as ModalContextType, ModalProps } from './types';
import {
	colorMode as defaultColorMode,
	isOpen as defaultIsOpen,
	size as defaultSize,
	spacing as defaultSpacing
} from './common/data/defaultPropValues';

export const ModalContext = createContext<ModalContextType>({ colorMode: 'light' });

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
				size={size === 'full' || isXs ? 'full' : size}
			>
				<ModalContext.Provider value={{ colorMode, spacing }}>
					<ModalOverlay />
					<ModalContent
						backgroundColor={`gray.${getHue({
							colorMode,
							type: colorMode === 'light' ? 'lightest' : 'darkest'
						})}`}
						borderRadius={size === 'full' || isXs ? 'none' : 'xl'}
					>
						<VStack
							width='100%'
							divider={<Divider colorMode={colorMode} />}
							spacing={spacing}
							overflowX='hidden'
							overflowY='auto'
							p={spacing}
						>
							{children}
						</VStack>
					</ModalContent>
				</ModalContext.Provider>
			</CUIModal>
		)) ||
		null
	);
};

export default Modal;
