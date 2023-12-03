import type { ElementType, ReactNode } from 'react';

import type { PickFrom, PolymorphicChangeEvent, PolymorphicFocusEvent, PolymorphicMouseEvent } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { ButtonProps, IconButtonProps } from '@components/Buttons';
import type { FormsCommonProps, FormsCommonSize, FormsCommonVariant } from '@components/Forms';

export type SearchInputMouseEvent<Element extends SearchInputElement = SearchInputDefaultElement> =
	PolymorphicMouseEvent<Element>;
export type SearchInputChangeEvent<Element extends SearchInputElement = SearchInputDefaultElement> =
	PolymorphicChangeEvent<Element>;
export type SearchInputFocusEvent<Element extends SearchInputElement = SearchInputDefaultElement> =
	PolymorphicFocusEvent<Element>;

export type SearchInputDefaultElement = 'input';
export type SearchInputElement = PickFrom<ElementType, 'input'>;

// export type SearchInputAutoComplete = 'on' | 'password' | 'off';

export type SearchInputSize = FormsCommonSize;

export type SearchInputVariant = FormsCommonVariant;

export type SearchInputRenderClearProps = Pick<
	IconButtonProps,
	'color' | 'colorMode' | 'isCompact' | 'onClick' | 'size' | 'variant'
>;
export type SearchInputRenderSubmitProps = Pick<
	ButtonProps,
	'color' | 'colorMode' | 'isCompact' | 'isDisabled' | 'isRound' | 'onClick' | 'size' | 'variant'
>;

export type SearchInputRenderProps<Element extends SearchInputElement = SearchInputDefaultElement> = Pick<
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

type SearchInputOtherProps<Element extends SearchInputElement = SearchInputDefaultElement> = {
	// autoComplete?: SearchInputAutoComplete;
	renderClear?: (props: SearchInputRenderClearProps) => ReactNode;
	renderSubmit?: (props: SearchInputRenderSubmitProps) => ReactNode;
	renderLeft?: (props: SearchInputRenderProps<Element>) => ReactNode;
	renderRight?: (props: SearchInputRenderProps<Element>) => ReactNode;
	initialQuery?: string;
	onClear?: () => void;
	onFilter?: (query: string) => void;
	onSubmit?: (query: string) => void;
} & Pick<FormsCommonProps, PickedFormsCommonProps>;

type OmittedBoxProps =
	| 'children'
	| 'onChange'
	| 'value'
	| keyof Omit<BoxOtherProps, 'w' | 'minW' | 'maxW' | 'h' | 'minH' | 'maxH'>;

export type SearchInputProps<Element extends SearchInputElement = SearchInputDefaultElement> = Omit<
	BoxProps<Element, SearchInputOtherProps<Element>>,
	OmittedBoxProps
>;

export type SearchInputRef<Element extends SearchInputElement = SearchInputDefaultElement> = BoxRef<Element>;
