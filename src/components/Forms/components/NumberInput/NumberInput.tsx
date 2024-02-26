import { forwardRef, useEffect, useMemo, useRef } from 'react';

import classNames from 'classnames';
import { clamp, compact, merge } from 'lodash-es';
import { useDimensionsRef, useFocus, useMergeRefs } from 'rooks';

import { __DEFAULT_CLASSNAME__, __DEFAULT_POLYMORPHIC_SX__ } from '@common/constants';
import { useBoolean } from '@common/hooks';
import type { PolymorphicDefaultElement, PolymorphicElement } from '@common/types';

import type { BoxProps } from '@components/Box';
import { Box } from '@components/Box';
import type { IconButtonGroupItemChildrenProps } from '@components/Buttons';
import { IconButton, IconButtonGroup, IconButtonGroupItem, IconButtonIcon } from '@components/Buttons';
import { useFormsClasses, useFormsSizeConfig, useFormsStyles } from '@components/Forms/common/hooks';
import { useFormControlContext } from '@components/Forms/components/FormControl/common/hooks';
import type { GridItemRef } from '@components/Layout';
import { Grid, GridItem } from '@components/Layout';

import { getFormDescriptionID } from '../FormDescription/common/utils';
import { getFormLabelID } from '../FormLabel/common/utils';

import {
	__DEFAULT_NUMBER_INPUT_AS__,
	__DEFAULT_NUMBER_INPUT_ID__,
	__DEFAULT_NUMBER_INPUT_IS_COMPACT__,
	__DEFAULT_NUMBER_INPUT_IS_DISABLED__,
	__DEFAULT_NUMBER_INPUT_IS_ERROR__,
	__DEFAULT_NUMBER_INPUT_IS_FOCUSED__,
	__DEFAULT_NUMBER_INPUT_IS_FULLWIDTH__,
	__DEFAULT_NUMBER_INPUT_IS_NEGATIVE_ALLOWED__,
	__DEFAULT_NUMBER_INPUT_IS_OUTLINED__,
	__DEFAULT_NUMBER_INPUT_IS_READONLY__,
	__DEFAULT_NUMBER_INPUT_IS_REQUIRED__,
	__DEFAULT_NUMBER_INPUT_IS_SUCCESS__,
	__DEFAULT_NUMBER_INPUT_IS_WARNING__,
	__DEFAULT_NUMBER_INPUT_MAX__,
	__DEFAULT_NUMBER_INPUT_MIN__,
	__DEFAULT_NUMBER_INPUT_SIZE__,
	__DEFAULT_NUMBER_INPUT_START_VALUE__,
	__DEFAULT_NUMBER_INPUT_STEP__,
	__DEFAULT_NUMBER_INPUT_TYPE__,
	__DEFAULT_NUMBER_INPUT_VARIANT__
} from './common/constants';
import { useNumberInputResponsiveValues } from './common/hooks';
import { __KEYS_NUMBER_INPUT_CLASS__ } from './common/keys';
import type {
	NumberInputElement,
	NumberInputFocusEvent,
	NumberInputMouseEvent,
	NumberInputProps,
	NumberInputRef
} from './common/types';

const NumberInput = forwardRef(function NumberInput<Element extends NumberInputElement>(
	props: NumberInputProps<Element>,
	ref: NumberInputRef<Element>
): JSX.Element {
	const numberInputRef = useRef<PolymorphicElement<Element>>();
	const refs = useMergeRefs(ref, numberInputRef);

	const [childrenRef, childrenDimensions] = useDimensionsRef();
	const { width: childrenWidth = 0, height: childrenHeight = 0 } = childrenDimensions || {};

	const {
		color: __DEFAULT_FORM_CONTROL_COLOR__,
		colorMode: __DEFAULT_FORM_CONTROL_COLORMODE__,
		id: __DEFAULT_FORM_CONTROL_ID__ = __DEFAULT_NUMBER_INPUT_ID__,
		hasFormControl,
		isDisabled: __DEFAULT_FORM_CONTROL_IS_DISABLED__ = __DEFAULT_NUMBER_INPUT_IS_DISABLED__,
		isError: __DEFAULT_FORM_CONTROL_IS_ERROR__ = __DEFAULT_NUMBER_INPUT_IS_ERROR__,
		isFocused: __DEFAULT_FORM_CONTROL_IS_FOCUSED__ = __DEFAULT_NUMBER_INPUT_IS_FOCUSED__,
		isReadOnly: __DEFAULT_FORM_CONTROL_IS_READONLY__ = __DEFAULT_NUMBER_INPUT_IS_READONLY__,
		isRequired: __DEFAULT_FORM_CONTROL_IS_REQUIRED__ = __DEFAULT_NUMBER_INPUT_IS_REQUIRED__,
		isSuccess: __DEFAULT_FORM_CONTROL_IS_SUCCESS__ = __DEFAULT_NUMBER_INPUT_IS_SUCCESS__,
		isWarning: __DEFAULT_FORM_CONTROL_IS_WARNING__ = __DEFAULT_NUMBER_INPUT_IS_WARNING__,
		size: __DEFAULT_FORM_CONTROL_SIZE__ = __DEFAULT_NUMBER_INPUT_SIZE__
	} = useFormControlContext();

	const {
		as = __DEFAULT_NUMBER_INPUT_AS__,
		id = __DEFAULT_FORM_CONTROL_ID__,
		className = __DEFAULT_CLASSNAME__,
		renderLeft,
		renderRight,
		color = __DEFAULT_FORM_CONTROL_COLOR__,
		colorMode = __DEFAULT_FORM_CONTROL_COLORMODE__,
		placeholder,
		isCompact: isCompactProp = __DEFAULT_NUMBER_INPUT_IS_COMPACT__,
		isDisabled: isDisabledProp = __DEFAULT_FORM_CONTROL_IS_DISABLED__,
		isFullWidth: isFullWidthProp = __DEFAULT_NUMBER_INPUT_IS_FULLWIDTH__,
		isError: isErrorProp = __DEFAULT_FORM_CONTROL_IS_ERROR__,
		isFocused: isFocusedProp = __DEFAULT_FORM_CONTROL_IS_FOCUSED__,
		isOutlined: isOutlinedProp = __DEFAULT_NUMBER_INPUT_IS_OUTLINED__,
		isReadOnly: isReadOnlyProp = __DEFAULT_FORM_CONTROL_IS_READONLY__,
		isRequired: isRequiredProp = __DEFAULT_FORM_CONTROL_IS_REQUIRED__,
		isNegativeAllowed: isNegativeAllowedProp = __DEFAULT_NUMBER_INPUT_IS_NEGATIVE_ALLOWED__,
		isSuccess: isSuccessProp = __DEFAULT_FORM_CONTROL_IS_SUCCESS__,
		isWarning: isWarningProp = __DEFAULT_FORM_CONTROL_IS_WARNING__,
		type = __DEFAULT_NUMBER_INPUT_TYPE__,
		min = __DEFAULT_NUMBER_INPUT_MIN__,
		max = __DEFAULT_NUMBER_INPUT_MAX__,
		onClick,
		onFocus,
		onBlur,
		onIncrement,
		onDecrement,
		startValue: startValueProp = __DEFAULT_NUMBER_INPUT_START_VALUE__,
		step = __DEFAULT_NUMBER_INPUT_STEP__,
		size: sizeProp = __DEFAULT_FORM_CONTROL_SIZE__,
		variant: variantProp = __DEFAULT_NUMBER_INPUT_VARIANT__,
		value,
		sx = __DEFAULT_POLYMORPHIC_SX__,
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
		isNegativeAllowed,
		isSuccess,
		isWarning,
		startValue,
		size,
		variant
	} = useNumberInputResponsiveValues<Element>({
		isCompact: isCompactProp,
		isDisabled: isDisabledProp,
		isFullWidth: isFullWidthProp,
		isError: isErrorProp,
		isFocused: isFocusedProp,
		isOutlined: isOutlinedProp,
		isReadOnly: isReadOnlyProp,
		isRequired: isRequiredProp,
		isNegativeAllowed: isNegativeAllowedProp,
		isSuccess: isSuccessProp,
		isWarning: isWarningProp,
		startValue: startValueProp,
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

	const handleIncrement = (): void => {
		if (onIncrement) {
			const minNum = Number(min);
			const maxNum = Number(max);
			const stepNum = Number(step);

			if (typeof value !== 'number' || Number.isNaN(value)) {
				onIncrement(minNum ?? clamp(startValue!, minNum, maxNum));
			} else if (maxNum !== undefined) {
				onIncrement(value + stepNum! <= maxNum ? value + stepNum! : maxNum);
			} else {
				onIncrement(value + stepNum!);
			}
		}
	};

	const handleDecrement = (): void => {
		if (onDecrement) {
			const minNum = Number(min);
			const maxNum = Number(max);
			const stepNum = Number(step);

			if (typeof value !== 'number' || Number.isNaN(value)) {
				onDecrement(maxNum ?? clamp(startValue!, minNum, maxNum));
			} else {
				const nextValue = value - stepNum;

				if (minNum !== undefined && nextValue < minNum) {
					onDecrement(minNum);
				} else if (!isNegativeAllowed && nextValue < 0 && minNum === undefined) {
					onDecrement(value);
				} else {
					onDecrement(nextValue);
				}
			}
		}
	};

	const handleClick = (event: NumberInputMouseEvent<Element>): void => {
		setIsFocusedHook.on();

		if (numberInputRef && numberInputRef.current) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(numberInputRef.current as any).focus();
		}

		if (onClick) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			onClick(event as any);
		}
	};

	const handleFocus = (event: NumberInputFocusEvent<Element>): void => {
		setIsFocusedHook.on();

		if (numberInputRef && numberInputRef.current) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(numberInputRef.current as any).focus();
		}

		if (onFocus) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			onFocus(event as any);
		}
	};

	const handleBlur = (event: NumberInputFocusEvent<Element>): void => {
		setIsFocusedHook.off();

		if (numberInputRef && numberInputRef.current) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(numberInputRef.current as any).blur();
		}

		if (onBlur) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			onBlur(event as any);
		}
	};

	const { focusProps } = useFocus({ onFocus: handleFocus, onBlur: handleBlur });

	useEffect(() => {
		if (isFocused && numberInputRef && numberInputRef.current) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(numberInputRef.current as any).focus();
		}
	}, [isFocused]);

	return (
		<Grid
			{...focusProps}
			className={classNames(__KEYS_NUMBER_INPUT_CLASS__, classes.container, { [className]: !!className })}
			w={hasFormControl || isFullWidth ? '100%' : undefined}
			h={hasFormControl ? '100%' : undefined}
			templateColumns={['1fr', 'auto'].join(' ')}
			templateRows={1}
			onClick={handleClick}
			alignItems='stretch'
			alignContent='stretch'
			justifyItems='stretch'
			justifyContent='stretch'
			spacing={0}
			sx={merge(styles, sx)}
		>
			<GridItem>
				<Grid
					w='100%'
					h='100%'
					templateColumns={compact([renderLeft ? 'auto' : null, '1fr', renderRight ? 'auto' : null]).join(
						' '
					)}
					templateRows={1}
					onClick={handleClick}
					alignItems='stretch'
					alignContent='stretch'
					justifyItems='stretch'
					justifyContent='stretch'
					spacing={config.spacing}
					px={config.padding.x}
					py={config.padding.y}
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
							value={value}
						/>
					</GridItem>

					{renderRight ? (
						<GridItem alignSelf='center' justifySelf='center'>
							{renderRight({ color, colorMode, w: childrenWidth, h: childrenHeight })}
						</GridItem>
					) : null}
				</Grid>
			</GridItem>
			<GridItem>
				<IconButtonGroup color={color} colorMode={colorMode} direction='column'>
					<IconButtonGroupItem index={0} total={2}>
						{(props: IconButtonGroupItemChildrenProps) => (
							<IconButton
								{...props}
								color={color}
								colorMode={colorMode}
								isCompact
								onClick={handleIncrement}
								size='xs'
								variant='icon'
							>
								<IconButtonIcon icon='expand_less' category='filled' />
							</IconButton>
						)}
					</IconButtonGroupItem>
					<IconButtonGroupItem index={1} total={2}>
						{(props: IconButtonGroupItemChildrenProps) => (
							<IconButton
								{...props}
								color={color}
								colorMode={colorMode}
								isCompact
								onClick={handleDecrement}
								size='xs'
								variant='icon'
							>
								<IconButtonIcon icon='expand_more' category='filled' />
							</IconButton>
						)}
					</IconButtonGroupItem>
				</IconButtonGroup>
			</GridItem>
		</Grid>
	);
});

// NumberInput.displayName = 'NumberInput';

export default NumberInput;
