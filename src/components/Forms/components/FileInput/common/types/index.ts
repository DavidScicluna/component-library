import type { ReactNode } from 'react';

import type {
	PolymorphicChangeEvent,
	PolymorphicElementType,
	PolymorphicFocusEvent,
	PolymorphicMouseEvent,
	ResponsiveValue
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { FileButtonDefaultElement, FileButtonProps } from '@components/Buttons';
import type { FormsCommonProps, FormsCommonSize, FormsCommonVariant } from '@components/Forms/common/types';

export type FileInputDefaultElement = 'input';
export type FileInputElement = Extract<PolymorphicElementType, 'input'>;

export type FileInputMouseEvent<Element extends FileInputElement> = PolymorphicMouseEvent<Element>;
export type FileInputChangeEvent<Element extends FileInputElement> = PolymorphicChangeEvent<Element>;
export type FileInputFocusEvent<Element extends FileInputElement> = PolymorphicFocusEvent<Element>;

export type FileInputSize = FormsCommonSize;

export type FileInputVariant = FormsCommonVariant;

export type FileInputRenderProps<Element extends FileInputElement> = Pick<
	FileInputOtherProps<Element>,
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

type FileInputOtherProps<Element extends FileInputElement> = Pick<
	FileButtonProps<FileButtonDefaultElement>,
	'accept' | 'onSuccess' | 'onError'
> & {
	renderLeft?: (props: FileInputRenderProps<Element>) => ReactNode;
	renderRight?: (props: FileInputRenderProps<Element>) => ReactNode;
	/**
	 * If true, multiple files will be allowed to be uploaded
	 *
	 * @default false
	 */
	isMultiple?: ResponsiveValue<boolean>;
} & Pick<FormsCommonProps, PickedFormsCommonProps>;

export type FileInputProps<Element extends FileInputElement> = Omit<
	BoxProps<Element, FileInputOtherProps<Element>>,
	'children'
>;

export type FileInputRef<Element extends FileInputElement> = BoxRef<Element>;
