import type { ElementType } from 'react';

import type { UseBooleanToggles } from '@common/hooks/useBoolean';
import type {
	PolymorphicMouseEvent,
	ResponsiveValue,
	ThemeAppAppearanceProps,
	ThemeRadius,
	ThemeSpacing
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { PushableOverlayProps } from '@components/Overlay';

export type CardMouseEvent<Element extends ElementType> = PolymorphicMouseEvent<Element>;

export type CardVariant = 'contained' | 'light' | 'dark' | 'outlined' | 'monochrome' | 'transparent';

type CardOtherProps<Element extends ElementType> = ThemeAppAppearanceProps & {
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

export type CardProps<Element extends ElementType> = BoxProps<Element> & CardOtherProps<Element>;

export type CardRef<Element extends ElementType> = BoxRef<Element>;

export type CardContext<Element extends ElementType> = Pick<
	CardProps<Element>,
	'color' | 'colorMode' | 'isCollapsable' | 'isDisabled' | 'isDivisible' | 'isOpen' | 'spacing' | 'variant'
> & { isHovering: boolean; onHover: UseBooleanToggles };
