import type { UseBooleanToggles } from '@common/hooks/useBoolean';
import type {
	PolymorphicElementType,
	ResponsiveValue,
	ThemeAppAppearanceProps,
	ThemeRadius,
	ThemeSpacing
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { PushableOverlayProps } from '@components/Overlay';

export type CardDefaultElement = 'div';
export type CardElement = Extract<PolymorphicElementType, 'div'>;

export type CardVariant = 'contained' | 'light' | 'dark' | 'outlined' | 'monochrome' | 'transparent';

type CardOtherProps<Element extends CardElement> = ThemeAppAppearanceProps & {
	/**
	 * If true, the card will be clickable
	 *
	 * @default false
	 */
	isClickable?: ResponsiveValue<boolean>;
	/**
	 * If true, the card will be collapsable
	 *
	 * @default false
	 */
	isCollapsable?: ResponsiveValue<boolean>;
	/**
	 * If true, the card will have a divider
	 *
	 * @default true
	 */
	isDivisible?: ResponsiveValue<boolean>;
	/**
	 * If true, the collapsable card will be opened
	 */
	isOpen?: boolean;
	/**
	 * Callback invoked to open and close the collapsable card
	 */
	onToggle?: (isOpen: boolean) => void;
	/**
	 *  The radius of the container
	 *
	 * @default 'lg'
	 */
	radius?: ResponsiveValue<ThemeRadius>;
	/**
	 *  The spacing between the children of the container
	 *
	 * @default 2
	 */
	spacing?: ResponsiveValue<ThemeSpacing>;
	/**
	 * The variant of the card
	 *
	 * @default 'monochrome'
	 */
	variant?: ResponsiveValue<CardVariant>;
} & Pick<PushableOverlayProps<Element>, 'isActive' | 'isDisabled' | 'isFixed' | 'isOutlined'>;

export type CardProps<Element extends CardElement> = BoxProps<Element, CardOtherProps<Element>>;

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
