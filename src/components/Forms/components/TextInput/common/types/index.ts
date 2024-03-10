import type { ReactNode } from 'react';

import type { PolymorphicElementType } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { FormsCommonProps, FormsCommonSize, FormsCommonVariant } from '@components/Forms/common/types';

export type TextInputDefaultElement = 'input';
export type TextInputElement = Extract<PolymorphicElementType, 'input'>;

export type TextInputSize = FormsCommonSize;

export type TextInputVariant = FormsCommonVariant;

export type TextInputRenderProps<Element extends TextInputElement> = Pick<
	TextInputOtherProps<Element>,
	'color' | 'colorMode'
> & { w?: number; h?: number };

type PickedFormsCommonProps =
	| 'color'
	| 'colorMode'
	| 'isCompact'
	| 'isDisabled'
	| 'isFullWidth'
	| 'isError'
	| 'isFocused'
	| 'isOutlined'
	| 'isReadOnly'
	| 'isRequired'
	| 'isSuccess'
	| 'isWarning'
	| 'size'
	| 'variant';

type TextInputOtherProps<Element extends TextInputElement> = {
	renderLeft?: (props: TextInputRenderProps<Element>) => ReactNode;
	renderRight?: (props: TextInputRenderProps<Element>) => ReactNode;
} & Pick<FormsCommonProps, PickedFormsCommonProps>;

export type TextInputProps<Element extends TextInputElement> = Omit<
	BoxProps<Element, TextInputOtherProps<Element>>,
	'children'
>;

export type TextInputRef<Element extends TextInputElement> = BoxRef<Element>;
