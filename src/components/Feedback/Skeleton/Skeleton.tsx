import { ElementType, forwardRef, ReactElement, useMemo } from 'react';

import classNames from 'classnames';
import { round } from 'lodash-es';
import { useElementSize } from 'usehooks-ts';

import { __DEFAULT_CLASSNAME__, __DEFAULT_DURATION__, __DEFAULT_EASING__ } from '@common/constants';
import { useGetClass, useGetColor } from '@common/hooks';
import type { Duration, Ease, Radius } from '@common/types/theme';

import { AnimatePresence, Slide } from '@components/Animation';
import Box from '@components/Box';
import { Grid, GridItem } from '@components/Layout';

import {
	__DEFAULT_SKELETON_IS_ANIMATED__,
	__DEFAULT_SKELETON_IS_LOADED__,
	__DEFAULT_SKELETON_VARIANT__
} from './common/constants';
import type { SkeletonProps, SkeletonRef } from './common/types';

const Skeleton = forwardRef(function Skeleton<Element extends ElementType>(
	props: SkeletonProps<Element>,
	ref: SkeletonRef<Element>
): ReactElement {
	const [gridRef, { height: gridHeight }] = useElementSize();

	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		isAnimated = __DEFAULT_SKELETON_IS_ANIMATED__,
		isLoaded = __DEFAULT_SKELETON_IS_LOADED__,
		variant = __DEFAULT_SKELETON_VARIANT__,
		...rest
	} = props;

	const colorClassName = useGetColor({
		color: color,
		colorMode,
		colorType: color ? 'color' : 'default',
		classType: 'bg',
		hueType: 'divider'
	});

	const radiusClassName = useGetClass<Radius>(
		variant === 'rectangle' ? 'base' : variant === 'circle' ? 'full' : 'xs',
		['borders', 'radius']
	);

	const easeClassName = useGetClass<Ease>(__DEFAULT_EASING__, ['transitions', 'ease']);
	const durationClassName = useGetClass<Duration>(__DEFAULT_DURATION__, ['transitions', 'duration']);

	const offsetY = useMemo(() => round(gridHeight / 2), [gridHeight]);

	return (
		<Box<Element>
			{...(rest as SkeletonProps<Element>)}
			ref={ref}
			className={classNames('overflow-hidden', radiusClassName, { [className]: !!className })}
		>
			<AnimatePresence>
				<Grid
					ref={gridRef}
					className={classNames('w-full', 'h-full')}
					templateColumns={1}
					templateRows={1}
					alignItems='stretch'
					alignContent='stretch'
					justifyItems='stretch'
					justifyContent='stretch'
					spacing={0}
				>
					<GridItem rowStart={1} columnStart={1} zIndex={1}>
						<Slide
							key='skeleton_children_visible'
							className={classNames('w-full', 'h-full')}
							in={isLoaded}
							offsetY={offsetY}
							unmountOnExit={false}
						>
							{children}
						</Slide>
					</GridItem>

					<GridItem rowStart={1} columnStart={1}>
						<Slide
							key='skeleton_children_hidden'
							className={classNames('w-full', 'h-full')}
							in={!isLoaded}
							offsetY={offsetY}
							unmountOnExit={false}
						>
							<Box
								className={classNames(
									'w-full',
									'h-full',
									colorClassName,
									easeClassName,
									durationClassName,
									{
										['animate-pulse']: isAnimated
									}
								)}
							/>
						</Slide>
					</GridItem>
				</Grid>
			</AnimatePresence>
		</Box>
	);
});

export default Skeleton;
