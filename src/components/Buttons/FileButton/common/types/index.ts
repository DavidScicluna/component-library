import type { ChangeEvent as CE, MouseEvent as ME, ReactNode } from 'react';

export type FileButtonChangeEvent = CE<HTMLInputElement>;
export type FileButtonMouseEvent = ME<unknown>;

export type FileButtonBlob = string;
export type FileButtonBlobs = Array<FileButtonBlob>;

export type FileButtonError = Error;
export type FileButtonErrors = Array<FileButtonError>;

export type FileButtonChildrenProps = {
	hasUploaded: boolean;
	onClick: (event: FileButtonMouseEvent) => void;
};

export type FileButtonProps = {
	children: (props: FileButtonChildrenProps) => ReactNode;
	accept?: string;
	isMultiple?: boolean;
	onSuccess: (event: FileButtonChangeEvent, blobs: FileButtonBlobs) => void;
	onError: (event: FileButtonChangeEvent, error: FileButtonErrors) => void;
};
