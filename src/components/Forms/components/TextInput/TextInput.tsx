import { forwardRef, useEffect, useMemo, useRef } from 'react';

import classNames from 'classnames';
import { compact, merge } from 'lodash-es';
import { useDimensionsRef, useFocus, useMergeRefs } from 'rooks';

import { __DEFAULT_CLASSNAME__, __DEFAULT_POLYMORPHIC_SX__ } from '@common/constants';
import { useBoolean } from '@common/hooks';
import type { PolymorphicDefaultElement, PolymorphicElement } from '@common/types';

import type { BoxProps } from '@components/Box';
import { Box } from '@components/Box';
import { useFormsClasses, useFormsSizeConfig, useFormsStyles } from '@components/Forms/common/hooks';
import { useFormControlContext } from '@components/Forms/components/FormControl/common/hooks';
import type { GridItemRef } from '@components/Layout';
import { Grid, GridItem } from '@components/Layout';

import { getFormDescriptionID } from '../FormDescription/common/utils';
import { getFormLabelID } from '../FormLabel/common/utils';

import {
	__DEFAULT_TEXT_INPUT_AS__,
	__DEFAULT_TEXT_INPUT_ID__,
	__DEFAULT_TEXT_INPUT_IS_COMPACT__,
	__DEFAULT_TEXT_INPUT_IS_DISABLED__,
	__DEFAULT_TEXT_INPUT_IS_ERROR__,
	__DEFAULT_TEXT_INPUT_IS_FOCUSED__,
	__DEFAULT_TEXT_INPUT_IS_OUTLINED__,
	__DEFAULT_TEXT_INPUT_IS_READONLY__,
	__DEFAULT_TEXT_INPUT_IS_REQUIRED__,
	__DEFAULT_TEXT_INPUT_IS_SUCCESS__,
	__DEFAULT_TEXT_INPUT_IS_WARNING__,
	__DEFAULT_TEXT_INPUT_SIZE__,
	__DEFAULT_TEXT_INPUT_TYPE__,
	__DEFAULT_TEXT_INPUT_VARIANT__
} from './common/constants';
import { useTextInputResponsiveValues } from './common/hooks';
import { __KEYS_TEXT_INPUT_CLASS__ } from './common/keys';
import type {
	TextInputElement,
	TextInputFocusEvent,
	TextInputMouseEvent,
	TextInputProps,
	TextInputRef
} from './common/types';

const TextInput = forwardRef(function TextInput<Element extends TextInputElement>(
	props: TextInputProps<Element>,
	ref: TextInputRef<Element>
): JSX.Element {
	const textInputRef = useRef<PolymorphicElement<Element>>();
	const refs = useMergeRefs(ref, textInputRef);

	const [childrenRef, childrenDimensions] = useDimensionsRef();
	const { width: childrenWidth = 0, height: childrenHeight = 0 } = childrenDimensions || {};

	const {
		color: __DEFAULT_FORM_CONTROL_COLOR__,
		colorMode: __DEFAULT_FORM_CONTROL_COLORMODE__,
		id: __DEFAULT_FORM_CONTROL_ID__ = __DEFAULT_TEXT_INPUT_ID__,
		hasFormControl,
		isDisabled: __DEFAULT_FORM_CONTROL_IS_DISABLED__ = __DEFAULT_TEXT_INPUT_IS_DISABLED__,
		isError: __DEFAULT_FORM_CONTROL_IS_ERROR__ = __DEFAULT_TEXT_INPUT_IS_ERROR__,
		isFocused: __DEFAULT_FORM_CONTROL_IS_FOCUSED__ = __DEFAULT_TEXT_INPUT_IS_FOCUSED__,
		isReadOnly: __DEFAULT_FORM_CONTROL_IS_READONLY__ = __DEFAULT_TEXT_INPUT_IS_READONLY__,
		isRequired: __DEFAULT_FORM_CONTROL_IS_REQUIRED__ = __DEFAULT_TEXT_INPUT_IS_REQUIRED__,
		isSuccess: __DEFAULT_FORM_CONTROL_IS_SUCCESS__ = __DEFAULT_TEXT_INPUT_IS_SUCCESS__,
		isWarning: __DEFAULT_FORM_CONTROL_IS_WARNING__ = __DEFAULT_TEXT_INPUT_IS_WARNING__,
		size: __DEFAULT_FORM_CONTROL_SIZE__ = __DEFAULT_TEXT_INPUT_SIZE__
	} = useFormControlContext();

	const {
		as = __DEFAULT_TEXT_INPUT_AS__,
		id = __DEFAULT_FORM_CONTROL_ID__,
		className = __DEFAULT_CLASSNAME__,
		w,
		h,
		renderLeft,
		renderRight,
		color = __DEFAULT_FORM_CONTROL_COLOR__,
		colorMode = __DEFAULT_FORM_CONTROL_COLORMODE__,
		placeholder,
		isCompact: isCompactProp = __DEFAULT_TEXT_INPUT_IS_COMPACT__,
		isDisabled: isDisabledProp = __DEFAULT_FORM_CONTROL_IS_DISABLED__,
		isError: isErrorProp = __DEFAULT_FORM_CONTROL_IS_ERROR__,
		isFocused: isFocusedProp = __DEFAULT_FORM_CONTROL_IS_FOCUSED__,
		isOutlined: isOutlinedProp = __DEFAULT_TEXT_INPUT_IS_OUTLINED__,
		isReadOnly: isReadOnlyProp = __DEFAULT_FORM_CONTROL_IS_READONLY__,
		isRequired: isRequiredProp = __DEFAULT_FORM_CONTROL_IS_REQUIRED__,
		isSuccess: isSuccessProp = __DEFAULT_FORM_CONTROL_IS_SUCCESS__,
		isWarning: isWarningProp = __DEFAULT_FORM_CONTROL_IS_WARNING__,
		type = __DEFAULT_TEXT_INPUT_TYPE__,
		onClick,
		onFocus,
		onBlur,
		size: sizeProp = __DEFAULT_FORM_CONTROL_SIZE__,
		variant: variantProp = __DEFAULT_TEXT_INPUT_VARIANT__,
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
	} = useTextInputResponsiveValues<Element>({
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

	const handleClick = (event: TextInputMouseEvent<Element>): void => {
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

	const handleFocus = (event: TextInputFocusEvent<Element>): void => {
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

	const handleBlur = (event: TextInputFocusEvent<Element>): void => {
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
			className={classNames(__KEYS_TEXT_INPUT_CLASS__, classes.container, { [className]: !!className })}
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

// TextInput.displayName = 'TextInput';

export default TextInput;
