import { forwardRef, Fragment, useRef } from 'react';

import Compressor from 'compressorjs';
import { useMergeRefs } from 'rooks';

import { useBoolean } from '@common/hooks';
import type { PolymorphicChangeEvent, PolymorphicElement } from '@common/types';

import { Box } from '@components/Box';
import { VisuallyHidden } from '@components/VisuallyHidden';

import {
	DEFAULT_FILE_BUTTON_ACCEPT,
	DEFAULT_FILE_BUTTON_AS,
	DEFAULT_FILE_BUTTON_IS_MULTIPLE,
	DEFAULT_FILE_BUTTON_TIMEOUT,
	DEFAULT_FILE_BUTTON_TYPE
} from './common/constants';
import type {
	FileButtonBlob,
	FileButtonBlobs,
	FileButtonElement,
	FileButtonErrors,
	FileButtonFile,
	FileButtonProps,
	FileButtonRef
} from './common/types';

const FileButton = forwardRef(function FileButton<Element extends FileButtonElement>(
	props: FileButtonProps<Element>,
	ref: FileButtonRef<Element>
): JSX.Element {
	const fileInputRef = useRef<PolymorphicElement<Element>>(null);
	const refs = useMergeRefs(ref, fileInputRef.current as FileButtonRef<Element>);

	const {
		children,
		as = DEFAULT_FILE_BUTTON_AS,
		accept = DEFAULT_FILE_BUTTON_ACCEPT,
		multiple: isMultiple = DEFAULT_FILE_BUTTON_IS_MULTIPLE,
		type = DEFAULT_FILE_BUTTON_TYPE,
		onSuccess,
		onError,
		...rest
	} = props;

	const [isUploading, setIsUploading] = useBoolean();

	const handleUpload = (): void => {
		if (fileInputRef && fileInputRef.current && fileInputRef.current.onClick) {
			fileInputRef?.current?.onClick({} as never);
		}
	};

	const handleCompressor = async (file: File): Promise<void> => {
		await new Compressor(file, {
			strict: true,
			checkOrientation: true,
			quality: 0.6,
			resize: 'cover',
			success: (file) => {
				const blob = new Blob([file], { type: file.type });

				return URL.createObjectURL(blob);
			},
			error: (error) => {
				// eslint-disable-next-line no-console
				console.error(error);

				return error;
			}
		});
	};

	const handleChange = async (event: PolymorphicChangeEvent) => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const files: FileButtonFile = (event.target as any).files;

		if (!files) {
			return;
		}

		const blobs: FileButtonBlobs = [];
		const errors: FileButtonErrors = [];

		if (isMultiple) {
			await Array.from(files).forEach((file) =>
				handleCompressor(file)
					.then((blob) => blobs.push(blob as unknown as FileButtonBlob))
					.catch((error) => errors.push(error))
			);

			if (blobs.length) {
				setIsUploading.on();

				onSuccess(event, blobs);

				setTimeout(() => setIsUploading.off(), DEFAULT_FILE_BUTTON_TIMEOUT);
			}

			if (errors.length) {
				onError(event, errors);
			}
		} else {
			await handleCompressor(files[0])
				.then((blob) => blobs.push(blob as unknown as FileButtonBlob))
				.catch((error) => errors.push(error));

			if (blobs.length) {
				setIsUploading.on();

				onSuccess(event, blobs);

				setTimeout(() => setIsUploading.off(), DEFAULT_FILE_BUTTON_TIMEOUT);
			} else {
				onError(event, errors);
			}
		}
	};

	return (
		<Fragment>
			<VisuallyHidden>
				<Box
					{...rest}
					as={as}
					ref={refs}
					accept={accept}
					type={type}
					onChange={(event: PolymorphicChangeEvent) => handleChange(event)}
				/>
			</VisuallyHidden>
			{children({ hasUploaded: isUploading, onUpload: handleUpload })}
		</Fragment>
	);
});

// FileButton.displayName = 'FileButton';

export default FileButton;
