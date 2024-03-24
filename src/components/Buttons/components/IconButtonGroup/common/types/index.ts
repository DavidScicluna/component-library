import type {
	PolymorphicDefaultElement,
	PolymorphicElementType,
	ResponsiveValueProps,
	ThemeAppAppearanceProps
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { IconButtonNonResponsiveValueProps } from '@components/Buttons';
import type { StackNonResponsiveValueProps } from '@components/Layout';

export type IconButtonGroupDefaultElement = PolymorphicDefaultElement;
export type IconButtonGroupElement = Extract<PolymorphicElementType, 'div'>;

export type IconButtonGroupNonResponsiveValueProps = Pick<StackNonResponsiveValueProps, 'direction' | 'spacing'> & {
	/**
	 * If true, the borderRadius of button that are direct children will be altered to look flushed together
	 *
	 * @default false
	 */
	isAttached?: boolean;
} & Pick<IconButtonNonResponsiveValueProps, 'isCompact' | 'isDisabled' | 'isRound' | 'size' | 'variant'>;
export type IconButtonGroupResponsiveValueProps = ResponsiveValueProps<IconButtonGroupNonResponsiveValueProps>;

export type IconButtonGroupUniqueProps = ThemeAppAppearanceProps & IconButtonGroupResponsiveValueProps;

export type IconButtonGroupProps<Element extends IconButtonGroupElement> = BoxProps<
	Element,
	IconButtonGroupUniqueProps
>;

export type IconButtonGroupRef<Element extends IconButtonGroupElement> = BoxRef<Element>;

type PickedIconButtonGroupProps =
	| 'color'
	| 'colorMode'
	| 'direction'
	| 'isAttached'
	| 'isCompact'
	| 'isDisabled'
	| 'isRound'
	| 'size'
	| 'variant';
export type IconButtonGroupContext<Element extends IconButtonGroupElement> = Pick<
	IconButtonGroupProps<Element>,
	PickedIconButtonGroupProps
>;
