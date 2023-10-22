import type { ElementType, ReactNode } from 'react';

import type {
	PickFrom,
	PolymorphicChangeEvent,
	PolymorphicFocusEvent,
	PolymorphicMouseEvent,
	ResponsiveValue
} from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { FormsCommonProps, FormsCommonSize, FormsCommonVariant } from '@components/Forms';

export type FileInputMouseEvent<Element extends FileInputElement = FileInputDefaultElement> =
	PolymorphicMouseEvent<Element>;
export type FileInputChangeEvent<Element extends FileInputElement = FileInputDefaultElement> =
	PolymorphicChangeEvent<Element>;
export type FileInputFocusEvent<Element extends FileInputElement = FileInputDefaultElement> =
	PolymorphicFocusEvent<Element>;

export type FileInputBlob = string;
export type FileInputBlobs = Array<FileInputBlob>;

export type FileInputError = Error;
export type FileInputErrors = Array<FileInputError>;

export type FileInputDefaultElement = 'input';
export type FileInputElement = PickFrom<ElementType, 'input'>;

// export type FileInputAutoComplete = 'on' | 'password' | 'off';

export type FileInputSize = FormsCommonSize;

export type FileInputVariant = FormsCommonVariant;

export type FileInputRenderProps<Element extends FileInputElement = FileInputDefaultElement> = Pick<
	FileInputOtherProps<Element>,
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

type FileInputOtherProps<Element extends FileInputElement = FileInputDefaultElement> = {
	// autoComplete?: FileInputAutoComplete;
	renderLeft?: (props: FileInputRenderProps<Element>) => ReactNode;
	renderRight?: (props: FileInputRenderProps<Element>) => ReactNode;
	/**
	 * If true, multiple files will be allowed to be uploaded
	 *
	 * @default false
	 */
	isMultiple?: ResponsiveValue<boolean>;
	onSuccess: (event: FileInputChangeEvent<Element>, blobs: FileInputBlobs) => void;
	onError: (event: FileInputChangeEvent<Element>, error: FileInputErrors) => void;
} & Pick<FormsCommonProps, PickedFormsCommonProps>;

export type FileInputProps<Element extends FileInputElement = FileInputDefaultElement> = Omit<
	BoxProps<Element, FileInputOtherProps<Element>>,
	'children' | keyof Omit<BoxOtherProps, 'w' | 'minW' | 'maxW' | 'h' | 'minH' | 'maxH'>
>;

export type FileInputRef<Element extends FileInputElement = FileInputDefaultElement> = BoxRef<Element>;
