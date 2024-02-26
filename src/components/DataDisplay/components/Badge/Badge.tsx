import { createContext, forwardRef } from 'react';

import classNames from 'classnames';
import { compact } from 'lodash-es';
import { useDimensionsRef, useFocus } from 'rooks';

import { DEFAULT_CLASSNAME } from '@common/constants';
import { useBoolean } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types';

import type { CenterRef } from '@components/Layout';
import { Center, Grid, GridItem } from '@components/Layout';
import type { PushableOverlayProps } from '@components/Overlay';
import { PushableOverlay } from '@components/Overlay';

import {
	DEFAULT_BADGE_AS,
	DEFAULT_BADGE_IS_ACTIVE,
	DEFAULT_BADGE_IS_CLICKABLE,
	DEFAULT_BADGE_IS_COMPACT,
	DEFAULT_BADGE_IS_DISABLED,
	DEFAULT_BADGE_IS_FULLWIDTH,
	DEFAULT_BADGE_IS_OUTLINED,
	DEFAULT_BADGE_IS_ROUND,
	DEFAULT_BADGE_IS_UPPERCASE,
	DEFAULT_BADGE_SIZE,
	DEFAULT_BADGE_VARIANT
} from './common/constants';
import { useBadgeClasses, useBadgeResponsiveValues, useBadgeSizeConfig } from './common/hooks';
import { KEYS_BADGE_CLASS } from './common/keys';
import type {
	BadgeContext as BadgeContextType,
	BadgeDefaultElement,
	BadgeElement,
	BadgeProps,
	BadgeRef
} from './common/types';

export const BadgeContext = createContext<BadgeContextType<BadgeDefaultElement>>({
	size: DEFAULT_BADGE_SIZE,
	variant: DEFAULT_BADGE_VARIANT
});

const Badge = forwardRef(function Badge<Element extends BadgeElement>(
	props: BadgeProps<Element>,
	ref: BadgeRef<Element>
): JSX.Element {
	const [childrenRef, childrenDimensions] = useDimensionsRef();
	const { width: childrenWidth = 0, height: childrenHeight = 0 } = childrenDimensions || {};

	const {
		children,
		as = DEFAULT_BADGE_AS,
		className = DEFAULT_CLASSNAME,
		renderLeft,
		renderRight,
		renderAction,
		color,
		colorMode,
		isActive: isActiveProp = DEFAULT_BADGE_IS_ACTIVE,
		isClickable: isClickableProp = DEFAULT_BADGE_IS_CLICKABLE,
		isCompact: isCompactProp = DEFAULT_BADGE_IS_COMPACT,
		isDisabled: isDisabledProp = DEFAULT_BADGE_IS_DISABLED,
		isFullWidth: isFullWidthProp = DEFAULT_BADGE_IS_FULLWIDTH,
		isOutlined: isOutlinedProp = DEFAULT_BADGE_IS_OUTLINED,
		isRound: isRoundProp = DEFAULT_BADGE_IS_ROUND,
		isUppercase: isUppercaseProp = DEFAULT_BADGE_IS_UPPERCASE,
		size: sizeProp = DEFAULT_BADGE_SIZE,
		variant: variantProp = DEFAULT_BADGE_VARIANT,
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
	} = useBadgeResponsiveValues<Element>({
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

	const config = useBadgeSizeConfig<Element>({ isCompact, isRound, size, variant });

	const classes = useBadgeClasses<Element>({ isCompact, isFullWidth, isRound, isUppercase, size, variant });

	const { focusProps } = useFocus({ onFocus: () => setIsFocused.on(), onBlur: () => setIsFocused.off() });

	return (
		<BadgeContext.Provider value={{ color, colorMode, size, variant }}>
			<PushableOverlay
				{...focusProps}
				{...(rest as PushableOverlayProps<Element>)}
				as={as}
				ref={ref}
				className={classNames(KEYS_BADGE_CLASS, classes, { [className]: !!className })}
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
							<Center
								ref={childrenRef as CenterRef<PolymorphicDefaultElement>}
								as='span'
								w='100%'
								h='100%'
							>
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

// Badge.displayName = 'Badge';

export default Badge;
