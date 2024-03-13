import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME, DEFAULT_RADIUS } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { Transition } from '@components/Animation';
import { Box } from '@components/Box';
import { Grid, GridItem } from '@components/Layout';

import { DEFAULT_SKELETON_IS_ANIMATED, DEFAULT_SKELETON_IS_LOADED } from './common/constants';
import { useSkeletonClasses, useSkeletonResponsiveValues } from './common/hooks';
import { KEY_SKELETON_CHILD_CLASS, KEY_SKELETON_CLASS, KEY_SKELETON_OVERLAY_CLASS } from './common/keys';
import type { SkeletonProps, SkeletonRef } from './common/types';

const Skeleton = forwardRef(function Skeleton<Element extends PolymorphicElementType>(
	props: SkeletonProps<Element>,
	ref: SkeletonRef<Element>
): JSX.Element {
	const {
		children,
		className = DEFAULT_CLASSNAME,
		color,
		colorMode,
		isAnimated: isAnimatedProp = DEFAULT_SKELETON_IS_ANIMATED,
		isLoaded: isLoadedProp = DEFAULT_SKELETON_IS_LOADED,
		radius: radiusProp = DEFAULT_RADIUS,
		...rest
	} = props;

	const { isAnimated, isLoaded, radius } = useSkeletonResponsiveValues<Element>({
		isAnimated: isAnimatedProp,
		isLoaded: isLoadedProp,
		radius: radiusProp
	});

	const classes = useSkeletonClasses<Element>({ color, colorMode, isAnimated, radius });

	return (
		<Grid
			{...rest}
			ref={ref}
			className={classNames(KEY_SKELETON_CLASS, { [className]: !!className })}
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
					<Transition
						className={KEY_SKELETON_CHILD_CLASS}
						w='100%'
						h='100%'
						duration='ultra-fast'
						transition='fade'
						in={isLoaded}
						unmountOnExit={false}
					>
						{children}
					</Transition>
				</GridItem>
			) : null}

			<GridItem columnStart={1} rowStart={1}>
				<Transition
					w='100%'
					h='100%'
					duration='ultra-fast'
					transition='fade'
					in={children ? !isLoaded : true}
					unmountOnExit={false}
				>
					<Box className={classNames(KEY_SKELETON_OVERLAY_CLASS, classes)} w='100%' h='100%' />
				</Transition>
			</GridItem>
		</Grid>
	);
});

// Skeleton.displayName = 'Skeleton';

export default Skeleton;
