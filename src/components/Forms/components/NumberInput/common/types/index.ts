import type { ElementType, ReactNode } from 'react';

import type {
	PolymorphicChangeEvent,
	PolymorphicFocusEvent,
	PolymorphicMouseEvent,
	ResponsiveValue
} from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { FormsCommonProps, FormsCommonSize, FormsCommonVariant } from '@components/Forms';

export type NumberInputMouseEvent<Element extends NumberInputElement = NumberInputDefaultElement> =
	PolymorphicMouseEvent<Element>;
export type NumberInputChangeEvent<Element extends NumberInputElement = NumberInputDefaultElement> =
	PolymorphicChangeEvent<Element>;
export type NumberInputFocusEvent<Element extends NumberInputElement = NumberInputDefaultElement> =
	PolymorphicFocusEvent<Element>;

export type NumberInputDefaultElement = 'input';
export type NumberInputElement = Extract<ElementType, 'input'>;

// export type NumberInputAutoComplete = 'on' | 'password' | 'off';

export type NumberInputSize = FormsCommonSize;

export type NumberInputVariant = FormsCommonVariant;

export type NumberInputRenderProps<Element extends NumberInputElement = NumberInputDefaultElement> = Pick<
	NumberInputOtherProps<Element>,
	'color' | 'colorMode'
> & { w?: number; h?: number };

type PickedFormsCommonProps =
	| 'color'
	| 'colorMode'
	| 'isCompact'
	| 'isDisabled'
	| 'isError'
	| 'isFocused'
	| 'isOutlined'
	| 'isReadOnly'
	| 'isRequired'
	| 'isSuccess'
	| 'isWarning'
	| 'size'
	| 'variant';

type NumberInputOtherProps<Element extends NumberInputElement = NumberInputDefaultElement> = {
	// autoComplete?: NumberInputAutoComplete;
	renderLeft?: (props: NumberInputRenderProps<Element>) => ReactNode;
	renderRight?: (props: NumberInputRenderProps<Element>) => ReactNode;
	/**
	 * Value set to the input when increment/decrement buttons are clicked or up/down arrows pressed if the input is empty, 0 by default
	 * @default 0
	 */
	startValue?: ResponsiveValue<number>;
	/**
	 * Determines whether negative values are allowed, `true` by default
	 * @default true
	 */
	isNegativeAllowed?: ResponsiveValue<boolean>;
	onIncrement?: (value: number) => void;
	onDecrement?: (value: number) => void;
} & Pick<FormsCommonProps, PickedFormsCommonProps>;

type OmittedBoxProps = 'children' | keyof Omit<BoxOtherProps, 'w' | 'minW' | 'maxW' | 'h' | 'minH' | 'maxH'>;

export type NumberInputProps<Element extends NumberInputElement = NumberInputDefaultElement> = Omit<
	BoxProps<Element, NumberInputOtherProps<Element>>,
	OmittedBoxProps
>;

export type NumberInputRef<Element extends NumberInputElement = NumberInputDefaultElement> = BoxRef<Element>;
