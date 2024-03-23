import type { ReactNode } from 'react';

import type { PolymorphicElementType, ResponsiveValueProps, ThemeAppAppearanceProps } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { FileButtonDefaultElement, FileButtonProps } from '@components/Buttons';
import type {
	FormsCommonSize,
	FormsCommonVariant,
	FormsNonResponsiveValueProps,
	FormsResponsiveValueProps
} from '@components/Forms/common/types';

export type FileInputDefaultElement = 'input';
export type FileInputElement = Extract<PolymorphicElementType, 'input'>;

export type FileInputSize = FormsCommonSize;

export type FileInputVariant = FormsCommonVariant;

export type FileInputRenderProps = ThemeAppAppearanceProps & { w?: number; h?: number };

export type FileInputNonResponsiveValueProps = FormsNonResponsiveValueProps & {
	/**
	 * If true, multiple files will be allowed to be uploaded
	 *
	 * @default false
	 */
	isMultiple?: boolean;
};
export type FileInputResponsiveValueProps = FormsResponsiveValueProps &
	ResponsiveValueProps<FileInputNonResponsiveValueProps>;

export type FileInputUniqueProps = ThemeAppAppearanceProps & {
	renderLeft?: (props: FileInputRenderProps) => ReactNode;
	renderRight?: (props: FileInputRenderProps) => ReactNode;
} & FileInputResponsiveValueProps &
	Pick<FileButtonProps<FileButtonDefaultElement>, 'accept' | 'onSuccess' | 'onError'>;

export type FileInputProps<Element extends FileInputElement> = Omit<
	BoxProps<Element, FileInputUniqueProps>,
	'children'
>;

export type FileInputRef<Element extends FileInputElement> = BoxRef<Element>;
