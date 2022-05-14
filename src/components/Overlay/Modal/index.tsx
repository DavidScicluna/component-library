import { ReactElement, createContext, useCallback, useEffect } from 'react';

import {
	ColorMode,
	useColorMode,
	useMediaQuery,
	useBoolean,
	Modal as CUIModal,
	ModalOverlay,
	ModalContent,
	VStack
} from '@chakra-ui/react';

import { useTimeout } from 'usehooks-ts';

import {
	isOpen as defaultIsOpen,
	size as defaultSize,
	spacing as defaultSpacing
} from './common/data/defaultPropValues';
import { ModalContext as ModalContextType, ModalProps } from './types';

import { useTheme } from '../../../common/hooks';
import { convertStringToNumber } from '../../../common/utils';
import { getHue } from '../../../common/utils/color';
import Divider from '../../Divider';

export const ModalContext = createContext<ModalContextType>({ colorMode: 'light' });

const Modal = (props: ModalProps): ReactElement | null => {
	const theme = useTheme();
	const { colorMode: colorModeHook } = useColorMode();

	const [isXs] = useMediaQuery('(max-width: 600px)');

	const {
		children,
		colorMode: colorModeProp,
		isOpen = defaultIsOpen,
		onClose,
		size = defaultSize,
		spacing = defaultSpacing,
		...rest
	} = props;

	const [isMounted, setIsMounted] = useBoolean();

	const colorMode: ColorMode = colorModeProp || colorModeHook;

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
		isMounted && (
			<CUIModal
				{...rest}
				isOpen={isOpen}
				onClose={onClose}
				isCentered
				motionPreset='slideInBottom'
				scrollBehavior='inside'
				size={size === 'full' || isXs ? 'full' : size}
			>
				<ModalOverlay />
				<ModalContent
					backgroundColor={`gray.${getHue({ colorMode, type: colorMode === 'light' ? 'white' : 'black' })}`}
					borderRadius={size === 'full' || isXs ? 'none' : 'xl'}
					m={isXs ? 2 : 0}
					sx={{ transition: `${theme.transition.duration.faster} ${theme.transition.easing['ease-out']}` }}
				>
					<ModalContext.Provider value={{ colorMode }}>
						<VStack width='100%' divider={<Divider colorMode={colorMode} />} spacing={spacing}>
							{children}
						</VStack>
					</ModalContext.Provider>
				</ModalContent>
			</CUIModal>
		)
	);
};

export default Modal;
