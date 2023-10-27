import type { ElementType, ReactNode } from 'react';

import type { PickFrom, PolymorphicChangeEvent, PolymorphicFocusEvent, PolymorphicMouseEvent } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { FormsCommonProps, FormsCommonSize, FormsCommonVariant } from '@components/Forms';

export type EmailInputMouseEvent<Element extends EmailInputElement = EmailInputDefaultElement> =
	PolymorphicMouseEvent<Element>;
export type EmailInputChangeEvent<Element extends EmailInputElement = EmailInputDefaultElement> =
	PolymorphicChangeEvent<Element>;
export type EmailInputFocusEvent<Element extends EmailInputElement = EmailInputDefaultElement> =
	PolymorphicFocusEvent<Element>;

export type EmailInputDefaultElement = 'input';
export type EmailInputElement = PickFrom<ElementType, 'input'>;

// export type EmailInputAutoComplete = 'on' | 'password' | 'off';

export type EmailInputSize = FormsCommonSize;

export type EmailInputVariant = FormsCommonVariant;

export type EmailInputRenderProps<Element extends EmailInputElement = EmailInputDefaultElement> = Pick<
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

type EmailInputOtherProps<Element extends EmailInputElement = EmailInputDefaultElement> = {
	// autoComplete?: EmailInputAutoComplete;
	renderLeft?: (props: EmailInputRenderProps<Element>) => ReactNode;
	renderRight?: (props: EmailInputRenderProps<Element>) => ReactNode;
} & Pick<FormsCommonProps, PickedFormsCommonProps>;

type OmittedBoxProps = 'children' | keyof Omit<BoxOtherProps, 'w' | 'minW' | 'maxW' | 'h' | 'minH' | 'maxH'>;

export type EmailInputProps<Element extends EmailInputElement = EmailInputDefaultElement> = Omit<
	BoxProps<Element>,
	OmittedBoxProps
> &
	EmailInputOtherProps<Element>;

export type EmailInputRef<Element extends EmailInputElement = EmailInputDefaultElement> = BoxRef<Element>;
