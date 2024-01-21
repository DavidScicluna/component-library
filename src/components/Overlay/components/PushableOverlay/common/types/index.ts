import type { PolymorphicElementType, ResponsiveValue, ThemeAppAppearanceProps, ThemeRadius } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type PushableOverlayVariant =
	| 'contained'
	| 'light'
	| 'dark'
	| 'outlined'
	| 'monochrome'
	| 'transparent'
	| 'unstyled';

// TODO: Go over and add ResponsiveValue to all props
type PushableOverlayOtherProps = ThemeAppAppearanceProps & {
	/**
	 * If `true`, the container will have the active styling
	 *
	 * @default false
	 */
	isActive?: ResponsiveValue<boolean>;
	/**
	 * If `true`, the container will have the disabled styling
	 *
	 * @default false
	 */
	isDisabled?: ResponsiveValue<boolean>;
	/**
	 * If `true`, the container will not be interactable
	 *
	 * @default false
	 */
	isFixed?: ResponsiveValue<boolean>;
	/**
	 * If `true`, the container will be focused on
	 *
	 * @default false
	 */
	isFocused?: ResponsiveValue<boolean>;
	/**
	 * If `true`, the container will have an outline
	 *
	 * @default false
	 */
	isOutlined?: ResponsiveValue<boolean>;
	/**
	 * If `true`, the container will be pushable
	 *
	 * @default true
	 */
	isPushable?: ResponsiveValue<boolean>;
	/**
	 *  The radius of the container
	 *
	 * @default 'base'
	 */
	radius?: ResponsiveValue<ThemeRadius>;
	/**
	 *  The variant of the container
	 *
	 * @default 'contained'
	 */
	variant?: ResponsiveValue<PushableOverlayVariant>;
};

export type PushableOverlayProps<Element extends PolymorphicElementType> = BoxProps<Element, PushableOverlayOtherProps>;

export type PushableOverlayRef<Element extends PolymorphicElementType> = BoxRef<Element>;
