import type {
	PolymorphicDefaultElement,
	PolymorphicElementType,
	ResponsiveValueProps,
	ThemeAppAppearanceProps
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { ButtonNonResponsiveValueProps } from '@components/Buttons';
import type { StackNonResponsiveValueProps } from '@components/Layout';

export type ButtonGroupDefaultElement = PolymorphicDefaultElement;
export type ButtonGroupElement = Extract<PolymorphicElementType, 'div'>;

export type ButtonGroupNonResponsiveValueProps = Pick<StackNonResponsiveValueProps, 'direction' | 'spacing'> & {
	/**
	 * If true, the borderRadius of button that are direct children will be altered to look flushed together
	 *
	 * @default false
	 */
	isAttached?: boolean;
} & Pick<ButtonNonResponsiveValueProps, 'isCompact' | 'isDisabled' | 'isFullWidth' | 'isRound' | 'size' | 'variant'>;
export type ButtonGroupResponsiveValueProps = ResponsiveValueProps<ButtonGroupNonResponsiveValueProps>;

export type ButtonGroupUniqueProps = ThemeAppAppearanceProps & ButtonGroupResponsiveValueProps;

export type ButtonGroupProps<Element extends ButtonGroupElement> = BoxProps<Element, ButtonGroupUniqueProps>;

export type ButtonGroupRef<Element extends ButtonGroupElement> = BoxRef<Element>;

type PickedButtonGroupProps =
	| 'color'
	| 'colorMode'
	| 'direction'
	| 'isAttached'
	| 'isCompact'
	| 'isDisabled'
	| 'isFullWidth'
	| 'isRound'
	| 'size'
	| 'variant';
export type ButtonGroupContext<Element extends ButtonGroupElement> = Pick<
	ButtonGroupProps<Element>,
	PickedButtonGroupProps
>;
