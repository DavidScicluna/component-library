import type { ReactElement } from 'react';
import { forwardRef, useCallback, useEffect, useMemo, useRef } from 'react';

import { compact, merge } from 'lodash-es';
import { useFocus, useMergeRefs } from 'rooks';
import { useElementSize } from 'usehooks-ts';

import { __DEFAULT_CLASSNAME__, __DEFAULT_POLYMORPHIC_SX__ } from '@common/constants';
import { useBoolean, useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicComponentWithRef } from '@common/types';

import { Box } from '@components/Box';
import { Icon } from '@components/DataDisplay';
import { useFormsClasses, useFormsIconSize, useFormsSizeConfig, useFormsStyles } from '@components/Forms/common/hooks';
import { useFormControlContext } from '@components/Forms/components/FormControl/common/hooks';
import { Grid, GridItem } from '@components/Layout';

import { getFormDescriptionID } from '../FormDescription/common/utils';
import { getFormLabelID } from '../FormLabel/common/utils';

import {
	__DEFAULT_PASSWORD_INPUT_ID__,
	__DEFAULT_PASSWORD_INPUT_IS_COMPACT__,
	__DEFAULT_PASSWORD_INPUT_IS_DISABLED__,
	__DEFAULT_PASSWORD_INPUT_IS_ERROR__,
	__DEFAULT_PASSWORD_INPUT_IS_FOCUSED__,
	__DEFAULT_PASSWORD_INPUT_IS_OUTLINED__,
	__DEFAULT_PASSWORD_INPUT_IS_READONLY__,
	__DEFAULT_PASSWORD_INPUT_IS_REQUIRED__,
	__DEFAULT_PASSWORD_INPUT_IS_SUCCESS__,
	__DEFAULT_PASSWORD_INPUT_IS_WARNING__,
	__DEFAULT_PASSWORD_INPUT_SIZE__,
	__DEFAULT_PASSWORD_INPUT_TYPE__,
	__DEFAULT_PASSWORD_INPUT_VARIANT__
} from './common/constants';
import { __KEYS_PASSWORD_INPUT_CLASS__ } from './common/keys';
import type {
	PasswordInputDefaultElement,
	PasswordInputElement,
	PasswordInputFocusEvent,
	PasswordInputMouseEvent,
	PasswordInputProps,
	PasswordInputRef,
	PasswordInputSize,
	PasswordInputVariant
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const PasswordInput: PolymorphicComponentWithRef = forwardRef(function PasswordInput<
	Element extends PasswordInputElement = PasswordInputDefaultElement
>(props: PasswordInputProps<Element>, ref: PasswordInputRef<Element>): ReactElement {
	const inputRef = useRef<PasswordInputRef<Element>>();
	const refs = useMergeRefs(ref, inputRef);

	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const {
		color: __DEFAULT_FORM_CONTROL_COLOR__,
		colorMode: __DEFAULT_FORM_CONTROL_COLORMODE__,
		id: __DEFAULT_FORM_CONTROL_ID__ = __DEFAULT_PASSWORD_INPUT_ID__,
		hasFormControl,
		isDisabled: __DEFAULT_FORM_CONTROL_IS_DISABLED__ = __DEFAULT_PASSWORD_INPUT_IS_DISABLED__,
		isError: __DEFAULT_FORM_CONTROL_IS_ERROR__ = __DEFAULT_PASSWORD_INPUT_IS_ERROR__,
		isFocused: __DEFAULT_FORM_CONTROL_IS_FOCUSED__ = __DEFAULT_PASSWORD_INPUT_IS_FOCUSED__,
		isReadOnly: __DEFAULT_FORM_CONTROL_IS_READONLY__ = __DEFAULT_PASSWORD_INPUT_IS_READONLY__,
		isRequired: __DEFAULT_FORM_CONTROL_IS_REQUIRED__ = __DEFAULT_PASSWORD_INPUT_IS_REQUIRED__,
		isSuccess: __DEFAULT_FORM_CONTROL_IS_SUCCESS__ = __DEFAULT_PASSWORD_INPUT_IS_SUCCESS__,
		isWarning: __DEFAULT_FORM_CONTROL_IS_WARNING__ = __DEFAULT_PASSWORD_INPUT_IS_WARNING__,
		size: __DEFAULT_FORM_CONTROL_SIZE__ = __DEFAULT_PASSWORD_INPUT_SIZE__
	} = useFormControlContext();

	const {
		id = __DEFAULT_FORM_CONTROL_ID__,
		className = __DEFAULT_CLASSNAME__,
		w,
		h,
		renderLeft,
		renderRight,
		renderToggle,
		color = __DEFAULT_FORM_CONTROL_COLOR__,
		colorMode = __DEFAULT_FORM_CONTROL_COLORMODE__,
		placeholder,
		isCompact: comp = __DEFAULT_PASSWORD_INPUT_IS_COMPACT__,
		isDisabled: disabled = __DEFAULT_FORM_CONTROL_IS_DISABLED__,
		isError: error = __DEFAULT_FORM_CONTROL_IS_ERROR__,
		isFocused: focused = __DEFAULT_FORM_CONTROL_IS_FOCUSED__,
		isOutlined: outlined = __DEFAULT_PASSWORD_INPUT_IS_OUTLINED__,
		isReadOnly: readOnly = __DEFAULT_FORM_CONTROL_IS_READONLY__,
		isRequired: required = __DEFAULT_FORM_CONTROL_IS_REQUIRED__,
		isSuccess: success = __DEFAULT_FORM_CONTROL_IS_SUCCESS__,
		isWarning: warning = __DEFAULT_FORM_CONTROL_IS_WARNING__,
		type = __DEFAULT_PASSWORD_INPUT_TYPE__,
		onClick,
		onFocus,
		onBlur,
		size: s = __DEFAULT_FORM_CONTROL_SIZE__,
		variant: v = __DEFAULT_PASSWORD_INPUT_VARIANT__,
		sx = __DEFAULT_POLYMORPHIC_SX__,
		...rest
	} = props;

	const [isVisible, setIsVisible] = useBoolean();

	const [isFocusedHook, setIsFocusedHook] = useBoolean();

	const isCompact = useGetResponsiveValue<boolean>(comp);
	const isDisabled = useGetResponsiveValue<boolean>(disabled);
	const isError = useGetResponsiveValue<boolean>(error);
	const isFocusedProp = useGetResponsiveValue<boolean>(focused);
	const isOutlined = useGetResponsiveValue<boolean>(outlined);
	const isReadOnly = useGetResponsiveValue<boolean>(readOnly);
	const isRequired = useGetResponsiveValue<boolean>(required);
	const isSuccess = useGetResponsiveValue<boolean>(success);
	const isWarning = useGetResponsiveValue<boolean>(warning);

	const size = useGetResponsiveValue<PasswordInputSize>(s);
	const variant = useGetResponsiveValue<PasswordInputVariant>(v);

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

	const handleVisibility = useCallback((): void => {
		if (isVisible) {
			setIsVisible.off();
		} else {
			setIsVisible.on();
		}
	}, [isVisible]);

	const handleClick = (event: PasswordInputMouseEvent<Element>): void => {
		setIsFocusedHook.on();

		if (inputRef && inputRef.current) {
			inputRef.current.focus();
		}

		if (onClick) {
			onClick(event);
		}
	};

	const handleFocus = (event: PasswordInputFocusEvent<Element>): void => {
		setIsFocusedHook.on();

		if (inputRef && inputRef.current) {
			inputRef.current.focus();
		}

		if (onFocus) {
			onFocus(event);
		}
	};

	const handleBlur = (event: PasswordInputFocusEvent<Element>): void => {
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
			className={classNames(__KEYS_PASSWORD_INPUT_CLASS__, classes.container, { [className]: !!className })}
			w={hasFormControl ? '100%' : w}
			h={hasFormControl ? '100%' : h}
			templateColumns={compact(['auto', '1fr', renderRight || renderToggle ? 'auto' : null]).join(' ')}
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
					icon='lock'
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
					placeholder={placeholder}
					onFocus={handleFocus}
					onBlur={handleBlur}
					type={isVisible ? 'text' : type}
				/>
			</GridItem>

			{renderRight || renderToggle ? (
				<GridItem alignSelf='center' justifySelf='center'>
					{renderRight ? renderRight({ color, colorMode, w: childrenWidth, h: childrenHeight }) : null}
					{renderToggle
						? renderToggle({
								color,
								colorMode,
								isVisible,
								isCompact: true,
								onClick: handleVisibility,
								size: 'xs',
								variant: 'icon'
						  })
						: null}
				</GridItem>
			) : null}
		</Grid>
	);
});

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
