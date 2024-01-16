import type {
	PolymorphicDefaultElement,
	PolymorphicElementType,
	ResponsiveValue,
	ThemeAppAppearanceProps,
	ThemeRadius
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type DummyPushableOverlayVariant =
	| 'contained'
	| 'light'
	| 'dark'
	| 'outlined'
	| 'monochrome'
	| 'transparent'
	| 'unstyled';

// TODO: Go over and add ResponsiveValue to all props except of function props
type DummyPushableOverlayOtherProps = ThemeAppAppearanceProps & {
	/**
	 *  If `true` the container will not have the pulse animation
	 *
	 * @default true
	 */
	isAnimated?: ResponsiveValue<boolean>;
	/**
	 * If `true`, the container will have an outline
	 *
	 * @default false
	 */
	isOutlined?: ResponsiveValue<boolean>;
	/**
	 *  The radius of the container
	 *
	 * @default 'base'
	 */
	radius?: ResponsiveValue<ThemeRadius>;
	/**
	 *  The variant of the container
	 *
	 * @default 'base'
	 */
	variant?: ResponsiveValue<DummyPushableOverlayVariant>;
};

export type DummyPushableOverlayProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxProps<
	Element,
	DummyPushableOverlayOtherProps
>;

export type DummyPushableOverlayRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> =
	BoxRef<Element>;
