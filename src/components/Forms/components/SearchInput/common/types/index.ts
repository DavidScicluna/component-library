import type { ReactNode } from 'react';

import type {
	PolymorphicChangeEvent,
	PolymorphicElementType,
	PolymorphicFocusEvent,
	PolymorphicMouseEvent,
	ResponsiveValue
} from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { ButtonDefaultElement, ButtonProps, IconButtonDefaultElement, IconButtonProps } from '@components/Buttons';
import type { FormsCommonProps, FormsCommonSize, FormsCommonVariant } from '@components/Forms/common/types';

export type SearchInputDefaultElement = 'input';
export type SearchInputElement = Extract<PolymorphicElementType, 'input'>;

export type SearchInputMouseEvent<Element extends SearchInputElement> = PolymorphicMouseEvent<Element>;
export type SearchInputChangeEvent<Element extends SearchInputElement> = PolymorphicChangeEvent<Element>;
export type SearchInputFocusEvent<Element extends SearchInputElement> = PolymorphicFocusEvent<Element>;

// export type SearchInputAutoComplete = 'on' | 'password' | 'off';

export type SearchInputSize = FormsCommonSize;

export type SearchInputVariant = FormsCommonVariant;

export type SearchInputRenderClearProps = Pick<
	IconButtonProps<IconButtonDefaultElement>,
	'color' | 'colorMode' | 'isCompact' | 'onClick' | 'size' | 'variant'
>;
export type SearchInputRenderSubmitProps = Pick<
	ButtonProps<ButtonDefaultElement>,
	'color' | 'colorMode' | 'isCompact' | 'isDisabled' | 'isRound' | 'onClick' | 'size' | 'variant'
>;

export type SearchInputRenderProps<Element extends SearchInputElement> = Pick<
	SearchInputOtherProps<Element>,
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

type SearchInputOtherProps<Element extends SearchInputElement> = {
	renderClear?: (props: SearchInputRenderClearProps) => ReactNode;
	renderSubmit?: (props: SearchInputRenderSubmitProps) => ReactNode;
	renderLeft?: (props: SearchInputRenderProps<Element>) => ReactNode;
	renderRight?: (props: SearchInputRenderProps<Element>) => ReactNode;
	initialQuery?: ResponsiveValue<string>;
	onClear?: () => void;
	onFilter?: (query: string) => void;
	onSubmit?: (query: string) => void;
} & Pick<FormsCommonProps, PickedFormsCommonProps>;

type OmittedBoxProps =
	| 'children'
	| 'onChange'
	| 'value'
	| keyof Omit<BoxOtherProps, 'w' | 'minW' | 'maxW' | 'h' | 'minH' | 'maxH'>;

export type SearchInputProps<Element extends SearchInputElement> = Omit<
	BoxProps<Element, SearchInputOtherProps<Element>>,
	OmittedBoxProps
>;

export type SearchInputRef<Element extends SearchInputElement> = BoxRef<Element>;
