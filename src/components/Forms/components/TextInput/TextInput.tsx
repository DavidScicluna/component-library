import { forwardRef, useEffect, useMemo, useRef } from 'react';

import classNames from 'classnames';
import { compact, merge } from 'lodash-es';
import { useDimensionsRef, useFocus, useMergeRefs } from 'rooks';

import { DEFAULT_CLASSNAME, DEFAULT_POLYMORPHIC_SX } from '@common/constants';
import { useBoolean } from '@common/hooks';
import type {
	PolymorphicDefaultElement,
	PolymorphicElement,
	PolymorphicFocusEvent,
	PolymorphicMouseEvent
} from '@common/types';

import { Box } from '@components/Box';
import { useFormsClasses, useFormsSizeConfig, useFormsStyles } from '@components/Forms/common/hooks';
import { useFormControlContext } from '@components/Forms/components/FormControl/common/hooks';
import type { GridItemRef } from '@components/Layout';
import { Grid, GridItem } from '@components/Layout';

import { getFormDescriptionID } from '../FormDescription/common/utils';
import { getFormLabelID } from '../FormLabel/common/utils';

import {
	DEFAULT_TEXT_INPUT_AS,
	DEFAULT_TEXT_INPUT_ID,
	DEFAULT_TEXT_INPUT_IS_COMPACT,
	DEFAULT_TEXT_INPUT_IS_DISABLED,
	DEFAULT_TEXT_INPUT_IS_ERROR,
	DEFAULT_TEXT_INPUT_IS_FOCUSED,
	DEFAULT_TEXT_INPUT_IS_FULLWIDTH,
	DEFAULT_TEXT_INPUT_IS_OUTLINED,
	DEFAULT_TEXT_INPUT_IS_READONLY,
	DEFAULT_TEXT_INPUT_IS_REQUIRED,
	DEFAULT_TEXT_INPUT_IS_SUCCESS,
	DEFAULT_TEXT_INPUT_IS_WARNING,
	DEFAULT_TEXT_INPUT_SIZE,
	DEFAULT_TEXT_INPUT_TYPE,
	DEFAULT_TEXT_INPUT_VARIANT
} from './common/constants';
import { useTextInputResponsiveValues } from './common/hooks';
import { KEYS_TEXT_INPUT_CLASS } from './common/keys';
import type { TextInputElement, TextInputProps, TextInputRef } from './common/types';

const TextInput = forwardRef(function TextInput<Element extends TextInputElement>(
	props: TextInputProps<Element>,
	ref: TextInputRef<Element>
): JSX.Element {
	const textInputRef = useRef<PolymorphicElement<Element>>(null);
	const refs = useMergeRefs(ref, textInputRef.current as TextInputRef<Element>);

	const [childrenRef, childrenDimensions] = useDimensionsRef();
	const { width: childrenWidth = 0, height: childrenHeight = 0 } = childrenDimensions || {};

	const {
		color: DEFAULT_FORM_CONTROL_COLOR,
		colorMode: DEFAULT_FORM_CONTROL_COLORMODE,
		id: DEFAULT_FORM_CONTROL_ID = DEFAULT_TEXT_INPUT_ID,
		hasFormControl,
		isDisabled: DEFAULT_FORM_CONTROL_IS_DISABLED = DEFAULT_TEXT_INPUT_IS_DISABLED,
		isError: DEFAULT_FORM_CONTROL_IS_ERROR = DEFAULT_TEXT_INPUT_IS_ERROR,
		isFocused: DEFAULT_FORM_CONTROL_IS_FOCUSED = DEFAULT_TEXT_INPUT_IS_FOCUSED,
		isReadOnly: DEFAULT_FORM_CONTROL_IS_READONLY = DEFAULT_TEXT_INPUT_IS_READONLY,
		isRequired: DEFAULT_FORM_CONTROL_IS_REQUIRED = DEFAULT_TEXT_INPUT_IS_REQUIRED,
		isSuccess: DEFAULT_FORM_CONTROL_IS_SUCCESS = DEFAULT_TEXT_INPUT_IS_SUCCESS,
		isWarning: DEFAULT_FORM_CONTROL_IS_WARNING = DEFAULT_TEXT_INPUT_IS_WARNING,
		size: DEFAULT_FORM_CONTROL_SIZE = DEFAULT_TEXT_INPUT_SIZE
	} = useFormControlContext();

	const {
		as = DEFAULT_TEXT_INPUT_AS,
		id = DEFAULT_FORM_CONTROL_ID,
		className = DEFAULT_CLASSNAME,
		renderLeft,
		renderRight,
		color = DEFAULT_FORM_CONTROL_COLOR,
		colorMode = DEFAULT_FORM_CONTROL_COLORMODE,
		placeholder,
		isCompact: isCompactProp = DEFAULT_TEXT_INPUT_IS_COMPACT,
		isDisabled: isDisabledProp = DEFAULT_FORM_CONTROL_IS_DISABLED,
		isFullWidth: isFullWidthProp = DEFAULT_TEXT_INPUT_IS_FULLWIDTH,
		isError: isErrorProp = DEFAULT_FORM_CONTROL_IS_ERROR,
		isFocused: isFocusedProp = DEFAULT_FORM_CONTROL_IS_FOCUSED,
		isOutlined: isOutlinedProp = DEFAULT_TEXT_INPUT_IS_OUTLINED,
		isReadOnly: isReadOnlyProp = DEFAULT_FORM_CONTROL_IS_READONLY,
		isRequired: isRequiredProp = DEFAULT_FORM_CONTROL_IS_REQUIRED,
		isSuccess: isSuccessProp = DEFAULT_FORM_CONTROL_IS_SUCCESS,
		isWarning: isWarningProp = DEFAULT_FORM_CONTROL_IS_WARNING,
		type = DEFAULT_TEXT_INPUT_TYPE,
		onClick,
		onFocus,
		onBlur,
		size: sizeProp = DEFAULT_FORM_CONTROL_SIZE,
		variant: variantProp = DEFAULT_TEXT_INPUT_VARIANT,
		sx = DEFAULT_POLYMORPHIC_SX,
		...rest
	} = props;

	const [isFocusedHook, setIsFocusedHook] = useBoolean();

	const {
		isCompact = DEFAULT_TEXT_INPUT_IS_COMPACT,
		isDisabled = DEFAULT_TEXT_INPUT_IS_DISABLED,
		isFullWidth = DEFAULT_TEXT_INPUT_IS_FULLWIDTH,
		isError = DEFAULT_TEXT_INPUT_IS_ERROR,
		isFocused: focused = DEFAULT_TEXT_INPUT_IS_FOCUSED,
		isOutlined = DEFAULT_TEXT_INPUT_IS_OUTLINED,
		isReadOnly = DEFAULT_TEXT_INPUT_IS_READONLY,
		isRequired = DEFAULT_TEXT_INPUT_IS_REQUIRED,
		isSuccess = DEFAULT_TEXT_INPUT_IS_SUCCESS,
		isWarning = DEFAULT_TEXT_INPUT_IS_WARNING,
		size = DEFAULT_TEXT_INPUT_SIZE,
		variant = DEFAULT_TEXT_INPUT_VARIANT
	} = useTextInputResponsiveValues({
		isCompact: isCompactProp,
		isDisabled: isDisabledProp,
		isFullWidth: isFullWidthProp,
		isError: isErrorProp,
		isFocused: isFocusedProp,
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

	const handleClick = (event: PolymorphicMouseEvent): void => {
		setIsFocusedHook.on();

		if (textInputRef && textInputRef.current) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(textInputRef.current as any).focus();
		}

		if (onClick) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			onClick(event as any);
		}
	};

	const handleFocus = (event: PolymorphicFocusEvent): void => {
		setIsFocusedHook.on();

		if (textInputRef && textInputRef.current) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(textInputRef.current as any).focus();
		}

		if (onFocus) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			onFocus(event as any);
		}
	};

	const handleBlur = (event: PolymorphicFocusEvent): void => {
		setIsFocusedHook.off();

		if (textInputRef && textInputRef.current) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(textInputRef.current as any).blur();
		}

		if (onBlur) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			onBlur(event as any);
		}
	};

	const { focusProps } = useFocus({ onFocus: handleFocus, onBlur: handleBlur });

	useEffect(() => {
		if (isFocused && textInputRef && textInputRef.current) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(textInputRef.current as any).focus();
		}
	}, [isFocused]);

	return (
		<Grid
			{...focusProps}
			className={classNames(KEYS_TEXT_INPUT_CLASS, classes.container, { [className]: !!className })}
			w={hasFormControl || isFullWidth ? '100%' : undefined}
			h={hasFormControl ? '100%' : undefined}
			templateColumns={compact([renderLeft ? 'auto' : null, '1fr', renderRight ? 'auto' : null]).join(' ')}
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
			{renderLeft ? (
				<GridItem alignSelf='center' justifySelf='center'>
					{renderLeft({ color, colorMode, w: childrenWidth, h: childrenHeight })}
				</GridItem>
			) : null}

			<GridItem ref={childrenRef as GridItemRef<PolymorphicDefaultElement>}>
				<Box
					{...rest}
					as={as}
					ref={refs}
					className={classNames(classes.element)}
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
	);
});

// TextInput.displayName = 'TextInput';

export default TextInput;
