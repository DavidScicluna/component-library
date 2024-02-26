import { forwardRef, useEffect, useMemo, useRef } from 'react';

import classNames from 'classnames';
import { compact, merge } from 'lodash-es';
import { useDimensionsRef, useFocus, useMergeRefs } from 'rooks';

import { DEFAULT_CLASSNAME, DEFAULT_POLYMORPHIC_SX } from '@common/constants';
import { useBoolean } from '@common/hooks';
import type { PolymorphicDefaultElement, PolymorphicElement } from '@common/types';

import type { BoxProps } from '@components/Box';
import { Box } from '@components/Box';
import type { FileButtonChildrenProps } from '@components/Buttons';
import { FileButton } from '@components/Buttons';
import { Icon } from '@components/DataDisplay';
import { useFormsClasses, useFormsIconSize, useFormsSizeConfig, useFormsStyles } from '@components/Forms/common/hooks';
import { useFormControlContext } from '@components/Forms/components/FormControl/common/hooks';
import type { GridItemRef } from '@components/Layout';
import { Grid, GridItem } from '@components/Layout';

import { getFormDescriptionID } from '../FormDescription/common/utils';
import { getFormLabelID } from '../FormLabel/common/utils';

import {
	DEFAULT_FILE_INPUT_AS,
	DEFAULT_FILE_INPUT_ID,
	DEFAULT_FILE_INPUT_IS_COMPACT,
	DEFAULT_FILE_INPUT_IS_DISABLED,
	DEFAULT_FILE_INPUT_IS_ERROR,
	DEFAULT_FILE_INPUT_IS_FOCUSED,
	DEFAULT_FILE_INPUT_IS_FULLWIDTH,
	DEFAULT_FILE_INPUT_IS_MULTIPLE,
	DEFAULT_FILE_INPUT_IS_OUTLINED,
	DEFAULT_FILE_INPUT_IS_READONLY,
	DEFAULT_FILE_INPUT_IS_REQUIRED,
	DEFAULT_FILE_INPUT_IS_SUCCESS,
	DEFAULT_FILE_INPUT_IS_WARNING,
	DEFAULT_FILE_INPUT_SIZE,
	DEFAULT_FILE_INPUT_TYPE,
	DEFAULT_FILE_INPUT_VARIANT
} from './common/constants';
import { useFileInputResponsiveValues } from './common/hooks';
import { KEYS_FILE_INPUT_CLASS } from './common/keys';
import type {
	FileInputElement,
	FileInputFocusEvent,
	FileInputMouseEvent,
	FileInputProps,
	FileInputRef
} from './common/types';

const FileInput = forwardRef(function FileInput<Element extends FileInputElement>(
	props: FileInputProps<Element>,
	ref: FileInputRef<Element>
): JSX.Element {
	const fileInputRef = useRef<PolymorphicElement<Element>>();
	const refs = useMergeRefs(ref, fileInputRef);

	const [childrenRef, childrenDimensions] = useDimensionsRef();
	const { width: childrenWidth = 0, height: childrenHeight = 0 } = childrenDimensions || {};

	const {
		color: DEFAULT_FORM_CONTROL_COLOR,
		colorMode: DEFAULT_FORM_CONTROL_COLORMODE,
		id: DEFAULT_FORM_CONTROL_ID = DEFAULT_FILE_INPUT_ID,
		hasFormControl,
		isDisabled: DEFAULT_FORM_CONTROL_IS_DISABLED = DEFAULT_FILE_INPUT_IS_DISABLED,
		isError: DEFAULT_FORM_CONTROL_IS_ERROR = DEFAULT_FILE_INPUT_IS_ERROR,
		isFocused: DEFAULT_FORM_CONTROL_IS_FOCUSED = DEFAULT_FILE_INPUT_IS_FOCUSED,
		isReadOnly: DEFAULT_FORM_CONTROL_IS_READONLY = DEFAULT_FILE_INPUT_IS_READONLY,
		isRequired: DEFAULT_FORM_CONTROL_IS_REQUIRED = DEFAULT_FILE_INPUT_IS_REQUIRED,
		isSuccess: DEFAULT_FORM_CONTROL_IS_SUCCESS = DEFAULT_FILE_INPUT_IS_SUCCESS,
		isWarning: DEFAULT_FORM_CONTROL_IS_WARNING = DEFAULT_FILE_INPUT_IS_WARNING,
		size: DEFAULT_FORM_CONTROL_SIZE = DEFAULT_FILE_INPUT_SIZE
	} = useFormControlContext();

	const {
		as = DEFAULT_FILE_INPUT_AS,
		id = DEFAULT_FORM_CONTROL_ID,
		className = DEFAULT_CLASSNAME,
		renderLeft,
		renderRight,
		color = DEFAULT_FORM_CONTROL_COLOR,
		colorMode = DEFAULT_FORM_CONTROL_COLORMODE,
		accept,
		placeholder,
		isCompact: isCompactProp = DEFAULT_FILE_INPUT_IS_COMPACT,
		isDisabled: isDisabledProp = DEFAULT_FORM_CONTROL_IS_DISABLED,
		isFullWidth: isFullWidthProp = DEFAULT_FILE_INPUT_IS_FULLWIDTH,
		isError: isErrorProp = DEFAULT_FORM_CONTROL_IS_ERROR,
		isFocused: isFocusedProp = DEFAULT_FORM_CONTROL_IS_FOCUSED,
		isMultiple: isMultipleProp = DEFAULT_FILE_INPUT_IS_MULTIPLE,
		isOutlined: isOutlinedProp = DEFAULT_FILE_INPUT_IS_OUTLINED,
		isReadOnly: isReadOnlyProp = DEFAULT_FORM_CONTROL_IS_READONLY,
		isRequired: isRequiredProp = DEFAULT_FORM_CONTROL_IS_REQUIRED,
		isSuccess: isSuccessProp = DEFAULT_FORM_CONTROL_IS_SUCCESS,
		isWarning: isWarningProp = DEFAULT_FORM_CONTROL_IS_WARNING,
		type = DEFAULT_FILE_INPUT_TYPE,
		onClick,
		onFocus,
		onBlur,
		onError,
		onSuccess,
		size: sizeProp = DEFAULT_FORM_CONTROL_SIZE,
		variant: variantProp = DEFAULT_FILE_INPUT_VARIANT,
		sx = DEFAULT_POLYMORPHIC_SX,
		...rest
	} = props;

	const [isFocusedHook, setIsFocusedHook] = useBoolean();

	const {
		isCompact,
		isDisabled,
		isFullWidth,
		isError,
		isFocused: focused,
		isMultiple,
		isOutlined,
		isReadOnly,
		isRequired,
		isSuccess,
		isWarning,
		size,
		variant
	} = useFileInputResponsiveValues<Element>({
		isCompact: isCompactProp,
		isDisabled: isDisabledProp,
		isFullWidth: isFullWidthProp,
		isError: isErrorProp,
		isFocused: isFocusedProp,
		isMultiple: isMultipleProp,
		isOutlined: isOutlinedProp,
		isReadOnly: isReadOnlyProp,
		isRequired: isRequiredProp,
		isSuccess: isSuccessProp,
		isWarning: isWarningProp,
		size: sizeProp,
		variant: variantProp
	});

	const isFocused = useMemo<boolean>(() => focused || isFocusedHook, [focused, isFocusedHook]);

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

	const handleClick = (event: FileInputMouseEvent<Element>): void => {
		event.preventDefault();
		event.stopPropagation();

		setIsFocusedHook.on();

		if (fileInputRef && fileInputRef.current) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(fileInputRef.current as any).focus();
		}

		if (onClick) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			onClick(event as any);
		}
	};

	const handleFocus = (event: FileInputFocusEvent<Element>): void => {
		setIsFocusedHook.on();

		if (fileInputRef && fileInputRef.current) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(fileInputRef.current as any).focus();
		}

		if (onFocus) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			onFocus(event as any);
		}
	};

	const handleBlur = (event: FileInputFocusEvent<Element>): void => {
		setIsFocusedHook.off();

		if (fileInputRef && fileInputRef.current) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(fileInputRef.current as any).blur();
		}

		if (onBlur) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			onBlur(event as any);
		}
	};

	const { focusProps } = useFocus({ onFocus: handleFocus, onBlur: handleBlur });

	useEffect(() => {
		if (isFocused && fileInputRef && fileInputRef.current) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(fileInputRef.current as any).focus();
		}
	}, [isFocused]);

	return (
		<FileButton accept={accept} multiple={isMultiple} onError={onError} onSuccess={onSuccess} type={type}>
			{({ hasUploaded: isUploading, onUpload: handleUpload }: FileButtonChildrenProps) => (
				<Grid
					{...focusProps}
					className={classNames(KEYS_FILE_INPUT_CLASS, classes.container, { [className]: !!className })}
					w={hasFormControl || isFullWidth ? '100%' : undefined}
					h={hasFormControl ? '100%' : undefined}
					templateColumns={compact(['auto', '1fr', renderRight ? 'auto' : null]).join(' ')}
					templateRows={1}
					onClick={(event: FileInputMouseEvent<Element>) => {
						handleUpload();
						handleClick(event);
					}}
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

					<GridItem ref={childrenRef as GridItemRef<PolymorphicDefaultElement>}>
						<Box
							{...(rest as BoxProps<Element>)}
							as={as}
							ref={refs}
							className={classNames(classes.element)}
							aria-disabled={isUploading || isDisabled ? 'true' : 'false'}
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
			)}
		</FileButton>
	);
});

// FileInput.displayName = 'FileInput';

export default FileInput;
