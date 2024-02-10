import { createContext, forwardRef } from 'react';

import { compact } from 'lodash-es';
// TODO: Replace all useElementSize
import { useElementSize } from 'usehooks-ts';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicDefaultElement } from '@common/types';

import type { CenterRef } from '@components/Layout';
import { Center, Grid, GridItem } from '@components/Layout';
import type { DummyPushableOverlayProps } from '@components/Overlay';
import { DummyPushableOverlay } from '@components/Overlay';

import {
	__DEFAULT_DUMMY_BADGE_AS__,
	__DEFAULT_DUMMY_BADGE_IS_ANIMATED__,
	__DEFAULT_DUMMY_BADGE_IS_COMPACT__,
	__DEFAULT_DUMMY_BADGE_IS_FULLWIDTH__,
	__DEFAULT_DUMMY_BADGE_IS_OUTLINED__,
	__DEFAULT_DUMMY_BADGE_IS_ROUND__,
	__DEFAULT_DUMMY_BADGE_IS_UPPERCASE__,
	__DEFAULT_DUMMY_BADGE_SIZE__,
	__DEFAULT_DUMMY_BADGE_VARIANT__
} from './common/constants';
import { useDummyBadgeClasses, useDummyBadgeResponsiveValues, useDummyBadgeSizeConfig } from './common/hooks';
import { __KEYS_DUMMY_BADGE_CLASS__ } from './common/keys';
import type {
	DummyBadgeContext as DummyBadgeContextType,
	DummyBadgeDefaultElement,
	DummyBadgeElement,
	DummyBadgeProps,
	DummyBadgeRef
} from './common/types';
import { DummyBadgeSkeleton } from './components';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

export const DummyBadgeContext = createContext<DummyBadgeContextType<DummyBadgeDefaultElement>>({
	size: __DEFAULT_DUMMY_BADGE_SIZE__,
	variant: __DEFAULT_DUMMY_BADGE_VARIANT__
});

const DummyBadge = forwardRef(function DummyBadge<Element extends DummyBadgeElement>(
	props: DummyBadgeProps<Element>,
	ref: DummyBadgeRef<Element>
): JSX.Element {
	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const {
		children,
		as = __DEFAULT_DUMMY_BADGE_AS__,
		className = __DEFAULT_CLASSNAME__,
		renderLeft,
		renderRight,
		renderAction,
		color,
		colorMode,
		isAnimated: isAnimatedProp = __DEFAULT_DUMMY_BADGE_IS_ANIMATED__,
		isCompact: isCompactProp = __DEFAULT_DUMMY_BADGE_IS_COMPACT__,
		isFullWidth: isFullWidthProp = __DEFAULT_DUMMY_BADGE_IS_FULLWIDTH__,
		isOutlined: isOutlinedProp = __DEFAULT_DUMMY_BADGE_IS_OUTLINED__,
		isRound: isRoundProp = __DEFAULT_DUMMY_BADGE_IS_ROUND__,
		isUppercase: isUppercaseProp = __DEFAULT_DUMMY_BADGE_IS_UPPERCASE__,
		size: sizeProp = __DEFAULT_DUMMY_BADGE_SIZE__,
		variant: variantProp = __DEFAULT_DUMMY_BADGE_VARIANT__,
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
				className={classNames(__KEYS_DUMMY_BADGE_CLASS__, classes, { [className]: !!className })}
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
