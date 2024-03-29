import type { ReactNode } from 'react';

import type { PolymorphicElementType, ResponsiveValue, ThemeAppAppearanceProps, ThemeFontSize } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { DummyPushableOverlayProps } from '@components/Overlay';

export type DummyBadgeDefaultElement = 'span';
export type DummyBadgeElement = Extract<PolymorphicElementType, 'span'>;

export type DummyBadgeSize = ThemeFontSize;

export type DummyBadgeVariant = 'contained' | 'light' | 'dark' | 'outlined' | 'monochrome' | 'text';

export type DummyBadgeRenderProps<Element extends DummyBadgeElement> = Pick<
	DummyBadgeOtherProps<Element>,
	'color' | 'colorMode'
> & { w?: number; h?: number };

type DummyBadgeOtherProps<Element extends DummyBadgeElement> = ThemeAppAppearanceProps & {
	/**
	 * Callback invoked to render the action button
	 */
	renderAction?: () => ReactNode;
	/**
	 * Callback invoked to render the element to the left of the text
	 */
	renderLeft?: (props: DummyBadgeRenderProps<Element>) => ReactNode;
	/**
	 * Callback invoked to render the element to the right of the text
	 */
	renderRight?: (props: DummyBadgeRenderProps<Element>) => ReactNode;
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
	size?: ResponsiveValue<DummyBadgeSize>;
	/**
	 * The variant of the badge
	 *
	 * @default 'contained'
	 */
	variant?: ResponsiveValue<DummyBadgeVariant>;
} & Pick<DummyPushableOverlayProps<Element>, 'isAnimated' | 'isOutlined'>;

export type DummyBadgeProps<Element extends DummyBadgeElement> = BoxProps<Element, DummyBadgeOtherProps<Element>>;

export type DummyBadgeRef<Element extends DummyBadgeElement> = BoxRef<Element>;

export type DummyBadgeContext<Element extends DummyBadgeElement> = Pick<
	DummyBadgeProps<Element>,
	'color' | 'colorMode' | 'size' | 'variant'
>;
