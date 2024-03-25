import type { PolymorphicElementType, ResponsiveValueProps, ThemeAppAppearanceProps, ThemeRadius } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type PushableOverlayVariant =
	| 'contained'
	| 'light'
	| 'dark'
	| 'outlined'
	| 'monochrome'
	| 'transparent'
	| 'unstyled';

export type PushableOverlayNonResponsiveValueProps = {
	/**
	 * If `true`, the container will have the active styling
	 *
	 * @default false
	 */
	isActive?: boolean;
	/**
	 * If `true`, the container will have the disabled styling
	 *
	 * @default false
	 */
	isDisabled?: boolean;
	/**
	 * If `true`, the container will not be interactable
	 *
	 * @default false
	 */
	isFixed?: boolean;
	/**
	 * If `true`, the container will be focused on
	 *
	 * @default false
	 */
	isFocused?: boolean;
	/**
	 * If `true`, the container will have an outline
	 *
	 * @default false
	 */
	isOutlined?: boolean;
	/**
	 * If `true`, the container will be pushable
	 *
	 * @default true
	 */
	isPushable?: boolean;
	/**
	 *  The radius of the container
	 *
	 * @default 'base'
	 */
	radius?: ThemeRadius;
	/**
	 *  The variant of the container
	 *
	 * @default 'contained'
	 */
	variant?: PushableOverlayVariant;
};
export type PushableOverlayResponsiveValueProps = ResponsiveValueProps<PushableOverlayNonResponsiveValueProps>;

export type PushableOverlayUniqueProps = ThemeAppAppearanceProps & PushableOverlayResponsiveValueProps;

export type PushableOverlayProps<Element extends PolymorphicElementType> = BoxProps<
	Element,
	PushableOverlayUniqueProps
>;

export type PushableOverlayRef<Element extends PolymorphicElementType> = BoxRef<Element>;
