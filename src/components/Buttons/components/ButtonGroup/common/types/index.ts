import type { PolymorphicDefaultElement, PolymorphicElementType, ResponsiveValue } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { ButtonDefaultElement, ButtonProps } from '@components/Buttons';
import type { StackProps } from '@components/Layout';

export type ButtonGroupDefaultElement = PolymorphicDefaultElement;
export type ButtonGroupElement = Extract<PolymorphicElementType, 'div'>;

type PickedButtonProps =
	| 'color'
	| 'colorMode'
	| 'isCompact'
	| 'isDisabled'
	| 'isFullWidth'
	| 'isRound'
	| 'size'
	| 'variant';
type ButtonGroupOtherProps = Pick<ButtonProps<ButtonDefaultElement>, PickedButtonProps> & {
	/**
	 * If true, the borderRadius of button that are direct children will be altered to look flushed together
	 *
	 * @default false
	 */
	isAttached?: ResponsiveValue<boolean>;
} & Pick<StackProps<PolymorphicDefaultElement>, 'direction' | 'spacing'>;

export type ButtonGroupProps<Element extends ButtonGroupElement> = BoxProps<Element, ButtonGroupOtherProps>;

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
