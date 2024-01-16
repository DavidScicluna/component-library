import type { ReactNode } from 'react';

import type { Nullish, PolymorphicChangeEvent, PolymorphicElementType } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

export type FileButtonDefaultElement = 'input';
export type FileButtonElement = Extract<PolymorphicElementType, 'input'>;

export type FileButtonChangeEvent<Element extends FileButtonElement = FileButtonDefaultElement> =
	PolymorphicChangeEvent<Element>;

export type FileButtonFile = Nullish<FileList | Array<never>>;

export type FileButtonBlob = string;
export type FileButtonBlobs = Array<FileButtonBlob>;

export type FileButtonError = Error;
export type FileButtonErrors = Array<FileButtonError>;

export type FileButtonChildrenProps = {
	hasUploaded: boolean;
	onUpload: () => void;
};

type FileButtonOtherProps = {
	children: (props: FileButtonChildrenProps) => ReactNode;
	onSuccess: (event: FileButtonChangeEvent, blobs: FileButtonBlobs) => void;
	onError: (event: FileButtonChangeEvent, error: FileButtonErrors) => void;
};

export type FileButtonProps<Element extends FileButtonElement = FileButtonDefaultElement> = Omit<
	BoxProps<Element, FileButtonOtherProps>,
	keyof BoxOtherProps
>;

export type FileButtonRef<Element extends FileButtonElement = FileButtonDefaultElement> = BoxRef<Element>;
