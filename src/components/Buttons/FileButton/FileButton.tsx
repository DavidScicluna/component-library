import type { FC } from 'react';
import { Fragment, useRef } from 'react';

import Compressor from 'compressorjs';

import { useBoolean } from '@common/hooks';

import { VisuallyHidden } from '@components/VisuallyHidden';

import {
	__DEFAULT_FILE_BUTTON_ACCEPT__,
	__DEFAULT_FILE_BUTTON_IS_MULTIPLE__,
	__DEFAULT_FILE_BUTTON_TIMEOUT__
} from './common/constants';
import type {
	FileButtonBlob,
	FileButtonBlobs,
	FileButtonChangeEvent,
	FileButtonErrors,
	FileButtonMouseEvent,
	FileButtonProps
} from './common/types';

const FileButton: FC<FileButtonProps> = (props) => {
	const fileInputRef = useRef<HTMLInputElement>(null);

	const {
		children,
		accept = __DEFAULT_FILE_BUTTON_ACCEPT__,
		isMultiple = __DEFAULT_FILE_BUTTON_IS_MULTIPLE__,
		onSuccess,
		onError
	} = props;

	const [hasUploaded, setHasUploaded] = useBoolean();

	const handleClick = (event: FileButtonMouseEvent): void => {
		event.preventDefault();
		event.stopPropagation();

		fileInputRef.current?.click();
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

	const handleChange = async (event: FileButtonChangeEvent) => {
		const { files } = event.target;

		const blobs: FileButtonBlobs = [];
		const errors: FileButtonErrors = [];

		if (!files) {
			return;
		}

		if (isMultiple) {
			await Array.from(files).forEach((file) =>
				handleCompressor(file)
					.then((blob) => blobs.push(blob as unknown as FileButtonBlob))
					.catch((error) => errors.push(error))
			);

			if (blobs.length) {
				setHasUploaded.on();

				onSuccess(event, blobs);

				setTimeout(() => setHasUploaded.off(), __DEFAULT_FILE_BUTTON_TIMEOUT__);
			}

			if (errors.length) {
				onError(event, errors);
			}
		} else {
			await handleCompressor(files[0])
				.then((blob) => blobs.push(blob as unknown as FileButtonBlob))
				.catch((error) => errors.push(error));

			if (blobs.length) {
				setHasUploaded.on();

				onSuccess(event, blobs);

				setTimeout(() => setHasUploaded.off(), __DEFAULT_FILE_BUTTON_TIMEOUT__);
			} else {
				onError(event, errors);
			}
		}
	};

	return (
		<Fragment>
			<VisuallyHidden<'input'>
				as='input'
				ref={fileInputRef}
				accept={accept}
				type='file'
				onChange={(event) => handleChange(event)}
			/>
			{children({ hasUploaded, onClick: handleClick })}
		</Fragment>
	);
};

FileButton.displayName = 'FileButton';

export default FileButton;
