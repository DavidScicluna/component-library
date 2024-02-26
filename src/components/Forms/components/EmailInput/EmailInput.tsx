import { forwardRef, useEffect, useMemo, useRef } from 'react';

import classNames from 'classnames';
import { compact, merge } from 'lodash-es';
import { useDimensionsRef, useFocus, useMergeRefs } from 'rooks';

import { DEFAULT_CLASSNAME, DEFAULT_POLYMORPHIC_SX } from '@common/constants';
import { useBoolean } from '@common/hooks';
import type { PolymorphicDefaultElement, PolymorphicElement } from '@common/types';

import type { BoxProps } from '@components/Box';
import { Box } from '@components/Box';
import { Icon } from '@components/DataDisplay';
import { useFormsClasses, useFormsIconSize, useFormsSizeConfig, useFormsStyles } from '@components/Forms/common/hooks';
import { useFormControlContext } from '@components/Forms/components/FormControl/common/hooks';
import type { GridItemRef } from '@components/Layout';
import { Grid, GridItem } from '@components/Layout';

import { getFormDescriptionID } from '../FormDescription/common/utils';
import { getFormLabelID } from '../FormLabel/common/utils';

import {
	DEFAULT_EMAIL_INPUT_AS,
	DEFAULT_EMAIL_INPUT_ID,
	DEFAULT_EMAIL_INPUT_IS_COMPACT,
	DEFAULT_EMAIL_INPUT_IS_DISABLED,
	DEFAULT_EMAIL_INPUT_IS_ERROR,
	DEFAULT_EMAIL_INPUT_IS_FOCUSED,
	DEFAULT_EMAIL_INPUT_IS_FULLWIDTH,
	DEFAULT_EMAIL_INPUT_IS_OUTLINED,
	DEFAULT_EMAIL_INPUT_IS_READONLY,
	DEFAULT_EMAIL_INPUT_IS_REQUIRED,
	DEFAULT_EMAIL_INPUT_IS_SUCCESS,
	DEFAULT_EMAIL_INPUT_IS_WARNING,
	DEFAULT_EMAIL_INPUT_SIZE,
	DEFAULT_EMAIL_INPUT_TYPE,
	DEFAULT_EMAIL_INPUT_VARIANT
} from './common/constants';
import { useEmailInputResponsiveValues } from './common/hooks';
import { KEYS_EMAIL_INPUT_CLASS } from './common/keys';
import type {
	EmailInputElement,
	EmailInputFocusEvent,
	EmailInputMouseEvent,
	EmailInputProps,
	EmailInputRef
} from './common/types';

const EmailInput = forwardRef(function EmailInput<Element extends EmailInputElement>(
	props: EmailInputProps<Element>,
	ref: EmailInputRef<Element>
): JSX.Element {
	const emailInput = useRef<PolymorphicElement<Element>>();
	const refs = useMergeRefs(ref, emailInput);

	const [childrenRef, childrenDimensions] = useDimensionsRef();
	const { width: childrenWidth = 0, height: childrenHeight = 0 } = childrenDimensions || {};

	const {
		color: DEFAULT_FORM_CONTROL_COLOR,
		colorMode: DEFAULT_FORM_CONTROL_COLORMODE,
		id: DEFAULT_FORM_CONTROL_ID = DEFAULT_EMAIL_INPUT_ID,
		hasFormControl,
		isDisabled: DEFAULT_FORM_CONTROL_IS_DISABLED = DEFAULT_EMAIL_INPUT_IS_DISABLED,
		isError: DEFAULT_FORM_CONTROL_IS_ERROR = DEFAULT_EMAIL_INPUT_IS_ERROR,
		isFocused: DEFAULT_FORM_CONTROL_IS_FOCUSED = DEFAULT_EMAIL_INPUT_IS_FOCUSED,
		isReadOnly: DEFAULT_FORM_CONTROL_IS_READONLY = DEFAULT_EMAIL_INPUT_IS_READONLY,
		isRequired: DEFAULT_FORM_CONTROL_IS_REQUIRED = DEFAULT_EMAIL_INPUT_IS_REQUIRED,
		isSuccess: DEFAULT_FORM_CONTROL_IS_SUCCESS = DEFAULT_EMAIL_INPUT_IS_SUCCESS,
		isWarning: DEFAULT_FORM_CONTROL_IS_WARNING = DEFAULT_EMAIL_INPUT_IS_WARNING,
		size: DEFAULT_FORM_CONTROL_SIZE = DEFAULT_EMAIL_INPUT_SIZE
	} = useFormControlContext();

	const {
		as = DEFAULT_EMAIL_INPUT_AS,
		id = DEFAULT_FORM_CONTROL_ID,
		className = DEFAULT_CLASSNAME,
		renderLeft,
		renderRight,
		color = DEFAULT_FORM_CONTROL_COLOR,
		colorMode = DEFAULT_FORM_CONTROL_COLORMODE,
		placeholder,
		isCompact: isCompactProp = DEFAULT_EMAIL_INPUT_IS_COMPACT,
		isDisabled: isDisabledProp = DEFAULT_FORM_CONTROL_IS_DISABLED,
		isFullWidth: isFullWidthProp = DEFAULT_EMAIL_INPUT_IS_FULLWIDTH,
		isError: isErrorProp = DEFAULT_FORM_CONTROL_IS_ERROR,
		isFocused: isFocusedProp = DEFAULT_FORM_CONTROL_IS_FOCUSED,
		isOutlined: isOutlinedProp = DEFAULT_EMAIL_INPUT_IS_OUTLINED,
		isReadOnly: isReadOnlyProp = DEFAULT_FORM_CONTROL_IS_READONLY,
		isRequired: isRequiredProp = DEFAULT_FORM_CONTROL_IS_REQUIRED,
		isSuccess: isSuccessProp = DEFAULT_FORM_CONTROL_IS_SUCCESS,
		isWarning: isWarningProp = DEFAULT_FORM_CONTROL_IS_WARNING,
		type = DEFAULT_EMAIL_INPUT_TYPE,
		onClick,
		onFocus,
		onBlur,
		size: sizeProp = DEFAULT_FORM_CONTROL_SIZE,
		variant: variantProp = DEFAULT_EMAIL_INPUT_VARIANT,
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
		isOutlined,
		isReadOnly,
		isRequired,
		isSuccess,
		isWarning,
		size,
		variant
	} = useEmailInputResponsiveValues<Element>({
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
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			onClick(event as any);
		}
	};

	const handleFocus = (event: EmailInputFocusEvent<Element>): void => {
		setIsFocusedHook.on();

		if (emailInput && emailInput.current) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(emailInput.current as any).focus();
		}

		if (onFocus) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			onFocus(event as any);
		}
	};

	const handleBlur = (event: EmailInputFocusEvent<Element>): void => {
		setIsFocusedHook.off();

		if (emailInput && emailInput.current) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(emailInput.current as any).focus();
		}

		if (onBlur) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			onBlur(event as any);
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
			className={classNames(KEYS_EMAIL_INPUT_CLASS, classes.container, { [className]: !!className })}
			w={hasFormControl || isFullWidth ? '100%' : undefined}
			h={hasFormControl ? '100%' : undefined}
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

			<GridItem ref={childrenRef as GridItemRef<PolymorphicDefaultElement>}>
				<Box
					{...(rest as BoxProps<Element>)}
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

// EmailInput.displayName = 'EmailInput';

export default EmailInput;
