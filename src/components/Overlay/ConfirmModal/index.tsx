import { FC, createContext, useCallback, useEffect } from 'react';

import {
	ColorMode,
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

import {
	isOpen as defaultIsOpen,
	size as defaultSize,
	spacing as defaultSpacing
} from './common/data/defaultPropValues';
import { ConfirmModalContext as ConfirmModalContextType, ConfirmModalProps } from './types';

import { useTheme } from '../../../common/hooks';
import { convertStringToNumber } from '../../../common/utils';
import { getHue } from '../../../common/utils/color';
import Divider from '../../Divider';

export const ConfirmModalContext = createContext<ConfirmModalContextType>({ colorMode: 'light' });

const ConfirmModal: FC<ConfirmModalProps> = (props) => {
	const theme = useTheme();
	const { colorMode: colorModeHook } = useColorMode();

	// const [isXs] = useMediaQuery('(max-width: 600px)');

	const {
		children,
		colorMode: colorModeProp,
		isOpen = defaultIsOpen,
		onClose,
		renderCancel,
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

	return isMounted ? (
		<CUIModal
			{...rest}
			isOpen={isOpen}
			onClose={onClose}
			isCentered
			motionPreset='slideInBottom'
			scrollBehavior='inside'
			size={size}
		>
			<ModalOverlay />
			<ModalContent
				position='relative'
				backgroundColor={`gray.${getHue({ colorMode, type: colorMode === 'light' ? 'lightest' : 'darkest' })}`}
				borderRadius='xl'
				// m={isXs ? 2 : 0}
				sx={{ transition: `${theme.transition.duration.faster} ${theme.transition.easing['ease-out']}` }}
			>
				<ConfirmModalContext.Provider value={{ colorMode }}>
					{renderCancel && (
						<Center position='absolute' top={theme.space[spacing]} right={theme.space[spacing]}>
							{renderCancel({
								'aria-label': 'Close modal?',
								'color': 'gray',
								'colorMode': colorMode,
								'icon': 'close',
								'type': 'outlined',
								'onClick': () => onClose(),
								'variant': 'icon'
							})}
						</Center>
					)}

					<VStack width='100%' divider={<Divider colorMode={colorMode} />} spacing={spacing}>
						{children}
					</VStack>
				</ConfirmModalContext.Provider>
			</ModalContent>
		</CUIModal>
	) : null;
};

export default ConfirmModal;
