import type { ReactNode } from 'react';

import type { PolymorphicElementType, ResponsiveValue, ThemeAppAppearanceProps, ThemeFontSize } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { PushableOverlayProps } from '@components/Overlay';

export type BadgeDefaultElement = 'span';
export type BadgeElement = Extract<PolymorphicElementType, 'span'>;

export type BadgeSize = ThemeFontSize;

export type BadgeVariant = 'contained' | 'light' | 'dark' | 'outlined' | 'monochrome' | 'text';

export type BadgeRenderProps<Element extends BadgeElement> = Pick<BadgeOtherProps<Element>, 'color' | 'colorMode'> & {
	w?: number;
	h?: number;
};

type BadgeOtherProps<Element extends BadgeElement> = ThemeAppAppearanceProps & {
	/**
	 * Callback invoked to render the action button
	 */
	renderAction?: () => ReactNode;
	/**
	 * Callback invoked to render the element to the left of the text
	 */
	renderLeft?: (props: BadgeRenderProps<Element>) => ReactNode;
	/**
	 * Callback invoked to render the element to the right of the text
	 */
	renderRight?: (props: BadgeRenderProps<Element>) => ReactNode;
	/**
	 * If true, the badge will be clickable
	 *
	 * @default false
	 */
	isClickable?: ResponsiveValue<boolean>;
	/**
	 * If true, the badge will be styled in a more compressed state
	 *
	 * @default false
	 */
	isCompact?: ResponsiveValue<boolean>;
	/**
	 * If true, the badge will take the full width of its parent
	 *
	 * @default false
	 */
	isFullWidth?: ResponsiveValue<boolean>;
	/**
	 * If true, the badge's border-radius will be styled in its fullest mode
	 *
	 * @default false
	 */
	isRound?: ResponsiveValue<boolean>;
	/**
	 * If true, the badge text will be in uppercase else it will be capitalized
	 *
	 * @default true
	 */
	isUppercase?: ResponsiveValue<boolean>;
	/**
	 * The size of the badge
	 *
	 * @default 'md'
	 */
	size?: ResponsiveValue<BadgeSize>;
	/**
	 * The variant of the badge
	 *
	 * @default 'contained'
	 */
	variant?: ResponsiveValue<BadgeVariant>;
} & Pick<PushableOverlayProps<Element>, 'isActive' | 'isDisabled' | 'isOutlined'>;

export type BadgeProps<Element extends BadgeElement> = BoxProps<Element, BadgeOtherProps<Element>>;

export type BadgeRef<Element extends BadgeElement> = BoxRef<Element>;

export type BadgeContext<Element extends BadgeElement> = Pick<
	BadgeProps<Element>,
	'color' | 'colorMode' | 'size' | 'variant'
>;
