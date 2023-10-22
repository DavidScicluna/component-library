import type { ElementType, ReactNode } from 'react';

import type { PickFrom, PolymorphicChangeEvent, PolymorphicFocusEvent, PolymorphicMouseEvent } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { FormsCommonProps, FormsCommonSize, FormsCommonVariant } from '@components/Forms';

export type InputMouseEvent<Element extends InputElement = InputDefaultElement> = PolymorphicMouseEvent<Element>;
export type InputChangeEvent<Element extends InputElement = InputDefaultElement> = PolymorphicChangeEvent<Element>;
export type InputFocusEvent<Element extends InputElement = InputDefaultElement> = PolymorphicFocusEvent<Element>;

export type InputDefaultElement = 'input';
export type InputElement = PickFrom<ElementType, 'input'>;

// export type InputAutoComplete = 'on' | 'password' | 'off';

export type InputSize = FormsCommonSize;

export type InputVariant = FormsCommonVariant;

export type InputRenderProps<Element extends InputElement = InputDefaultElement> = Pick<
	InputOtherProps<Element>,
	'color' | 'colorMode'
> & { w?: number; h?: number };

type PickedFormsCommonProps =
	| 'color'
	| 'colorMode'
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

type InputOtherProps<Element extends InputElement = InputDefaultElement> = {
	// autoComplete?: InputAutoComplete;
	renderLeft?: (props: InputRenderProps<Element>) => ReactNode;
	renderRight?: (props: InputRenderProps<Element>) => ReactNode;
} & Pick<FormsCommonProps, PickedFormsCommonProps>;

export type InputProps<Element extends InputElement = InputDefaultElement> = Omit<
	BoxProps<Element, InputOtherProps<Element>>,
	'children' | keyof Omit<BoxOtherProps, 'w' | 'minW' | 'maxW' | 'h' | 'minH' | 'maxH'>
>;

export type InputRef<Element extends InputElement = InputDefaultElement> = BoxRef<Element>;
