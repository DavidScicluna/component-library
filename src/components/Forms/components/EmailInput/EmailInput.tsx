import type { ReactElement } from 'react';
import { forwardRef, useEffect, useMemo, useRef } from 'react';

import { compact, merge } from 'lodash-es';
import { useFocus, useMergeRefs } from 'rooks';
import { useElementSize } from 'usehooks-ts';

import { __DEFAULT_CLASSNAME__, __DEFAULT_POLYMORPHIC_SX__ } from '@common/constants';
import { useBoolean } from '@common/hooks';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultProps,
	PolymorphicElement
} from '@common/types';

import { Box } from '@components/Box';
import { Icon } from '@components/DataDisplay';
import { useFormsClasses, useFormsIconSize, useFormsSizeConfig, useFormsStyles } from '@components/Forms/common/hooks';
import { useFormControlContext } from '@components/Forms/components/FormControl/common/hooks';
import type { GridItemRef } from '@components/Layout';
import { Grid, GridItem } from '@components/Layout';

import { getFormDescriptionID } from '../FormDescription/common/utils';
import { getFormLabelID } from '../FormLabel/common/utils';

import {
	__DEFAULT_EMAIL_INPUT_ID__,
	__DEFAULT_EMAIL_INPUT_IS_COMPACT__,
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
import { useEmailInputResponsiveValues } from './common/hooks';
import { __KEYS_EMAIL_INPUT_CLASS__ } from './common/keys';
import type {
	EmailInputDefaultElement,
	EmailInputElement,
	EmailInputFocusEvent,
	EmailInputMouseEvent,
	EmailInputProps,
	EmailInputRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const EmailInput: PolymorphicComponentWithRef = forwardRef(function EmailInput<
	Element extends EmailInputElement = EmailInputDefaultElement
>(props: EmailInputProps<Element>, ref: EmailInputRef<Element>): ReactElement {
	const emailInput = useRef<PolymorphicElement<Element>>();
	const refs = useMergeRefs(ref, emailInput);

	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const {
		color: __DEFAULT_FORM_CONTROL_COLOR__,
		colorMode: __DEFAULT_FORM_CONTROL_COLORMODE__,
		id: __DEFAULT_FORM_CONTROL_ID__ = __DEFAULT_EMAIL_INPUT_ID__,
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
		id = __DEFAULT_FORM_CONTROL_ID__,
		className = __DEFAULT_CLASSNAME__,
		w,
		h,
		renderLeft,
		renderRight,
		color = __DEFAULT_FORM_CONTROL_COLOR__,
		colorMode = __DEFAULT_FORM_CONTROL_COLORMODE__,
		placeholder,
		isCompact: isCompactProp = __DEFAULT_EMAIL_INPUT_IS_COMPACT__,
		isDisabled: isDisabledProp = __DEFAULT_FORM_CONTROL_IS_DISABLED__,
		isError: isErrorProp = __DEFAULT_FORM_CONTROL_IS_ERROR__,
		isFocused: isFocusedProp = __DEFAULT_FORM_CONTROL_IS_FOCUSED__,
		isOutlined: isOutlinedProp = __DEFAULT_EMAIL_INPUT_IS_OUTLINED__,
		isReadOnly: isReadOnlyProp = __DEFAULT_FORM_CONTROL_IS_READONLY__,
		isRequired: isRequiredProp = __DEFAULT_FORM_CONTROL_IS_REQUIRED__,
		isSuccess: isSuccessProp = __DEFAULT_FORM_CONTROL_IS_SUCCESS__,
		isWarning: isWarningProp = __DEFAULT_FORM_CONTROL_IS_WARNING__,
		type = __DEFAULT_EMAIL_INPUT_TYPE__,
		onClick,
		onFocus,
		onBlur,
		size: sizeProp = __DEFAULT_FORM_CONTROL_SIZE__,
		variant: variantProp = __DEFAULT_EMAIL_INPUT_VARIANT__,
		sx = __DEFAULT_POLYMORPHIC_SX__,
		...rest
	} = props;

	const [isFocusedHook, setIsFocusedHook] = useBoolean();

	const {
		isCompact,
		isDisabled,
		isError,
		isFocused: focused,
		isOutlined,
		isReadOnly,
		isRequired,
		isSuccess,
		isWarning,
		size,
		variant
	} = useEmailInputResponsiveValues({
		isCompact: isCompactProp,
		isDisabled: isDisabledProp,
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

	const handleClick = (event: EmailInputMouseEvent<Element>): void => {
		setIsFocusedHook.on();

		if (emailInput && emailInput.current) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(emailInput.current as any).focus();
		}

		if (onClick) {
			onClick(event);
		}
	};

	const handleFocus = (event: EmailInputFocusEvent<Element>): void => {
		setIsFocusedHook.on();

		if (emailInput && emailInput.current) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(emailInput.current as any).focus();
		}

		if (onFocus) {
			onFocus(event);
		}
	};

	const handleBlur = (event: EmailInputFocusEvent<Element>): void => {
		setIsFocusedHook.off();

		if (emailInput && emailInput.current) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(emailInput.current as any).focus();
		}

		if (onBlur) {
			onBlur(event);
		}
	};

	const { focusProps } = useFocus({ onFocus: handleFocus, onBlur: handleBlur });

	useEffect(() => {
		if (isFocused && emailInput && emailInput.current) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(emailInput.current as any).focus();
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
				<Icon
					w={iconSize.w}
					h={iconSize.h}
					color={color}
					colorMode={colorMode}
					icon='alternate_email'
					category='filled'
					size={iconSize.size}
					variant='unstyled'
				/>
				{renderLeft ? renderLeft({ color, colorMode, w: childrenWidth, h: childrenHeight }) : null}
			</GridItem>

			<GridItem ref={childrenRef as GridItemRef}>
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

export default <Element extends EmailInputElement = EmailInputDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <EmailInput<Element> {...props} />;
