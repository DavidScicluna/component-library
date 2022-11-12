import { FC } from 'react';

import { useColorMode, Box, Skeleton as CUISkeleton } from '@chakra-ui/react';

import { AnimatePresence } from 'framer-motion';
import { round } from 'lodash';
import { useElementSize } from 'usehooks-ts';

import { useTheme } from '../../common/hooks';
import { convertStringToNumber } from '../../common/utils';
import { getColor } from '../../common/utils/color';
import SlideFade from '../Transitions/SlideFade';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isLoaded as defaultIsLoaded,
	isReversed as defaultIsReversed,
	variant as defaultVariant
} from './common/data/defaultPropValues';
import { getSkeletonAnimationColor, getSkeletonDuration, getSkeletonDelay } from './common/utils';
import { SkeletonProps } from './types';

const Skeleton: FC<SkeletonProps> = (props) => {
	const theme = useTheme();

	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	const [childrenRef, { height: childrenHeight }] = useElementSize();

	const {
		children,
		color = defaultColor,
		colorMode = colorModeHook,
		borderRadius,
		startColor,
		endColor,
		isLoaded = defaultIsLoaded,
		isReversed = defaultIsReversed,
		transition,
		speed,
		variant = defaultVariant,
		...rest
	} = props;

	const handleReturnSpeed = (): number => {
		const defaultSpeed: number = convertStringToNumber(theme.transition.duration['slower'] || '750ms', 'ms') / 1000;

		if (typeof speed === 'number') {
			return String(speed).length > 0 ? speed : defaultSpeed;
		}

		return defaultSpeed;
	};

	const handleReturnDuration = (): number => {
		return getSkeletonDuration({ theme });
	};

	const handleReturnDelay = (): number => {
		return getSkeletonDelay({ theme });
	};

	return (
		<Box {...rest} ref={childrenRef}>
			<AnimatePresence exitBeforeEnter initial={false}>
				{isLoaded && (
					<SlideFade
						key='skeleton_children_visible'
						in
						offsetY={round(childrenHeight / 4)}
						reverse={isReversed}
						transition={
							transition || {
								enter: { duration: handleReturnDuration(), delay: handleReturnDelay() },
								exit: { duration: handleReturnDuration(), delay: handleReturnDelay() }
							}
						}
						style={{ width: '100%', height: '100%' }}
					>
						{children}
					</SlideFade>
				)}

				{!isLoaded && (
					<SlideFade
						key='skeleton_children_hidden'
						in
						offsetY={round(childrenHeight / 4)}
						reverse={isReversed}
						transition={{
							enter: { duration: handleReturnDuration(), delay: handleReturnDelay() },
							exit: { duration: handleReturnDuration(), delay: handleReturnDelay() }
						}}
						style={{ width: '100%', height: '100%' }}
					>
						<CUISkeleton
							borderRadius={
								borderRadius ||
								theme.radii[variant === 'rectangle' ? 'base' : variant === 'text' ? 'xs' : 'full']
							}
							isLoaded={false}
							fadeDuration={0}
							speed={handleReturnSpeed()}
							startColor={
								startColor ||
								getSkeletonAnimationColor({
									color,
									colorMode,
									hex: getColor({
										theme,
										colorMode,
										color: color === 'white' || color === 'black' ? 'gray' : color,
										type: color === 'white' ? 'lightest' : color === 'black' ? 'darkest' : 'divider'
									}),
									type: 'start'
								})
							}
							endColor={
								endColor ||
								getSkeletonAnimationColor({
									color,
									colorMode,
									hex: getColor({
										theme,
										colorMode,
										color: color === 'white' || color === 'black' ? 'gray' : color,
										type: color === 'white' ? 'lightest' : color === 'black' ? 'darkest' : 'divider'
									}),
									type: 'end'
								})
							}
							sx={{ width: '100%', height: '100%' }}
						>
							{children}
						</CUISkeleton>
					</SlideFade>
				)}
			</AnimatePresence>
		</Box>
	);
};

export default Skeleton;
