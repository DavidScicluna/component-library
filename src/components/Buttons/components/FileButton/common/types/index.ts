import type { ReactNode } from 'react';

import type { Nullish, PolymorphicChangeEvent, PolymorphicElementType } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type FileButtonDefaultElement = 'input';
export type FileButtonElement = Extract<PolymorphicElementType, 'input'>;

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
	onSuccess: (event: PolymorphicChangeEvent, blobs: FileButtonBlobs) => void;
	onError: (event: PolymorphicChangeEvent, error: FileButtonErrors) => void;
};

export type FileButtonProps<Element extends FileButtonElement> = BoxProps<Element, FileButtonOtherProps>;

export type FileButtonRef<Element extends FileButtonElement> = BoxRef<Element>;
