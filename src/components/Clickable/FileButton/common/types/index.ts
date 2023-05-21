import { ChangeEvent as CE, MouseEvent as ME, ReactNode } from 'react';

import { CommonThemeProps, Nullable } from '../../../../../common/types';

export type FileButtonChangeEvent = CE<HTMLInputElement>;
export type FileButtonMouseEvent = ME<unknown>;

export type FileButtonBlob = string;
export type FileButtonBlobs = FileButtonBlob[];

export type FileButtonError = Error;
export type FileButtonErrors = FileButtonError[];

export type FileButtonChildrenProps = Pick<FileButtonProps, 'color' | 'colorMode'> & {
	onClick: (event: FileButtonMouseEvent) => void;
};

export type FileButtonProps = CommonThemeProps & {
	children: (props: FileButtonChildrenProps) => ReactNode;

	accept?: string;
	isMultiple?: boolean;
	onSuccess: (event: FileButtonChangeEvent, blobs: FileButtonBlobs) => void;
	onError: (event: FileButtonChangeEvent, error: FileButtonErrors) => void;
};

export type FileInputRef = Nullable<HTMLInputElement>;
