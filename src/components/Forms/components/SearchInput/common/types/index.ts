import type { ReactNode } from 'react';

import type { PolymorphicElementType, ResponsiveValueProps, ThemeAppAppearanceProps } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { ButtonDefaultElement, ButtonProps, IconButtonDefaultElement, IconButtonProps } from '@components/Buttons';
import type {
	FormsCommonSize,
	FormsCommonVariant,
	FormsNonResponsiveValueProps,
	FormsResponsiveValueProps
} from '@components/Forms/common/types';

export type SearchInputDefaultElement = 'input';
export type SearchInputElement = Extract<PolymorphicElementType, 'input'>;

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

export type SearchInputRenderProps = ThemeAppAppearanceProps & {
	w?: number;
	h?: number;
};

export type SearchInputNonResponsiveValueProps = FormsNonResponsiveValueProps & { initialQuery?: string };
export type SearchInputResponsiveValueProps = FormsResponsiveValueProps &
	ResponsiveValueProps<SearchInputNonResponsiveValueProps>;

export type SearchInputUniqueProps = ThemeAppAppearanceProps & {
	renderClear?: (props: SearchInputRenderClearProps) => ReactNode;
	renderSubmit?: (props: SearchInputRenderSubmitProps) => ReactNode;
	renderLeft?: (props: SearchInputRenderProps) => ReactNode;
	renderRight?: (props: SearchInputRenderProps) => ReactNode;
	onClear?: () => void;
	onFilter?: (query: string) => void;
	onSubmit?: (query: string) => void;
} & SearchInputResponsiveValueProps;

export type SearchInputProps<Element extends SearchInputElement> = Omit<
	BoxProps<Element, SearchInputUniqueProps>,
	'children' | 'onChange' | 'value'
>;

export type SearchInputRef<Element extends SearchInputElement> = BoxRef<Element>;
