import { FC, createContext, useCallback } from 'react';

import { useColorMode, useBoolean, useConst, Box, VStack, VisuallyHidden, Center } from '@chakra-ui/react';

import { dataAttr } from '@chakra-ui/utils';
import { Transition } from 'framer-motion';
import { merge } from 'lodash';
import { useInView } from 'react-cool-inview';

import { useTheme } from '../../common/hooks';
import { getDuration as getTransitionDuration, getEasings as getTransitionEasings } from '../Transitions/common/utils';
import Collapse from '../Transitions/Collapse';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isActive as defaultIsActive,
	isDisabled as defaultIsDisabled,
	isDivisible as defaultIsDivisible,
	isFullWidth as defaultIsFullWidth,
	isFixed as defaultIsFixed,
	isLight as defaultIsLight,
	isOpen as defaultIsOpen,
	spacing as defaultSpacing
} from './common/data/defaultPropValues';
import useStyles from './common/styles';
import CollapsibleCardDivider from './components/CollapsibleCardDivider';
import { CollapsibleCardContext as CollapsibleCardContextType, CollapsibleCardProps, MouseEvent } from './types';

export const CollapsibleCardContext = createContext<CollapsibleCardContextType>({
	color: defaultColor,
	colorMode: defaultColorMode,
	isDisabled: defaultIsDisabled,
	isFullWidth: defaultIsFullWidth,
	isOpen: defaultIsOpen
});

const CollapsibleCard: FC<CollapsibleCardProps> = (props) => {
	const theme = useTheme();
	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	const { observe: ref, inView } = useInView<HTMLDivElement>({
		threshold: [0.2, 0.4, 0.6, 0.8, 1],
		unobserveOnEnter: true
	});

	const {
		header,
		body,
		footer,
		color = defaultColor,
		colorMode = colorModeHook,
		isActive = defaultIsActive,
		isDisabled = defaultIsDisabled,
		isDivisible = defaultIsDivisible,
		isFullWidth = defaultIsFullWidth,
		isFixed = defaultIsFixed,
		isLight = defaultIsLight,
		isOpen = defaultIsOpen,
		onOpen,
		onClick,
		spacing = defaultSpacing,
		sx,
		...rest
	} = props;

	const [isHovering, setIsHovering] = useBoolean();

	const style = useStyles({ theme, color, colorMode, isFullWidth, isFixed: isFixed || isHovering, isLight, isOpen });

	const duration = useConst<number>(getTransitionDuration({ theme, duration: 'slow' }));
	const easing = useConst<number[]>(getTransitionEasings({ theme }));

	const config = useConst<Transition>({ duration, easing });

	const handleToggle = useCallback(
		(event: MouseEvent) => {
			if (isOpen ? isOpen && !isHovering : true) {
				onOpen();
			}

			if (onClick) {
				onClick(event);
			}
		},
		[isOpen, isHovering, onClick]
	);

	return (
		<CollapsibleCardContext.Provider value={{ color, colorMode, isDisabled, isFullWidth, isOpen }}>
			<Box
				{...rest}
				ref={ref}
				as='div'
				aria-disabled={isDisabled}
				tabIndex={0}
				data-active={!isFixed && dataAttr(isActive)}
				onClick={handleToggle}
				sx={merge(style.card, sx)}
				_disabled={style.disabled.card}
				_active={style.active}
			>
				<VStack width='100%' position='relative' zIndex={1} spacing={0}>
					<Center width='100%'>{header}</Center>

					<Collapse
						in={!isDisabled && isOpen && inView}
						style={{ width: '100%' }}
						transition={{ enter: { ...config }, exit: { ...config } }}
					>
						<VStack
							width='100%'
							divider={isDivisible ? <CollapsibleCardDivider /> : undefined}
							onMouseEnter={() => setIsHovering.on()}
							onMouseLeave={() => setIsHovering.off()}
							spacing={spacing}
						>
							<VisuallyHidden>
								<span />
							</VisuallyHidden>

							{body}
							{footer}
						</VStack>
					</Collapse>
				</VStack>
			</Box>
		</CollapsibleCardContext.Provider>
	);
};

export default CollapsibleCard;
