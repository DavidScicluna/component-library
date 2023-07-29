import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';
import type { Transition } from 'framer-motion';

import { __DEFAULT_DURATION__, __DEFAULT_EASING__, __DEFAULT_RADIUS__ } from '@common/constants';
import { useConst, useGetClass, useGetColor } from '@common/hooks';
import type { AnimationConfig } from '@common/types/animation';
import type { Duration, Ease, Radius } from '@common/types/theme';
import { getAnimationConfig, getAnimationDuration } from '@common/utils/animation';

import { Fade } from '@components/Animation';
import Box from '@components/Box';
import { Grid, GridItem } from '@components/Layout';

import { __DEFAULT_SKELETON_IS_ANIMATED__, __DEFAULT_SKELETON_IS_LOADED__ } from './common/constants';
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

	const colorClassName = useGetColor({
		color: color,
		colorMode,
		colorType: color ? 'color' : 'default',
		classType: 'bg',
		hueType: 'divider'
	});

	const radiusClassName = useGetClass<Radius>(radius, ['borders', 'borderRadius']);

	const easeClassName = useGetClass<Ease>(__DEFAULT_EASING__, ['transitions', 'ease']);
	const durationClassName = useGetClass<Duration>(__DEFAULT_DURATION__, ['transitions', 'duration']);

	const duration = useConst<number>(getAnimationDuration('ultra-fast'));
	const config = useConst<AnimationConfig>(getAnimationConfig());
	const transition = useConst<Transition>({ enter: { ...config, duration }, exit: { ...config, duration } });

	return (
		<Box<Element> {...(rest as SkeletonProps<Element>)} ref={ref}>
			<Grid
				className={classNames('w-full', 'h-full')}
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
						<Fade
							className={classNames('w-full', 'h-full')}
							in={isLoaded}
							transition={transition}
							unmountOnExit={false}
						>
							{children}
						</Fade>
					</GridItem>
				) : null}

				<GridItem rowStart={1} columnStart={1}>
					<Fade
						className={classNames('w-full', 'h-full')}
						in={children ? !isLoaded : true}
						transition={transition}
						unmountOnExit={false}
					>
						<Box
							className={classNames(
								'w-full',
								'h-full',
								'overflow-hidden',
								colorClassName,
								radiusClassName,
								easeClassName,
								durationClassName,
								{
									['animate-pulse']: isAnimated
								}
							)}
						/>
					</Fade>
				</GridItem>
			</Grid>
		</Box>
	);
});

export default Skeleton;
