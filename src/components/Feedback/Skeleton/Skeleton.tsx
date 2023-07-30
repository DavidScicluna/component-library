import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';
import type { Transition } from 'framer-motion';

import { __DEFAULT_RADIUS__ } from '@common/constants';
import { useConst } from '@common/hooks';
import type { AnimationConfig } from '@common/types/animation';
import { getAnimationConfig, getAnimationDuration } from '@common/utils/animation';

import { Fade } from '@components/Animation';
import Box from '@components/Box';
import { Grid, GridItem } from '@components/Layout';

import { __DEFAULT_SKELETON_IS_ANIMATED__, __DEFAULT_SKELETON_IS_LOADED__ } from './common/constants';
import { useGetSkeletonClasses } from './common/hooks';
import type { SkeletonProps, SkeletonRef } from './common/types';

const Skeleton = forwardRef(function Skeleton<Element extends ElementType>(
	props: SkeletonProps<Element>,
	ref: SkeletonRef<Element>
): ReactElement {
	const {
		children,
		color,
		colorMode,
		isAnimated = __DEFAULT_SKELETON_IS_ANIMATED__,
		isLoaded = __DEFAULT_SKELETON_IS_LOADED__,
		radius = __DEFAULT_RADIUS__,
		...rest
	} = props;

	const classes = useGetSkeletonClasses({ color, colorMode, radius });

	const duration = useConst<number>(getAnimationDuration('ultra-fast'));
	const config = useConst<AnimationConfig>(getAnimationConfig());
	const transition = useConst<Transition>({ enter: { ...config, duration }, exit: { ...config, duration } });

	return (
		<Box<Element> {...(rest as SkeletonProps<Element>)} ref={ref}>
			<Grid
				className={classes.common}
				templateColumns={1}
				templateRows={1}
				alignItems='stretch'
				alignContent='stretch'
				justifyItems='stretch'
				justifyContent='stretch'
				spacing={0}
			>
				{children ? (
					<GridItem rowStart={1} columnStart={1} zIndex={1}>
						<Fade className={classes.common} in={isLoaded} transition={transition} unmountOnExit={false}>
							{children}
						</Fade>
					</GridItem>
				) : null}

				<GridItem rowStart={1} columnStart={1}>
					<Fade
						className={classes.common}
						in={children ? !isLoaded : true}
						transition={transition}
						unmountOnExit={false}
					>
						<Box
							className={classNames(classes.common, classes.skeleton, { ['animate-pulse']: isAnimated })}
						/>
					</Fade>
				</GridItem>
			</Grid>
		</Box>
	);
});

export default Skeleton;
