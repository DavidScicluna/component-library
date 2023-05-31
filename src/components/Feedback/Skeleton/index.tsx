import { FC, useMemo } from 'react';

import { Grid, GridItem, Skeleton as CUISkeleton } from '@chakra-ui/react';

import { round } from 'lodash-es';
import { useElementSize } from 'usehooks-ts';

import { useTheme } from '../../../common/hooks';
import { convertStringToNumber } from '../../../common/utils';
import { getColor } from '../../../common/utils/color';
import { useProviderContext } from '../../Provider/common/hooks';
import AnimatePresence from '../../Transitions/AnimatePresence';
import SlideFade from '../../Transitions/SlideFade';

import {
	isAnimated as defaultIsAnimated,
	isLoaded as defaultIsLoaded,
	isReversed as defaultIsReversed,
	variant as defaultVariant
} from './common/default/props';
import { SkeletonProps } from './common/types';
import { getSkeletonAnimationColor } from './common/utils';

const Skeleton: FC<SkeletonProps> = (props) => {
	const theme = useTheme();

	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const [childrenRef, { height: childrenHeight }] = useElementSize();

	const {
		children,
		color = defaultColor,
		colorMode = defaultColorMode,
		borderRadius,
		startColor,
		endColor,
		isAnimated = defaultIsAnimated,
		isLoaded = defaultIsLoaded,
		isReversed = defaultIsReversed,
		variant = defaultVariant,
		...rest
	} = props;

	const defaultStartColor = useMemo(() => {
		return getSkeletonAnimationColor({
			color,
			colorMode,
			hex: getColor({
				theme,
				colorMode,
				color: color === 'white' || color === 'black' ? 'gray' : color,
				type: color === 'white' ? 'lightest' : color === 'black' ? 'darkest' : 'divider'
			}),
			type: 'start'
		});
	}, [color, colorMode]);

	const defaultEndColor = useMemo(() => {
		return getSkeletonAnimationColor({
			color,
			colorMode,
			hex: getColor({
				theme,
				colorMode,
				color: color === 'white' || color === 'black' ? 'gray' : color,
				type: color === 'white' ? 'lightest' : color === 'black' ? 'darkest' : 'divider'
			}),
			type: 'end'
		});
	}, [color, colorMode]);

	const defaultBorderRadius = useMemo(() => {
		return theme.radii[variant === 'rectangle' ? 'base' : variant === 'text' ? 'xs' : 'full'];
	}, [variant]);

	const speed = useMemo((): number => {
		if (isAnimated) {
			const defaultSpeed: number =
				convertStringToNumber(theme.transition.duration['slower'] || '750ms', 'ms') / 1000;

			return defaultSpeed;
		} else {
			return 0;
		}
	}, [isAnimated]);

	return (
		<AnimatePresence>
			<Grid
				width='fit-content'
				height='fit-content'
				{...rest}
				ref={childrenRef}
				templateColumns='1fr'
				templateRows='1fr'
				alignItems='stretch'
				alignContent='stretch'
				justifyItems='stretch'
				justifyContent='stretch'
				gap={0}
			>
				<GridItem
					key='skeleton_children_visible'
					as={SlideFade}
					zIndex={1}
					rowStart={1}
					colStart={1}
					in={isLoaded}
					offsetY={round(childrenHeight / 4)}
					reverse={isReversed}
				>
					{children}
				</GridItem>

				<GridItem
					key='skeleton_children_hidden'
					as={SlideFade}
					rowStart={1}
					colStart={1}
					in={!isLoaded}
					offsetY={round(childrenHeight / 4)}
					reverse={isReversed}
				>
					<CUISkeleton
						borderRadius={borderRadius || defaultBorderRadius}
						isLoaded={false}
						fadeDuration={0}
						speed={speed}
						startColor={startColor || defaultStartColor}
						endColor={endColor || defaultEndColor}
					>
						{children}
					</CUISkeleton>
				</GridItem>
			</Grid>
		</AnimatePresence>
	);
};

export default Skeleton;
