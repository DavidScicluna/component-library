import type { IconKey, PolymorphicElementType, ResponsiveValue } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { FormsCommonProps, FormsCommonSize } from '@components/Forms/common/types';

export type RatingDirection = 'horizontal' | 'vertical';

export type RatingHighlightMode = 'trailing' | 'single';

export type RatingIcons = Record<'default' | 'active' | 'hover', IconKey>;

export type RatingSize = FormsCommonSize;

type PickedFormsCommonProps =
	| 'color'
	| 'colorMode'
	| 'isDisabled'
	| 'isError'
	| 'isReadOnly'
	| 'isRequired'
	| 'isSuccess'
	| 'isWarning'
	| 'size';

type RatingOtherProps = Pick<FormsCommonProps, PickedFormsCommonProps> & {
	/**
	 * Number of controls that should be rendered
	 *
	 * @default 10
	 */
	count?: ResponsiveValue<number>;
	/**
	 * The direction in which the rating is directed
	 *
	 * @default 'horizontal'
	 */
	direction?: ResponsiveValue<RatingDirection>;
	/**
	 * If 'single', only the selected/hovered control will change color
	 *
	 * @default 'horizontal'
	 */
	highlightMode?: ResponsiveValue<RatingHighlightMode>;
	/**
	 * The icon used for each control depending on state
	 *
	 * @default { default: 'star_outline'; active: 'star'; hover: 'star' }
	 */
	icons?: ResponsiveValue<RatingIcons>;
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
};

export type RatingProps<Element extends PolymorphicElementType> = Omit<BoxProps<Element, RatingOtherProps>, 'children'>;

export type RatingRef<Element extends PolymorphicElementType> = BoxRef<Element>;
