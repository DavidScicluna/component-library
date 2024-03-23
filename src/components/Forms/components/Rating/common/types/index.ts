import type { IconKey, PolymorphicElementType, ResponsiveValueProps, ThemeAppAppearanceProps } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type {
	FormsCommonSize,
	FormsNonResponsiveValueProps,
	FormsResponsiveValueProps
} from '@components/Forms/common/types';

export type RatingDirection = 'horizontal' | 'vertical';

export type RatingHighlightMode = 'trailing' | 'single';

export type RatingIcons = Record<'default' | 'active' | 'hover', IconKey>;

export type RatingSize = FormsCommonSize;

export type RatingNonResponsiveValueProps = Omit<FormsNonResponsiveValueProps, 'variant'> & {
	/**
	 * Number of controls that should be rendered
	 *
	 * @default 10
	 */
	count?: number;
	/**
	 * The direction in which the rating is directed
	 *
	 * @default 'horizontal'
	 */
	direction?: RatingDirection;
	/**
	 * If 'single', only the selected/hovered control will change color
	 *
	 * @default 'horizontal'
	 */
	highlightMode?: RatingHighlightMode;
	/**
	 * The icon used for each control depending on state
	 *
	 * @default { default: 'star_outline'; active: 'star'; hover: 'star' }
	 */
	icons?: RatingIcons;
};
export type RatingResponsiveValueProps = Omit<FormsResponsiveValueProps, 'variant'> &
	ResponsiveValueProps<RatingNonResponsiveValueProps>;

export type RatingUniqueProps = ThemeAppAppearanceProps & {
	/**
	 * Called when value changes
	 */
	onChange?: (value: number) => void;
	/**
	 * Called when item is hovered
	 */
	onHover?: (value: number, isHovering: boolean) => void;
	/**
	 * Value for controlled component
	 */
	value?: number;
} & RatingResponsiveValueProps;

export type RatingProps<Element extends PolymorphicElementType> = Omit<
	BoxProps<Element, RatingUniqueProps>,
	'children'
>;

export type RatingRef<Element extends PolymorphicElementType> = BoxRef<Element>;
