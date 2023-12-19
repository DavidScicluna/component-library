import type { ReactElement } from 'react';
import { forwardRef, Fragment, useRef } from 'react';

import Compressor from 'compressorjs';
import { useMergeRefs } from 'rooks';

import { useBoolean } from '@common/hooks';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultProps,
	PolymorphicElement
} from '@common/types';

import { Box } from '@components/Box';
import { VisuallyHidden } from '@components/VisuallyHidden';

import {
	__DEFAULT_FILE_BUTTON_ACCEPT__,
	__DEFAULT_FILE_BUTTON_IS_MULTIPLE__,
	__DEFAULT_FILE_BUTTON_TIMEOUT__,
	__DEFAULT_FILE_BUTTON_TYPE__
} from './common/constants';
import type {
	FileButtonBlob,
	FileButtonBlobs,
	FileButtonChangeEvent,
	FileButtonDefaultElement,
	FileButtonElement,
	FileButtonErrors,
	FileButtonFile,
	FileButtonProps,
	FileButtonRef
} from './common/types';

const FileButton: PolymorphicComponentWithRef = forwardRef(function FileButton<
	Element extends FileButtonElement = FileButtonDefaultElement
>(props: FileButtonProps<Element>, ref: FileButtonRef<Element>): ReactElement {
	const fileInputRef = useRef<PolymorphicElement<Element>>(null);
	const refs = useMergeRefs(ref, fileInputRef);

	const {
		children,
		accept = __DEFAULT_FILE_BUTTON_ACCEPT__,
		multiple: isMultiple = __DEFAULT_FILE_BUTTON_IS_MULTIPLE__,
		type = __DEFAULT_FILE_BUTTON_TYPE__,
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

	const handleChange = async (event: FileButtonChangeEvent<Element>) => {
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

				setTimeout(() => setIsUploading.off(), __DEFAULT_FILE_BUTTON_TIMEOUT__);
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

				setTimeout(() => setIsUploading.off(), __DEFAULT_FILE_BUTTON_TIMEOUT__);
			} else {
				onError(event, errors);
			}
		}
	};

	return (
		<Fragment>
			<VisuallyHidden>
				<Box<Element>
					{...rest}
					ref={refs}
					accept={accept}
					type={type}
					onChange={(event: FileButtonChangeEvent<Element>) => handleChange(event)}
				/>
			</VisuallyHidden>
			{children({ hasUploaded: isUploading, onUpload: handleUpload })}
		</Fragment>
	);
});

FileButton.displayName = 'FileButton';

export default <Element extends FileButtonElement = FileButtonDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <FileButton<Element> {...props} />;
