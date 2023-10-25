import type { ReactElement } from 'react';
import { forwardRef, useEffect, useMemo, useRef } from 'react';

import classNames from 'classnames';
import { compact, merge } from 'lodash-es';
import { useFocus, useMergeRefs } from 'rooks';
import { useElementSize } from 'usehooks-ts';

import { __DEFAULT_CLASSNAME__, __DEFAULT_POLYMORPHIC_SX__ } from '@common/constants';
import { useBoolean, useGetResponsiveValue } from '@common/hooks';

import { Box } from '@components/Box';
import { Icon } from '@components/DataDisplay';
import { useFormsClasses, useFormsIconSize, useFormsSizeConfig, useFormsStyles } from '@components/Forms/common/hooks';
import { useFormControlContext } from '@components/Forms/components/FormControl/common/hooks';
import { Grid, GridItem } from '@components/Layout';

import { getFormDescriptionID } from '../FormDescription/common/utils';
import { getFormLabelID } from '../FormLabel/common/utils';

import {
	__DEFAULT_FILE_INPUT_ACCEPT__,
	__DEFAULT_FILE_INPUT_IS_COMPACT__,
	__DEFAULT_FILE_INPUT_IS_DISABLED__,
	__DEFAULT_FILE_INPUT_IS_ERROR__,
	__DEFAULT_FILE_INPUT_IS_FOCUSED__,
	__DEFAULT_FILE_INPUT_IS_MULTIPLE__,
	__DEFAULT_FILE_INPUT_IS_OUTLINED__,
	__DEFAULT_FILE_INPUT_IS_READONLY__,
	__DEFAULT_FILE_INPUT_IS_REQUIRED__,
	__DEFAULT_FILE_INPUT_IS_SUCCESS__,
	__DEFAULT_FILE_INPUT_IS_WARNING__,
	__DEFAULT_FILE_INPUT_SIZE__,
	__DEFAULT_FILE_INPUT_TIMEOUT__,
	__DEFAULT_FILE_INPUT_TYPE__,
	__DEFAULT_FILE_INPUT_VARIANT__
} from './common/constants';
import { __KEYS_FILE_INPUT_CLASS__ } from './common/keys';
import type {
	FileInputBlob,
	FileInputBlobs,
	FileInputChangeEvent,
	FileInputDefaultElement,
	FileInputElement,
	FileInputErrors,
	FileInputFocusEvent,
	FileInputMouseEvent,
	FileInputProps,
	FileInputRef,
	FileInputSize,
	FileInputVariant
} from './common/types';

const FileInput = forwardRef(function FileInput<Element extends FileInputElement = FileInputDefaultElement>(
	props: FileInputProps<Element>,
	ref: FileInputRef<Element>
): ReactElement {
	const inputRef = useRef<FileInputRef<Element>>();
	const refs = useMergeRefs(ref, inputRef);

	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const {
		color: __DEFAULT_FORM_CONTROL_COLOR__,
		colorMode: __DEFAULT_FORM_CONTROL_COLORMODE__,
		id,
		hasFormControl,
		isDisabled: __DEFAULT_FORM_CONTROL_IS_DISABLED__ = __DEFAULT_FILE_INPUT_IS_DISABLED__,
		isError: __DEFAULT_FORM_CONTROL_IS_ERROR__ = __DEFAULT_FILE_INPUT_IS_ERROR__,
		isFocused: __DEFAULT_FORM_CONTROL_IS_FOCUSED__ = __DEFAULT_FILE_INPUT_IS_FOCUSED__,
		isReadOnly: __DEFAULT_FORM_CONTROL_IS_READONLY__ = __DEFAULT_FILE_INPUT_IS_READONLY__,
		isRequired: __DEFAULT_FORM_CONTROL_IS_REQUIRED__ = __DEFAULT_FILE_INPUT_IS_REQUIRED__,
		isSuccess: __DEFAULT_FORM_CONTROL_IS_SUCCESS__ = __DEFAULT_FILE_INPUT_IS_SUCCESS__,
		isWarning: __DEFAULT_FORM_CONTROL_IS_WARNING__ = __DEFAULT_FILE_INPUT_IS_WARNING__,
		size: __DEFAULT_FORM_CONTROL_SIZE__ = __DEFAULT_FILE_INPUT_SIZE__
	} = useFormControlContext();

	const {
		className = __DEFAULT_CLASSNAME__,
		w,
		h,
		renderLeft,
		renderRight,
		color = __DEFAULT_FORM_CONTROL_COLOR__,
		colorMode = __DEFAULT_FORM_CONTROL_COLORMODE__,
		accept = __DEFAULT_FILE_INPUT_ACCEPT__,
		placeholder,
		isCompact: comp = __DEFAULT_FILE_INPUT_IS_COMPACT__,
		isDisabled: disabled = __DEFAULT_FORM_CONTROL_IS_DISABLED__,
		isError: error = __DEFAULT_FORM_CONTROL_IS_ERROR__,
		isFocused: focused = __DEFAULT_FORM_CONTROL_IS_FOCUSED__,
		isMultiple: multiple = __DEFAULT_FILE_INPUT_IS_MULTIPLE__,
		isOutlined: outlined = __DEFAULT_FILE_INPUT_IS_OUTLINED__,
		isReadOnly: readOnly = __DEFAULT_FORM_CONTROL_IS_READONLY__,
		isRequired: required = __DEFAULT_FORM_CONTROL_IS_REQUIRED__,
		isSuccess: success = __DEFAULT_FORM_CONTROL_IS_SUCCESS__,
		isWarning: warning = __DEFAULT_FORM_CONTROL_IS_WARNING__,
		type = __DEFAULT_FILE_INPUT_TYPE__,
		onClick,
		onFocus,
		onBlur,
		onError,
		onSuccess,
		size: s = __DEFAULT_FORM_CONTROL_SIZE__,
		variant: v = __DEFAULT_FILE_INPUT_VARIANT__,
		sx = __DEFAULT_POLYMORPHIC_SX__,
		...rest
	} = props;

	const [isUploading, setIsUploading] = useBoolean();

	const [isFocusedHook, setIsFocusedHook] = useBoolean();

	const isCompact = useGetResponsiveValue<boolean>(comp);
	const isDisabledProp = useGetResponsiveValue<boolean>(disabled);
	const isError = useGetResponsiveValue<boolean>(error);
	const isFocusedProp = useGetResponsiveValue<boolean>(focused);
	const isMultiple = useGetResponsiveValue<boolean>(multiple);
	const isOutlined = useGetResponsiveValue<boolean>(outlined);
	const isReadOnly = useGetResponsiveValue<boolean>(readOnly);
	const isRequired = useGetResponsiveValue<boolean>(required);
	const isSuccess = useGetResponsiveValue<boolean>(success);
	const isWarning = useGetResponsiveValue<boolean>(warning);

	const size = useGetResponsiveValue<FileInputSize>(s);
	const variant = useGetResponsiveValue<FileInputVariant>(v);

	const isDisabled = useMemo<boolean>(() => isUploading || isDisabledProp, [isUploading, isDisabledProp]);
	const isFocused = useMemo<boolean>(() => isFocusedProp || isFocusedHook, [isFocusedProp, isFocusedHook]);

	const config = useFormsSizeConfig({ isCompact, size, variant });
	const iconSize = useFormsIconSize({ isCompact, size, variant });

	const classes = useFormsClasses({
		color,
		colorMode,
		isCompact,
		isDisabled,
		isError,
		isOutlined,
		isReadOnly,
		isSuccess,
		isWarning,
		size,
		variant
	});
	const styles = useFormsStyles({
		element: 'input',
		color,
		colorMode,
		isDisabled,
		isError,
		isFocused,
		isReadOnly,
		isSuccess,
		isWarning,
		variant
	});

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

	const handleChange = async (event: FileInputChangeEvent<Element>) => {
		const { files } = event.target;

		const blobs: FileInputBlobs = [];
		const errors: FileInputErrors = [];

		if (!files) {
			return;
		}

		if (isMultiple) {
			await Array.from(files).forEach((file) =>
				handleCompressor(file)
					.then((blob) => blobs.push(blob as unknown as FileInputBlob))
					.catch((error) => errors.push(error))
			);

			if (blobs.length) {
				setIsUploading.on();

				onSuccess(event, blobs);

				setTimeout(() => setIsUploading.off(), __DEFAULT_FILE_INPUT_TIMEOUT__);
			}

			if (errors.length) {
				onError(event, errors);
			}
		} else {
			await handleCompressor(files[0])
				.then((blob) => blobs.push(blob as unknown as FileInputBlob))
				.catch((error) => errors.push(error));

			if (blobs.length) {
				setIsUploading.on();

				onSuccess(event, blobs);

				setTimeout(() => setIsUploading.off(), __DEFAULT_FILE_INPUT_TIMEOUT__);
			} else {
				onError(event, errors);
			}
		}
	};

	const handleClick = (event: FileInputMouseEvent<Element>): void => {
		event.preventDefault();
		event.stopPropagation();

		setIsFocusedHook.on();

		if (inputRef && inputRef.current) {
			inputRef.current.click();
			inputRef.current.focus();
		}

		if (onClick) {
			onClick(event);
		}
	};

	const handleFocus = (event: FileInputFocusEvent<Element>): void => {
		setIsFocusedHook.on();

		if (inputRef && inputRef.current) {
			inputRef.current.focus();
		}

		if (onFocus) {
			onFocus(event);
		}
	};

	const handleBlur = (event: FileInputFocusEvent<Element>): void => {
		setIsFocusedHook.off();

		if (inputRef && inputRef.current) {
			inputRef.current.blur();
		}

		if (onBlur) {
			onBlur(event);
		}
	};

	const { focusProps } = useFocus({ onFocus: handleFocus, onBlur: handleBlur });

	useEffect(() => {
		if (isFocused && inputRef && inputRef.current) {
			inputRef.current.focus();
		}
	}, [isFocused]);

	return (
		<Grid
			{...focusProps}
			className={classNames(__KEYS_FILE_INPUT_CLASS__, classes.container, { [className]: !!className })}
			w={hasFormControl ? '100%' : w}
			h={hasFormControl ? '100%' : h}
			templateColumns={compact(['auto', '1fr', renderRight ? 'auto' : null]).join(' ')}
			templateRows={1}
			onClick={handleClick}
			alignItems='stretch'
			alignContent='stretch'
			justifyItems='stretch'
			justifyContent='stretch'
			spacing={config.spacing}
			px={config.padding.x}
			py={config.padding.y}
			sx={merge(styles, sx)}
		>
			<GridItem alignSelf='center' justifySelf='center'>
				<Icon
					w={iconSize.w}
					h={iconSize.h}
					color={color}
					colorMode={colorMode}
					icon='file_upload'
					category='filled'
					size={iconSize.size}
					variant='unstyled'
				/>
				{renderLeft ? renderLeft({ color, colorMode, w: childrenWidth, h: childrenHeight }) : null}
			</GridItem>

			<GridItem ref={childrenRef}>
				<Box<Element>
					{...rest}
					ref={refs}
					className={classNames(classes.element)}
					as='input'
					aria-disabled={isDisabled ? 'true' : 'false'}
					aria-describedby={getFormDescriptionID(id)}
					aria-invalid={isError ? 'true' : 'false'}
					aria-labelledby={getFormLabelID(id)}
					aria-placeholder={placeholder}
					aria-readonly={isReadOnly ? 'true' : 'false'}
					aria-required={isRequired ? 'true' : 'false'}
					aria-selected={isFocused ? 'true' : 'false'}
					w='100%'
					h='100%'
					accept={accept}
					placeholder={placeholder}
					onChange={handleChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
					type={type}
				/>
			</GridItem>

			{renderRight ? (
				<GridItem alignSelf='center' justifySelf='center'>
					{renderRight({ color, colorMode, w: childrenWidth, h: childrenHeight })}
				</GridItem>
			) : null}
		</Grid>
	);
});

FileInput.displayName = 'FileInput';

export default FileInput;
