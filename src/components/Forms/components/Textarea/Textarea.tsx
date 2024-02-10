import { forwardRef, useEffect, useMemo, useRef } from 'react';

import { compact, merge } from 'lodash-es';
import { useDimensionsRef, useFocus, useMergeRefs } from 'rooks';

import classes from '@common/classes';
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
	__DEFAULT_TEXTAREA_AS__,
	__DEFAULT_TEXTAREA_ID__,
	__DEFAULT_TEXTAREA_IS_COMPACT__,
	__DEFAULT_TEXTAREA_IS_DISABLED__,
	__DEFAULT_TEXTAREA_IS_ERROR__,
	__DEFAULT_TEXTAREA_IS_FOCUSED__,
	__DEFAULT_TEXTAREA_IS_OUTLINED__,
	__DEFAULT_TEXTAREA_IS_READONLY__,
	__DEFAULT_TEXTAREA_IS_REQUIRED__,
	__DEFAULT_TEXTAREA_IS_SUCCESS__,
	__DEFAULT_TEXTAREA_IS_WARNING__,
	__DEFAULT_TEXTAREA_RESIZE__,
	__DEFAULT_TEXTAREA_SIZE__,
	__DEFAULT_TEXTAREA_VARIANT__
} from './common/constants';
import { useTextareaResponsiveValues } from './common/hooks';
import { __KEYS_TEXTAREA_CLASS__, __KEYS_TEXTAREA_TOTAL_CLASS__ } from './common/keys';
import type {
	TextareaElement,
	TextareaFocusEvent,
	TextareaMouseEvent,
	TextareaProps,
	TextareaRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const { interactivity } = classes;

const Textarea = forwardRef(function Textarea<Element extends TextareaElement>(
	props: TextareaProps<Element>,
	ref: TextareaRef<Element>
): JSX.Element {
	const textareaRef = useRef<PolymorphicElement<Element>>();
	const refs = useMergeRefs(ref, textareaRef);

	const [childrenRef, childrenDimensions] = useDimensionsRef();
	const { width: childrenWidth = 0, height: childrenHeight = 0 } = childrenDimensions || {};

	const {
		color: __DEFAULT_FORM_CONTROL_COLOR__,
		colorMode: __DEFAULT_FORM_CONTROL_COLORMODE__,
		id: __DEFAULT_FORM_CONTROL_ID__ = __DEFAULT_TEXTAREA_ID__,
		hasFormControl,
		isDisabled: __DEFAULT_FORM_CONTROL_IS_DISABLED__ = __DEFAULT_TEXTAREA_IS_DISABLED__,
		isError: __DEFAULT_FORM_CONTROL_IS_ERROR__ = __DEFAULT_TEXTAREA_IS_ERROR__,
		isFocused: __DEFAULT_FORM_CONTROL_IS_FOCUSED__ = __DEFAULT_TEXTAREA_IS_FOCUSED__,
		isReadOnly: __DEFAULT_FORM_CONTROL_IS_READONLY__ = __DEFAULT_TEXTAREA_IS_READONLY__,
		isRequired: __DEFAULT_FORM_CONTROL_IS_REQUIRED__ = __DEFAULT_TEXTAREA_IS_REQUIRED__,
		isSuccess: __DEFAULT_FORM_CONTROL_IS_SUCCESS__ = __DEFAULT_TEXTAREA_IS_SUCCESS__,
		isWarning: __DEFAULT_FORM_CONTROL_IS_WARNING__ = __DEFAULT_TEXTAREA_IS_WARNING__,
		size: __DEFAULT_FORM_CONTROL_SIZE__ = __DEFAULT_TEXTAREA_SIZE__
	} = useFormControlContext();

	const {
		as = __DEFAULT_TEXTAREA_AS__,
		id = __DEFAULT_FORM_CONTROL_ID__,
		className = __DEFAULT_CLASSNAME__,
		w,
		h,
		renderLeft,
		renderRight,
		renderTotal,
		color = __DEFAULT_FORM_CONTROL_COLOR__,
		colorMode = __DEFAULT_FORM_CONTROL_COLORMODE__,
		placeholder,
		isCompact: isCompactProp = __DEFAULT_TEXTAREA_IS_COMPACT__,
		isDisabled: isDisabledProp = __DEFAULT_FORM_CONTROL_IS_DISABLED__,
		isError: isErrorProp = __DEFAULT_FORM_CONTROL_IS_ERROR__,
		isFocused: isFocusedProp = __DEFAULT_FORM_CONTROL_IS_FOCUSED__,
		isOutlined: isOutlinedProp = __DEFAULT_TEXTAREA_IS_OUTLINED__,
		isReadOnly: isReadOnlyProp = __DEFAULT_FORM_CONTROL_IS_READONLY__,
		isRequired: isRequiredProp = __DEFAULT_FORM_CONTROL_IS_REQUIRED__,
		isSuccess: isSuccessProp = __DEFAULT_FORM_CONTROL_IS_SUCCESS__,
		isWarning: isWarningProp = __DEFAULT_FORM_CONTROL_IS_WARNING__,
		onClick,
		onFocus,
		onBlur,
		resize: resizeProp = __DEFAULT_TEXTAREA_RESIZE__,
		size: sizeProp = __DEFAULT_FORM_CONTROL_SIZE__,
		variant: variantProp = __DEFAULT_TEXTAREA_VARIANT__,
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
		resize,
		size,
		variant
	} = useTextareaResponsiveValues<Element>({
		isCompact: isCompactProp,
		isDisabled: isDisabledProp,
		isError: isErrorProp,
		isFocused: isFocusedProp,
		isOutlined: isOutlinedProp,
		isReadOnly: isReadOnlyProp,
		isRequired: isRequiredProp,
		isSuccess: isSuccessProp,
		isWarning: isWarningProp,
		resize: resizeProp,
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
		element: 'textarea',
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

	const handleClick = (event: TextareaMouseEvent<Element>): void => {
		setIsFocusedHook.on();

		if (textareaRef && textareaRef.current) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(textareaRef.current as any).focus();
		}

		if (onClick) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			onClick(event as any);
		}
	};

	const handleFocus = (event: TextareaFocusEvent<Element>): void => {
		setIsFocusedHook.on();

		if (textareaRef && textareaRef.current) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(textareaRef.current as any).focus();
		}

		if (onFocus) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			onFocus(event as any);
		}
	};

	const handleBlur = (event: TextareaFocusEvent<Element>): void => {
		setIsFocusedHook.off();

		if (textareaRef && textareaRef.current) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(textareaRef.current as any).blur();
		}

		if (onBlur) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			onBlur(event as any);
		}
	};

	const { focusProps } = useFocus({ onFocus: handleFocus, onBlur: handleBlur });

	useEffect(() => {
		if (isFocused && textareaRef && textareaRef.current) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(textareaRef.current as any).focus();
		}
	}, [isFocused]);

	return (
		<Grid
			{...focusProps}
			className={classNames(__KEYS_TEXTAREA_CLASS__, classes.container, { [className]: !!className })}
			w={hasFormControl ? '100%' : w}
			h={hasFormControl ? '100%' : h}
			templateColumns={1}
			templateRows={1}
			onClick={handleClick}
			alignItems='stretch'
			alignContent='stretch'
			justifyItems='stretch'
			justifyContent='stretch'
			spacing={0}
			sx={merge(styles, sx)}
		>
			<GridItem columnStart={1} rowStart={1}>
				<Grid
					w='100%'
					h='100%'
					templateColumns={compact([renderLeft ? 'auto' : null, '1fr', renderRight ? 'auto' : null]).join(
						' '
					)}
					templateRows={1}
					alignItems='stretch'
					alignContent='stretch'
					justifyItems='stretch'
					justifyContent='stretch'
					px={config.padding.x}
					py={config.padding.y}
					spacing={config.spacing}
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
							className={classNames(classes.element, interactivity.resize[resize])}
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
			</GridItem>

			{renderTotal ? (
				<GridItem alignSelf='end' justifySelf='end' columnStart={1} rowStart={1} zIndex={1}>
					<Box className={__KEYS_TEXTAREA_TOTAL_CLASS__} mx={config.padding.x} my={config.padding.y}>
						{renderTotal({
							color: 'inherit',
							align: 'right',
							fontSize: 'xs',
							fontWeight: 'normal',
							lineClamp: 1
						})}
					</Box>
				</GridItem>
			) : null}
		</Grid>
	);
});

// Textarea.displayName = 'Textarea';

export default Textarea;
