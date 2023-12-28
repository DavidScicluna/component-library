import type { ElementType, ReactNode } from 'react';

import type {
	PolymorphicChangeEvent,
	PolymorphicFocusEvent,
	PolymorphicMouseEvent,
	ResponsiveValue
} from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { FileButtonProps } from '@components/Buttons';
import type { FormsCommonProps, FormsCommonSize, FormsCommonVariant } from '@components/Forms/common/types';

export type FileInputMouseEvent<Element extends FileInputElement = FileInputDefaultElement> =
	PolymorphicMouseEvent<Element>;
export type FileInputChangeEvent<Element extends FileInputElement = FileInputDefaultElement> =
	PolymorphicChangeEvent<Element>;
export type FileInputFocusEvent<Element extends FileInputElement = FileInputDefaultElement> =
	PolymorphicFocusEvent<Element>;

export type FileInputDefaultElement = 'input';
export type FileInputElement = Extract<ElementType, 'input'>;

export type FileInputSize = FormsCommonSize;

export type FileInputVariant = FormsCommonVariant;

export type FileInputRenderProps<Element extends FileInputElement = FileInputDefaultElement> = Pick<
	FileInputOtherProps<Element>,
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

type FileInputOtherProps<Element extends FileInputElement = FileInputDefaultElement> = Pick<
	FileButtonProps,
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

type OmittedBoxProps = 'children' | keyof Omit<BoxOtherProps, 'w' | 'minW' | 'maxW' | 'h' | 'minH' | 'maxH'>;

export type FileInputProps<Element extends FileInputElement = FileInputDefaultElement> = Omit<
	BoxProps<Element, FileInputOtherProps<Element>>,
	OmittedBoxProps
>;

export type FileInputRef<Element extends FileInputElement = FileInputDefaultElement> = BoxRef<Element>;
