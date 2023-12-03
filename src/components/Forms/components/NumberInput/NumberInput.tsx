import type { ReactElement } from 'react';
import { forwardRef, useEffect, useMemo, useRef } from 'react';

import { clamp, compact, merge } from 'lodash-es';
import { useFocus, useMergeRefs } from 'rooks';
import { useElementSize } from 'usehooks-ts';

import { __DEFAULT_CLASSNAME__, __DEFAULT_POLYMORPHIC_SX__ } from '@common/constants';
import { useBoolean, useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicComponentWithRef } from '@common/types';

import { Box } from '@components/Box';
import { IconButton, IconButtonGroup, IconButtonGroupItem, IconButtonIcon } from '@components/Buttons';
import { useFormsClasses, useFormsSizeConfig, useFormsStyles } from '@components/Forms/common/hooks';
import { useFormControlContext } from '@components/Forms/components/FormControl/common/hooks';
import { Grid, GridItem } from '@components/Layout';

import { getFormDescriptionID } from '../FormDescription/common/utils';
import { getFormLabelID } from '../FormLabel/common/utils';

import {
	__DEFAULT_NUMBER_INPUT_ID__,
	__DEFAULT_NUMBER_INPUT_IS_COMPACT__,
	__DEFAULT_NUMBER_INPUT_IS_DISABLED__,
	__DEFAULT_NUMBER_INPUT_IS_ERROR__,
	__DEFAULT_NUMBER_INPUT_IS_FOCUSED__,
	__DEFAULT_NUMBER_INPUT_IS_OUTLINED__,
	__DEFAULT_NUMBER_INPUT_IS_READONLY__,
	__DEFAULT_NUMBER_INPUT_IS_REQUIRED__,
	__DEFAULT_NUMBER_INPUT_IS_SUCCESS__,
	__DEFAULT_NUMBER_INPUT_IS_WARNING__,
	__DEFAULT_NUMBER_INPUT_SIZE__,
	__DEFAULT_NUMBER_INPUT_START_VALUE__,
	__DEFAULT_NUMBER_INPUT_STEP__,
	__DEFAULT_NUMBER_INPUT_TYPE__,
	__DEFAULT_NUMBER_INPUT_VARIANT__
} from './common/constants';
import { __KEYS_NUMBER_INPUT_CLASS__ } from './common/keys';
import type {
	NumberInputDefaultElement,
	NumberInputElement,
	NumberInputFocusEvent,
	NumberInputMouseEvent,
	NumberInputProps,
	NumberInputRef,
	NumberInputSize,
	NumberInputVariant
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const NumberInput: PolymorphicComponentWithRef = forwardRef(function NumberInput<
	Element extends NumberInputElement = NumberInputDefaultElement
>(props: NumberInputProps<Element>, ref: NumberInputRef<Element>): ReactElement {
	const numberinputRef = useRef<NumberInputRef<Element>>();
	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const refs = useMergeRefs(ref, numberinputRef);

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
		id = __DEFAULT_FORM_CONTROL_ID__,
		className = __DEFAULT_CLASSNAME__,
		w,
		h,
		renderLeft,
		renderRight,
		color = __DEFAULT_FORM_CONTROL_COLOR__,
		colorMode = __DEFAULT_FORM_CONTROL_COLORMODE__,
		placeholder,
		isCompact: comp = __DEFAULT_NUMBER_INPUT_IS_COMPACT__,
		isDisabled: disabled = __DEFAULT_FORM_CONTROL_IS_DISABLED__,
		isError: error = __DEFAULT_FORM_CONTROL_IS_ERROR__,
		isFocused: focused = __DEFAULT_FORM_CONTROL_IS_FOCUSED__,
		isOutlined: outlined = __DEFAULT_NUMBER_INPUT_IS_OUTLINED__,
		isReadOnly: readOnly = __DEFAULT_FORM_CONTROL_IS_READONLY__,
		isRequired: required = __DEFAULT_FORM_CONTROL_IS_REQUIRED__,
		isSuccess: success = __DEFAULT_FORM_CONTROL_IS_SUCCESS__,
		isWarning: warning = __DEFAULT_FORM_CONTROL_IS_WARNING__,
		type = __DEFAULT_NUMBER_INPUT_TYPE__,
		min,
		max,
		onClick,
		onFocus,
		onBlur,
		onIncrement,
		onDecrement,
		startValue = __DEFAULT_NUMBER_INPUT_START_VALUE__,
		step = __DEFAULT_NUMBER_INPUT_STEP__,
		size: s = __DEFAULT_FORM_CONTROL_SIZE__,
		variant: v = __DEFAULT_NUMBER_INPUT_VARIANT__,
		value,
		sx = __DEFAULT_POLYMORPHIC_SX__,
		...rest
	} = props;

	const [isFocusedHook, setIsFocusedHook] = useBoolean();

	// TODO: Create a hook that gets all responsive prop values

	const isCompact = useGetResponsiveValue<boolean>(comp);
	const isDisabled = useGetResponsiveValue<boolean>(disabled);
	const isError = useGetResponsiveValue<boolean>(error);
	const isFocusedProp = useGetResponsiveValue<boolean>(focused);
	const isOutlined = useGetResponsiveValue<boolean>(outlined);
	const isReadOnly = useGetResponsiveValue<boolean>(readOnly);
	const isRequired = useGetResponsiveValue<boolean>(required);
	const isSuccess = useGetResponsiveValue<boolean>(success);
	const isWarning = useGetResponsiveValue<boolean>(warning);

	const size = useGetResponsiveValue<NumberInputSize>(s);
	const variant = useGetResponsiveValue<NumberInputVariant>(v);

	const isFocused = useMemo<boolean>(() => isFocusedProp || isFocusedHook, [isFocusedProp, isFocusedHook]);

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
			if (typeof value !== 'number' || Number.isNaN(value)) {
				onIncrement(min ?? clamp(startValue!, min, max));
			} else if (max !== undefined) {
				onIncrement(value + step! <= max ? value + step! : max);
			} else {
				onIncrement(value + step!);
			}
		}
	};

	const handleDecrement = (): void => {
		if (onDecrement) {
			if (typeof value !== 'number' || Number.isNaN(value)) {
				onDecrement(max ?? clamp(startValue!, min, max));
			} else {
				onDecrement(getDecrementedValue({ value: value, min, step, allowNegative }));
			}
		}
	};

	const handleClick = (event: NumberInputMouseEvent<Element>): void => {
		setIsFocusedHook.on();

		if (numberinputRef && numberinputRef.current) {
			numberinputRef.current.focus();
		}

		if (onClick) {
			onClick(event);
		}
	};

	const handleFocus = (event: NumberInputFocusEvent<Element>): void => {
		setIsFocusedHook.on();

		if (numberinputRef && numberinputRef.current) {
			numberinputRef.current.focus();
		}

		if (onFocus) {
			onFocus(event);
		}
	};

	const handleBlur = (event: NumberInputFocusEvent<Element>): void => {
		setIsFocusedHook.off();

		if (numberinputRef && numberinputRef.current) {
			numberinputRef.current.blur();
		}

		if (onBlur) {
			onBlur(event);
		}
	};

	const { focusProps } = useFocus({ onFocus: handleFocus, onBlur: handleBlur });

	useEffect(() => {
		if (isFocused && numberinputRef && numberinputRef.current) {
			numberinputRef.current.focus();
		}
	}, [isFocused]);

	return (
		<Grid
			{...focusProps}
			className={classNames(__KEYS_NUMBER_INPUT_CLASS__, classes.container, { [className]: !!className })}
			w={hasFormControl ? '100%' : w}
			h={hasFormControl ? '100%' : h}
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
						{(props) => (
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
						{(props) => (
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

NumberInput.displayName = 'NumberInput';

export default NumberInput;
