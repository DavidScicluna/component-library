import { FC, useCallback } from 'react';

import { ColorMode, useColorMode, Center, Skeleton as CUISkeleton } from '@chakra-ui/react';

import { darken, lighten } from 'color2k';
import { AnimatePresence } from 'framer-motion';
import { round } from 'lodash';
import { useElementSize } from 'usehooks-ts';

import {
	color as defaultColor,
	isLoaded as defaultIsLoaded,
	isReversed as defaultIsReversed,
	type as defaultType
} from './common/data/defaultPropValues';
import { SkeletonProps } from './types';

import { useTheme } from '../../common/hooks';
import { convertStringToNumber } from '../../common/utils';
import { getColor } from '../../common/utils/color';
import SlideFade from '../Transitions/SlideFade';

const Skeleton: FC<SkeletonProps> = (props) => {
	const theme = useTheme();

	const { colorMode: colorModeHook } = useColorMode();

	const [childrenRef, { height: childrenHeight }] = useElementSize();

	const {
		children,
		color: colorProp = defaultColor,
		colorMode: colorModeProp,
		isLoaded = defaultIsLoaded,
		isReversed = defaultIsReversed,
		type = defaultType,
		speed,
		...rest
	} = props;

	const colorMode: ColorMode = colorModeProp || colorModeHook;

	const handleReturnSpeed = useCallback((): number => {
		if (speed) {
			return speed;
		}

		return convertStringToNumber(theme.transition.duration['slower'] || '750ms', 'ms') / 1000;
	}, [theme, speed]);

	const handleReturnColor = useCallback(
		({ type }: { type: 'start' | 'end' }): string => {
			const color = getColor({ theme, colorMode, color: colorProp, type: 'divider' });
			const opacity = type === 'start' ? 0 : 0.05;

			switch (colorMode) {
				case 'light':
					return darken(color, opacity);
				case 'dark':
					return lighten(color, opacity);
			}
		},
		[theme, colorMode, colorProp]
	);

	const handleReturnDuration = useCallback((): number => {
		return convertStringToNumber(theme.transition.duration.normal || '250ms', 'ms') / 1000;
	}, [theme]);

	const handleReturnDelay = useCallback((): number => {
		return convertStringToNumber(theme.transition.duration.faster || '100ms', 'ms') / 1000;
	}, [theme]);

	return (
		<Center ref={childrenRef} width='auto' height='auto'>
			<AnimatePresence exitBeforeEnter initial={false}>
				{isLoaded && (
					<SlideFade
						key='skeleton_children_visible'
						in
						offsetY={round(childrenHeight / 4)}
						reverse={isReversed}
						transition={{
							enter: { duration: handleReturnDuration(), delay: handleReturnDelay() },
							exit: { duration: handleReturnDuration(), delay: handleReturnDelay() }
						}}
						unmountOnExit
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
					>
						<CUISkeleton
							{...rest}
							borderRadius={theme.radii[type === 'rectangle' ? 'base' : type === 'text' ? 'xs' : 'full']}
							fadeDuration={0}
							speed={handleReturnSpeed()}
							startColor={handleReturnColor({ type: 'start' })}
							endColor={handleReturnColor({ type: 'end' })}
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
