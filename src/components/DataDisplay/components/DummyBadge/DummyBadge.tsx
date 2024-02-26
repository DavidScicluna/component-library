import { createContext, forwardRef } from 'react';

import classNames from 'classnames';
import { compact } from 'lodash-es';
import { useDimensionsRef } from 'rooks';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicDefaultElement } from '@common/types';

import type { CenterRef } from '@components/Layout';
import { Center, Grid, GridItem } from '@components/Layout';
import type { DummyPushableOverlayProps } from '@components/Overlay';
import { DummyPushableOverlay } from '@components/Overlay';

import {
	DEFAULT_DUMMY_BADGE_AS,
	DEFAULT_DUMMY_BADGE_IS_ANIMATED,
	DEFAULT_DUMMY_BADGE_IS_COMPACT,
	DEFAULT_DUMMY_BADGE_IS_FULLWIDTH,
	DEFAULT_DUMMY_BADGE_IS_OUTLINED,
	DEFAULT_DUMMY_BADGE_IS_ROUND,
	DEFAULT_DUMMY_BADGE_IS_UPPERCASE,
	DEFAULT_DUMMY_BADGE_SIZE,
	DEFAULT_DUMMY_BADGE_VARIANT
} from './common/constants';
import { useDummyBadgeClasses, useDummyBadgeResponsiveValues, useDummyBadgeSizeConfig } from './common/hooks';
import { KEYS_DUMMY_BADGE_CLASS } from './common/keys';
import type {
	DummyBadgeContext as DummyBadgeContextType,
	DummyBadgeDefaultElement,
	DummyBadgeElement,
	DummyBadgeProps,
	DummyBadgeRef
} from './common/types';
import { DummyBadgeSkeleton } from './components';

export const DummyBadgeContext = createContext<DummyBadgeContextType<DummyBadgeDefaultElement>>({
	size: DEFAULT_DUMMY_BADGE_SIZE,
	variant: DEFAULT_DUMMY_BADGE_VARIANT
});

const DummyBadge = forwardRef(function DummyBadge<Element extends DummyBadgeElement>(
	props: DummyBadgeProps<Element>,
	ref: DummyBadgeRef<Element>
): JSX.Element {
	const [childrenRef, childrenDimensions] = useDimensionsRef();
	const { width: childrenWidth = 0, height: childrenHeight = 0 } = childrenDimensions || {};

	const {
		children,
		as = DEFAULT_DUMMY_BADGE_AS,
		className = DEFAULT_CLASSNAME,
		renderLeft,
		renderRight,
		renderAction,
		color,
		colorMode,
		isAnimated: isAnimatedProp = DEFAULT_DUMMY_BADGE_IS_ANIMATED,
		isCompact: isCompactProp = DEFAULT_DUMMY_BADGE_IS_COMPACT,
		isFullWidth: isFullWidthProp = DEFAULT_DUMMY_BADGE_IS_FULLWIDTH,
		isOutlined: isOutlinedProp = DEFAULT_DUMMY_BADGE_IS_OUTLINED,
		isRound: isRoundProp = DEFAULT_DUMMY_BADGE_IS_ROUND,
		isUppercase: isUppercaseProp = DEFAULT_DUMMY_BADGE_IS_UPPERCASE,
		size: sizeProp = DEFAULT_DUMMY_BADGE_SIZE,
		variant: variantProp = DEFAULT_DUMMY_BADGE_VARIANT,
		...rest
	} = props;

	const { isAnimated, isCompact, isFullWidth, isOutlined, isRound, isUppercase, size, variant } =
		useDummyBadgeResponsiveValues<Element>({
			isAnimated: isAnimatedProp,
			isCompact: isCompactProp,
			isFullWidth: isFullWidthProp,
			isOutlined: isOutlinedProp,
			isRound: isRoundProp,
			isUppercase: isUppercaseProp,
			size: sizeProp,
			variant: variantProp
		});

	const config = useDummyBadgeSizeConfig<Element>({ isCompact, isRound, size, variant });

	const classes = useDummyBadgeClasses<Element>({ isCompact, isFullWidth, isRound, isUppercase, size, variant });

	return (
		<DummyBadgeContext.Provider value={{ color, colorMode, size, variant }}>
			<DummyPushableOverlay
				{...(rest as DummyPushableOverlayProps<Element>)}
				as={as}
				ref={ref}
				className={classNames(KEYS_DUMMY_BADGE_CLASS, classes, { [className]: !!className })}
				color={color}
				colorMode={colorMode}
				radius={config.radius}
				isAnimated={isAnimated}
				isOutlined={isOutlined}
				variant={variant === 'text' ? 'transparent' : variant}
				px={config.padding.x}
				py={config.padding.y}
			>
				<Grid
					w='100%'
					h='100%'
					templateColumns={compact([
						renderLeft ? 'auto' : null,
						'auto',
						renderRight ? 'auto' : null,
						renderAction ? 'auto' : null
					]).join(' ')}
					templateRows={1}
					alignItems={isFullWidth ? 'center' : 'stretch'}
					alignContent={isFullWidth ? 'center' : 'stretch'}
					justifyItems={isFullWidth ? 'center' : 'stretch'}
					justifyContent={isFullWidth ? 'center' : 'stretch'}
					spacing={config.spacing}
				>
					{renderLeft ? (
						<GridItem alignSelf='center' justifySelf='center'>
							{renderLeft({ color, colorMode, w: childrenWidth, h: childrenHeight })}
						</GridItem>
					) : null}

					{children ? (
						<GridItem>
							<Center
								ref={childrenRef as CenterRef<PolymorphicDefaultElement>}
								as='span'
								w='100%'
								h='100%'
							>
								<DummyBadgeSkeleton radius='xs'>{children}</DummyBadgeSkeleton>
							</Center>
						</GridItem>
					) : null}

					{renderRight ? (
						<GridItem alignSelf='center' justifySelf='center'>
							{renderRight({ color, colorMode, w: childrenWidth, h: childrenHeight })}
						</GridItem>
					) : null}

					{renderAction ? (
						<GridItem alignSelf='center' justifySelf='center'>
							{renderAction()}
						</GridItem>
					) : null}
				</Grid>
			</DummyPushableOverlay>
		</DummyBadgeContext.Provider>
	);
});

// DummyBadge.displayName = 'DummyBadge';

export default DummyBadge;
