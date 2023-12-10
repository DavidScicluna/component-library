import type { ElementType, ReactElement } from 'react';
import { createContext, forwardRef } from 'react';

import { compact } from 'lodash-es';
import { useFocus } from 'rooks';
import { useElementSize } from 'usehooks-ts';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useBoolean } from '@common/hooks';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps
} from '@common/types';

import { Center, Grid, GridItem } from '@components/Layout';
import { PushableOverlay } from '@components/Overlay';

import {
	__DEFAULT_BADGE_IS_ACTIVE__,
	__DEFAULT_BADGE_IS_CLICKABLE__,
	__DEFAULT_BADGE_IS_COMPACT__,
	__DEFAULT_BADGE_IS_DISABLED__,
	__DEFAULT_BADGE_IS_FULLWIDTH__,
	__DEFAULT_BADGE_IS_OUTLINED__,
	__DEFAULT_BADGE_IS_ROUND__,
	__DEFAULT_BADGE_IS_UPPERCASE__,
	__DEFAULT_BADGE_SIZE__,
	__DEFAULT_BADGE_VARIANT__
} from './common/constants';
import { useBadgeClasses, useBadgeResponsiveValues, useBadgeSizeConfig } from './common/hooks';
import { __KEYS_BADGE_CLASS__ } from './common/keys';
import type { BadgeContext as BadgeContextType, BadgeProps, BadgeRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

export const BadgeContext = createContext<BadgeContextType>({
	size: __DEFAULT_BADGE_SIZE__,
	variant: __DEFAULT_BADGE_VARIANT__
});

const Badge: PolymorphicComponentWithRef = forwardRef(function Badge<
	Element extends ElementType = PolymorphicDefaultElement
>(props: BadgeProps<Element>, ref: BadgeRef<Element>): ReactElement {
	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		renderLeft,
		renderRight,
		renderAction,
		color,
		colorMode,
		isActive: isActiveProp = __DEFAULT_BADGE_IS_ACTIVE__,
		isClickable: isClickableProp = __DEFAULT_BADGE_IS_CLICKABLE__,
		isCompact: isCompactProp = __DEFAULT_BADGE_IS_COMPACT__,
		isDisabled: isDisabledProp = __DEFAULT_BADGE_IS_DISABLED__,
		isFullWidth: isFullWidthProp = __DEFAULT_BADGE_IS_FULLWIDTH__,
		isOutlined: isOutlinedProp = __DEFAULT_BADGE_IS_OUTLINED__,
		isRound: isRoundProp = __DEFAULT_BADGE_IS_ROUND__,
		isUppercase: isUppercaseProp = __DEFAULT_BADGE_IS_UPPERCASE__,
		size: sizeProp = __DEFAULT_BADGE_SIZE__,
		variant: variantProp = __DEFAULT_BADGE_VARIANT__,
		...rest
	} = props;

	const [isFocused, setIsFocused] = useBoolean();

	const {
		isActive,
		isClickable,
		isCompact,
		isDisabled,
		isFullWidth,
		isOutlined,
		isRound,
		isUppercase,
		size,
		variant
	} = useBadgeResponsiveValues({
		isActive: isActiveProp,
		isClickable: isClickableProp,
		isCompact: isCompactProp,
		isDisabled: isDisabledProp,
		isFullWidth: isFullWidthProp,
		isOutlined: isOutlinedProp,
		isRound: isRoundProp,
		isUppercase: isUppercaseProp,
		size: sizeProp,
		variant: variantProp
	});

	const config = useBadgeSizeConfig({ isCompact, isRound, size, variant });

	const classes = useBadgeClasses({ isCompact, isFullWidth, isRound, isUppercase, size, variant });

	const { focusProps } = useFocus({ onFocus: () => setIsFocused.on(), onBlur: () => setIsFocused.off() });

	return (
		<BadgeContext.Provider value={{ color, colorMode, size, variant }}>
			<PushableOverlay<Element>
				{...focusProps}
				{...rest}
				ref={ref}
				className={classNames(__KEYS_BADGE_CLASS__, classes, { [className]: !!className })}
				color={color}
				colorMode={colorMode}
				radius={config.radius}
				isActive={isClickable && isActive}
				isDisabled={isClickable && isDisabled}
				isFocused={isClickable && isFocused}
				isOutlined={isOutlined}
				isPushable={isClickable}
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
							<Center ref={childrenRef} as='span' w='100%' h='100%'>
								{children}
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
			</PushableOverlay>
		</BadgeContext.Provider>
	);
});

Badge.displayName = 'Badge';

export default <Element extends ElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <Badge<Element> {...props} />;
