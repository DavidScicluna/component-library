import type { ReactNode } from 'react';

import type {
	PolymorphicChangeEvent,
	PolymorphicElementType,
	PolymorphicFocusEvent,
	PolymorphicMouseEvent
} from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { FormsCommonProps, FormsCommonSize, FormsCommonVariant } from '@components/Forms/common/types';

export type EmailInputDefaultElement = 'input';
export type EmailInputElement = Extract<PolymorphicElementType, 'input'>;

export type EmailInputMouseEvent<Element extends EmailInputElement> = PolymorphicMouseEvent<Element>;
export type EmailInputChangeEvent<Element extends EmailInputElement> = PolymorphicChangeEvent<Element>;
export type EmailInputFocusEvent<Element extends EmailInputElement> = PolymorphicFocusEvent<Element>;

// export type EmailInputAutoComplete = 'on' | 'password' | 'off';

export type EmailInputSize = FormsCommonSize;

export type EmailInputVariant = FormsCommonVariant;

export type EmailInputRenderProps<Element extends EmailInputElement> = Pick<
	EmailInputOtherProps<Element>,
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

type EmailInputOtherProps<Element extends EmailInputElement> = {
	// autoComplete?: EmailInputAutoComplete;
	renderLeft?: (props: EmailInputRenderProps<Element>) => ReactNode;
	renderRight?: (props: EmailInputRenderProps<Element>) => ReactNode;
} & Pick<FormsCommonProps, PickedFormsCommonProps>;

type OmittedBoxProps = 'children' | keyof Omit<BoxOtherProps, 'w' | 'minW' | 'maxW' | 'h' | 'minH' | 'maxH'>;

export type EmailInputProps<Element extends EmailInputElement> = Omit<
	BoxProps<Element, EmailInputOtherProps<Element>>,
	OmittedBoxProps
>;

export type EmailInputRef<Element extends EmailInputElement> = BoxRef<Element>;
