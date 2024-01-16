import type {
	PolymorphicDefaultElement,
	PolymorphicElementType,
	ResponsiveValue,
	ThemeAppAppearanceProps,
	ThemeRadius
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

type SkeletonOtherProps = ThemeAppAppearanceProps & {
	/**
	 *  If `true` the skeleton will not have the pulse animation
	 *
	 * @default true
	 */
	isAnimated?: ResponsiveValue<boolean>;
	/**
	 *  If `true` the skeleton will be animated out and the children will be animated in
	 *
	 * @default false
	 */
	isLoaded?: ResponsiveValue<boolean>;
	/**
	 *  The radius of the container
	 *
	 * @default 'base'
	 */
	radius?: ResponsiveValue<ThemeRadius>;
};

export type SkeletonProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxProps<
	Element,
	SkeletonOtherProps
>;

export type SkeletonRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxRef<Element>;
