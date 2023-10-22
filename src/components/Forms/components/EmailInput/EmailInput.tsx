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
import { hooks as forms_hooks } from '@components/Forms';
import { Grid, GridItem } from '@components/Layout';

import { utils as formDescriptionUtils } from '../FormDescription';
import { utils as formLabelUtils } from '../FormLabel';

import {
	__DEFAULT_EMAIL_INPUT_IS_DISABLED__,
	__DEFAULT_EMAIL_INPUT_IS_ERROR__,
	__DEFAULT_EMAIL_INPUT_IS_FOCUSED__,
	__DEFAULT_EMAIL_INPUT_IS_OUTLINED__,
	__DEFAULT_EMAIL_INPUT_IS_READONLY__,
	__DEFAULT_EMAIL_INPUT_IS_REQUIRED__,
	__DEFAULT_EMAIL_INPUT_IS_SUCCESS__,
	__DEFAULT_EMAIL_INPUT_IS_WARNING__,
	__DEFAULT_EMAIL_INPUT_SIZE__,
	__DEFAULT_EMAIL_INPUT_TYPE__,
	__DEFAULT_EMAIL_INPUT_VARIANT__
} from './common/constants';
import { __KEYS_EMAIL_INPUT_CLASS__ } from './common/keys';
import type {
	EmailInputDefaultElement,
	EmailInputElement,
	EmailInputFocusEvent,
	EmailInputMouseEvent,
	EmailInputProps,
	EmailInputRef,
	EmailInputSize,
	EmailInputVariant
} from './common/types';

const { useFormsClasses, useFormsStyles, useFormsSizeConfig, useFormControlContext } = forms_hooks;

const { getFormLabelID } = formLabelUtils;
const { getFormDescriptionID } = formDescriptionUtils;

const EmailInput = forwardRef(function EmailInput<Element extends EmailInputElement = EmailInputDefaultElement>(
	props: EmailInputProps<Element>,
	ref: EmailInputRef<Element>
): ReactElement {
	const inputRef = useRef<EmailInputRef<Element>>();
	const refs = useMergeRefs(ref, inputRef);

	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const {
		color: __DEFAULT_FORM_CONTROL_COLOR__,
		colorMode: __DEFAULT_FORM_CONTROL_COLORMODE__,
		id,
		hasFormControl,
		isDisabled: __DEFAULT_FORM_CONTROL_IS_DISABLED__ = __DEFAULT_EMAIL_INPUT_IS_DISABLED__,
		isError: __DEFAULT_FORM_CONTROL_IS_ERROR__ = __DEFAULT_EMAIL_INPUT_IS_ERROR__,
		isFocused: __DEFAULT_FORM_CONTROL_IS_FOCUSED__ = __DEFAULT_EMAIL_INPUT_IS_FOCUSED__,
		isReadOnly: __DEFAULT_FORM_CONTROL_IS_READONLY__ = __DEFAULT_EMAIL_INPUT_IS_READONLY__,
		isRequired: __DEFAULT_FORM_CONTROL_IS_REQUIRED__ = __DEFAULT_EMAIL_INPUT_IS_REQUIRED__,
		isSuccess: __DEFAULT_FORM_CONTROL_IS_SUCCESS__ = __DEFAULT_EMAIL_INPUT_IS_SUCCESS__,
		isWarning: __DEFAULT_FORM_CONTROL_IS_WARNING__ = __DEFAULT_EMAIL_INPUT_IS_WARNING__,
		size: __DEFAULT_FORM_CONTROL_SIZE__ = __DEFAULT_EMAIL_INPUT_SIZE__
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
		isOutlined: outlined = __DEFAULT_EMAIL_INPUT_IS_OUTLINED__,
		isReadOnly: readOnly = __DEFAULT_FORM_CONTROL_IS_READONLY__,
		isRequired: required = __DEFAULT_FORM_CONTROL_IS_REQUIRED__,
		isSuccess: success = __DEFAULT_FORM_CONTROL_IS_SUCCESS__,
		isWarning: warning = __DEFAULT_FORM_CONTROL_IS_WARNING__,
		type = __DEFAULT_EMAIL_INPUT_TYPE__,
		onClick,
		onFocus,
		onBlur,
		size: s = __DEFAULT_FORM_CONTROL_SIZE__,
		variant: v = __DEFAULT_EMAIL_INPUT_VARIANT__,
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

	const size = useGetResponsiveValue<EmailInputSize>(s);
	const variant = useGetResponsiveValue<EmailInputVariant>(v);

	const isFocused = useMemo<boolean>(() => isFocusedProp || isFocusedHook, [isFocusedProp, isFocusedHook]);

	const config = useFormsSizeConfig({ size });

	const classes = useFormsClasses({
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

	const handleClick = (event: EmailInputMouseEvent<Element>): void => {
		setIsFocusedHook.on();

		if (inputRef && inputRef.current) {
			inputRef.current.focus();
		}

		if (onClick) {
			onClick(event);
		}
	};

	const handleFocus = (event: EmailInputFocusEvent<Element>): void => {
		setIsFocusedHook.on();

		if (inputRef && inputRef.current) {
			inputRef.current.focus();
		}

		if (onFocus) {
			onFocus(event);
		}
	};

	const handleBlur = (event: EmailInputFocusEvent<Element>): void => {
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
			className={classNames(__KEYS_EMAIL_INPUT_CLASS__, classes.container, { [className]: !!className })}
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
				{renderLeft ? renderLeft({ color, colorMode, w: childrenWidth, h: childrenHeight }) : null}
				<Icon
					w={`${childrenHeight}px`}
					h={`${childrenHeight}px`}
					color={color}
					colorMode={colorMode}
					icon='alternate_email'
					category='filled'
					size={`${childrenHeight}px`}
					variant='unstyled'
				/>
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

EmailInput.displayName = 'EmailInput';

export default EmailInput;
