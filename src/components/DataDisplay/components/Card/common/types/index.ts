import type { UseBooleanToggles } from '@common/hooks/useBoolean';
import type {
	PolymorphicElementType,
	ResponsiveValueProps,
	ThemeAppAppearanceProps,
	ThemeRadius,
	ThemeSpacing
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { PushableOverlayNonResponsiveValueProps } from '@components/Overlay';

export type CardDefaultElement = 'div';
export type CardElement = Extract<PolymorphicElementType, 'div'>;

export type CardVariant = 'contained' | 'light' | 'dark' | 'outlined' | 'monochrome' | 'transparent';

export type CardNonResponsiveValueProps = {
	/**
	 * If true, the card will be clickable
	 *
	 * @default false
	 */
	isClickable?: boolean;
	/**
	 * If true, the card will be collapsable
	 *
	 * @default false
	 */
	isCollapsable?: boolean;
	/**
	 * If true, the card will have a divider
	 *
	 * @default true
	 */
	isDivisible?: boolean;
	/**
	 * If true, the collapsable card will be opened
	 */
	isOpen?: boolean;
	/**
	 *  The radius of the container
	 *
	 * @default 'lg'
	 */
	radius?: ThemeRadius;
	/**
	 *  The spacing between the children of the container
	 *
	 * @default 2
	 */
	spacing?: ThemeSpacing;
	/**
	 * The variant of the card
	 *
	 * @default 'monochrome'
	 */
	variant?: CardVariant;
} & Pick<PushableOverlayNonResponsiveValueProps, 'isActive' | 'isDisabled' | 'isFixed' | 'isOutlined'>;
export type CardResponsiveValueProps = ResponsiveValueProps<CardNonResponsiveValueProps>;

export type CardUniqueProps = ThemeAppAppearanceProps & {
	/**
	 * Callback invoked to open and close the collapsable card
	 */
	onToggle?: (isOpen: boolean) => void;
} & CardResponsiveValueProps;

export type CardProps<Element extends CardElement> = BoxProps<Element, CardUniqueProps>;

export type CardRef<Element extends CardElement> = BoxRef<Element>;

type PickedCardProps =
	| 'color'
	| 'colorMode'
	| 'isCollapsable'
	| 'isDisabled'
	| 'isDivisible'
	| 'isOpen'
	| 'spacing'
	| 'variant';
export type CardContext<Element extends CardElement> = Pick<CardProps<Element>, PickedCardProps> & {
	isHovering: boolean;
	onHover: UseBooleanToggles;
};
