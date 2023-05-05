import { FC, useRef } from 'react';

import { VisuallyHiddenInput } from '@chakra-ui/react';

import Compressor from 'compressorjs';

import { useProviderContext } from '../../Provider/common/hooks';

import {
	FileButtonBlob,
	FileButtonBlobs,
	FileButtonChangeEvent,
	FileButtonErrors,
	FileButtonMouseEvent,
	FileButtonProps,
	FileInputRef
} from './common/types';

const FileButton: FC<FileButtonProps> = (props) => {
	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const fileInputRef = useRef<FileInputRef>(null);

	const {
		children,
		color = defaultColor,
		colorMode = defaultColorMode,
		accept = 'image/*',
		isMultiple = false,
		onSuccess,
		onError
	} = props;

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
				console.error(error);

				return error;
			}
		});
	};

	const handleChange = async (event: FileButtonChangeEvent) => {
		const files = event.target.files;

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
				onSuccess(event, blobs);
			}

			if (errors.length) {
				onError(event, errors);
			}
		} else {
			await handleCompressor(files[0])
				.then((blob) => blobs.push(blob as unknown as FileButtonBlob))
				.catch((error) => errors.push(error));

			if (blobs.length) {
				onSuccess(event, blobs);
			} else {
				onError(event, errors);
			}
		}
	};

	return (
		<>
			<VisuallyHiddenInput
				ref={fileInputRef}
				accept={accept}
				type='file'
				onChange={(event) => handleChange(event)}
			/>
			{children({ color, colorMode, onClick: handleClick })}
		</>
	);
};

export default FileButton;
