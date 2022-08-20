import { FC, useCallback } from 'react';

import { useColorMode, Center, Skeleton as CUISkeleton } from '@chakra-ui/react';

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
		isLoaded = defaultIsLoaded,
		isReversed = defaultIsReversed,
		transition,
		speed,
		variant = defaultVariant,
		...rest
	} = props;

	const handleReturnSpeed = useCallback((): number => {
		if (speed) {
			return speed;
		}

		return convertStringToNumber(theme.transition.duration['slower'] || '750ms', 'ms') / 1000;
	}, [theme, speed, convertStringToNumber]);

	const handleReturnDuration = useCallback((): number => {
		return getSkeletonDuration({ theme });
	}, [theme, getSkeletonDuration]);

	const handleReturnDelay = useCallback((): number => {
		return getSkeletonDelay({ theme });
	}, [theme, getSkeletonDelay]);

	return (
		<Center ref={childrenRef} width='auto' height='auto'>
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
						unmountOnExit
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
						unmountOnExit
						style={{ width: '100%', height: '100%' }}
					>
						<CUISkeleton
							borderRadius={
								theme.radii[variant === 'rectangle' ? 'base' : variant === 'text' ? 'xs' : 'full']
							}
							fadeDuration={0}
							speed={handleReturnSpeed()}
							startColor={getSkeletonAnimationColor({
								color,
								colorMode,
								hex: getColor({
									theme,
									colorMode,
									color: color === 'white' || color === 'black' ? 'gray' : color,
									type: color === 'white' ? 'lightest' : color === 'black' ? 'darkest' : 'divider'
								}),
								type: 'start'
							})}
							endColor={getSkeletonAnimationColor({
								color,
								colorMode,
								hex: getColor({
									theme,
									colorMode,
									color: color === 'white' || color === 'black' ? 'gray' : color,
									type: color === 'white' ? 'lightest' : color === 'black' ? 'darkest' : 'divider'
								}),
								type: 'end'
							})}
							{...rest}
						>
							{children}
						</CUISkeleton>
					</SlideFade>
				)}
			</AnimatePresence>
		</Center>
	);
};

export default Skeleton;
