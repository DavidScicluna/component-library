import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__, __DEFAULT_RADIUS__ } from '@common/constants';
import { useConst } from '@common/hooks';
import type { AnimationConfig, PolymorphicDefaultElement } from '@common/types';
import { getAnimationConfig, getAnimationDuration } from '@common/utils';

import { Fade } from '@components/Animation';
import { Box } from '@components/Box';
import { Grid, GridItem } from '@components/Layout';

import { __DEFAULT_SKELETON_IS_ANIMATED__, __DEFAULT_SKELETON_IS_LOADED__ } from './common/constants';
import { useSkeletonClasses } from './common/hooks';
import { __KEY_SKELETON_CHILD_CLASS__, __KEY_SKELETON_CLASS__, __KEY_SKELETON_OVERLAY_CLASS__ } from './common/keys';
import type { SkeletonProps, SkeletonRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const Skeleton = forwardRef(function Skeleton<Element extends ElementType = PolymorphicDefaultElement>(
	props: SkeletonProps<Element>,
	ref: SkeletonRef<Element>
): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		isAnimated = __DEFAULT_SKELETON_IS_ANIMATED__,
		isLoaded = __DEFAULT_SKELETON_IS_LOADED__,
		radius = __DEFAULT_RADIUS__,
		...rest
	} = props;

	const classes = useSkeletonClasses<Element>({ color, colorMode, isAnimated, radius });

	const duration = useConst<number>(getAnimationDuration('ultra-fast'));
	const config = useConst<AnimationConfig>({ ...getAnimationConfig(), duration });
	const transition = useConst<AnimationConfig>({ enter: { ...config }, exit: { ...config } });

	return (
		<Grid<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEY_SKELETON_CLASS__, { [className]: !!className })}
			templateColumns={1}
			templateRows={1}
			alignItems='stretch'
			alignContent='stretch'
			justifyItems='stretch'
			justifyContent='stretch'
			spacing={0}
		>
			{children ? (
				<GridItem columnStart={1} rowStart={1} zIndex={1}>
					<Fade
						className={__KEY_SKELETON_CHILD_CLASS__}
						w='100%'
						h='100%'
						in={isLoaded}
						transition={transition}
						unmountOnExit={false}
					>
						{children}
					</Fade>
				</GridItem>
			) : null}

			<GridItem columnStart={1} rowStart={1}>
				<Fade w='100%' h='100%' in={children ? !isLoaded : true} transition={transition} unmountOnExit={false}>
					<Box className={classNames(__KEY_SKELETON_OVERLAY_CLASS__, classes)} w='100%' h='100%' />
				</Fade>
			</GridItem>
		</Grid>
	);
});

Skeleton.displayName = 'Skeleton';

export default Skeleton;
