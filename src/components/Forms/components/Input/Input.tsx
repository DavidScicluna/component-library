import type { ReactElement } from 'react';
import { forwardRef, useEffect, useMemo, useRef } from 'react';

import classNames from 'classnames';
import { compact, merge } from 'lodash-es';
import { useFocus, useMergeRefs } from 'rooks';
import { useElementSize } from 'usehooks-ts';

import { __DEFAULT_CLASSNAME__, __DEFAULT_POLYMORPHIC_SX__ } from '@common/constants';
import { useBoolean, useGetResponsiveValue } from '@common/hooks';

import { Box } from '@components/Box';
import { Grid, GridItem } from '@components/Layout';

import { useFormControlContext } from '../FormControl/common/hooks';
import { utils as formDescriptionUtils } from '../FormDescription';
import { utils as formLabelUtils } from '../FormLabel';

import {
	__DEFAULT_INPUT_IS_DISABLED__,
	__DEFAULT_INPUT_IS_ERROR__,
	__DEFAULT_INPUT_IS_FOCUSED__,
	__DEFAULT_INPUT_IS_OUTLINED__,
	__DEFAULT_INPUT_IS_READONLY__,
	__DEFAULT_INPUT_IS_REQUIRED__,
	__DEFAULT_INPUT_IS_SUCCESS__,
	__DEFAULT_INPUT_IS_WARNING__,
	__DEFAULT_INPUT_SIZE__,
	__DEFAULT_INPUT_VARIANT__
} from './common/constants';
import { useInputClasses, useInputSizeConfig, useInputStyles } from './common/hooks';
import { __KEYS_INPUT_CLASS__ } from './common/keys';
import type {
	InputDefaultElement,
	InputElement,
	InputFocusEvent,
	InputMouseEvent,
	InputProps,
	InputRef,
	InputSize,
	InputVariant
} from './common/types';

const { getFormLabelID } = formLabelUtils;
const { getFormDescriptionID } = formDescriptionUtils;

const Input = forwardRef(function Input<Element extends InputElement = InputDefaultElement>(
	props: InputProps<Element>,
	ref: InputRef<Element>
): ReactElement {
	const inputRef = useRef<InputRef<Element>>();
	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const refs = useMergeRefs(ref, inputRef);

	const {
		color: __DEFAULT_FORM_CONTROL_COLOR__,
		colorMode: __DEFAULT_FORM_CONTROL_COLORMODE__,
		id,
		hasFormControl,
		isDisabled: __DEFAULT_FORM_CONTROL_IS_DISABLED__ = __DEFAULT_INPUT_IS_DISABLED__,
		isError: __DEFAULT_FORM_CONTROL_IS_ERROR__ = __DEFAULT_INPUT_IS_ERROR__,
		isFocused: __DEFAULT_FORM_CONTROL_IS_FOCUSED__ = __DEFAULT_INPUT_IS_FOCUSED__,
		isReadOnly: __DEFAULT_FORM_CONTROL_IS_READONLY__ = __DEFAULT_INPUT_IS_READONLY__,
		isRequired: __DEFAULT_FORM_CONTROL_IS_REQUIRED__ = __DEFAULT_INPUT_IS_REQUIRED__,
		isSuccess: __DEFAULT_FORM_CONTROL_IS_SUCCESS__ = __DEFAULT_INPUT_IS_SUCCESS__,
		isWarning: __DEFAULT_FORM_CONTROL_IS_WARNING__ = __DEFAULT_INPUT_IS_WARNING__,
		size: __DEFAULT_FORM_CONTROL_SIZE__ = __DEFAULT_INPUT_SIZE__
	} = useFormControlContext();

	const {
		className = __DEFAULT_CLASSNAME__,
		w,
		h,
		renderLeft,
		renderRight,
		color = __DEFAULT_FORM_CONTROL_COLOR__,
		colorMode = __DEFAULT_FORM_CONTROL_COLORMODE__,
		placeholder,
		isDisabled: disabled = __DEFAULT_FORM_CONTROL_IS_DISABLED__,
		isError: error = __DEFAULT_FORM_CONTROL_IS_ERROR__,
		isFocused: focused = __DEFAULT_FORM_CONTROL_IS_FOCUSED__,
		isOutlined: outlined = __DEFAULT_INPUT_IS_OUTLINED__,
		isReadOnly: readOnly = __DEFAULT_FORM_CONTROL_IS_READONLY__,
		isRequired: required = __DEFAULT_FORM_CONTROL_IS_REQUIRED__,
		isSuccess: success = __DEFAULT_FORM_CONTROL_IS_SUCCESS__,
		isWarning: warning = __DEFAULT_FORM_CONTROL_IS_WARNING__,
		onClick,
		onFocus,
		onBlur,
		size: s = __DEFAULT_FORM_CONTROL_SIZE__,
		variant: v = __DEFAULT_INPUT_VARIANT__,
		sx = __DEFAULT_POLYMORPHIC_SX__,
		...rest
	} = props;

	const [isFocusedHook, setIsFocusedHook] = useBoolean();

	const isDisabled = useGetResponsiveValue<boolean>(disabled);
	const isError = useGetResponsiveValue<boolean>(error);
	const isFocusedProp = useGetResponsiveValue<boolean>(focused);
	const isOutlined = useGetResponsiveValue<boolean>(outlined);
	const isReadOnly = useGetResponsiveValue<boolean>(readOnly);
	const isRequired = useGetResponsiveValue<boolean>(required);
	const isSuccess = useGetResponsiveValue<boolean>(success);
	const isWarning = useGetResponsiveValue<boolean>(warning);

	const size = useGetResponsiveValue<InputSize>(s);
	const variant = useGetResponsiveValue<InputVariant>(v);

	const isFocused = useMemo<boolean>(() => isFocusedProp || isFocusedHook, [isFocusedProp, isFocusedHook]);

	const config = useInputSizeConfig<Element>({ size });

	const classes = useInputClasses<Element>({
		color,
		colorMode,
		isDisabled,
		isError,
		isOutlined,
		isReadOnly,
		isSuccess,
		isWarning,
		size,
		variant
	});
	const styles = useInputStyles<Element>({
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

	const handleClick = (event: InputMouseEvent<Element>): void => {
		setIsFocusedHook.on();

		if (inputRef && inputRef.current) {
			inputRef.current.focus();
		}

		if (onClick) {
			onClick(event);
		}
	};

	const handleFocus = (event: InputFocusEvent<Element>): void => {
		setIsFocusedHook.on();

		if (inputRef && inputRef.current) {
			inputRef.current.focus();
		}

		if (onFocus) {
			onFocus(event);
		}
	};

	const handleBlur = (event: InputFocusEvent<Element>): void => {
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
			className={classNames(__KEYS_INPUT_CLASS__, classes.container, { [className]: !!className })}
			w={hasFormControl ? '100%' : w}
			h={hasFormControl ? '100%' : h}
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

			<GridItem ref={childrenRef}>
				<Box<Element>
					{...rest}
					ref={refs}
					className={classNames(classes.input)}
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
					placeholder={placeholder}
					onFocus={handleFocus}
					onBlur={handleBlur}
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

Input.displayName = 'Input';

export default Input;
