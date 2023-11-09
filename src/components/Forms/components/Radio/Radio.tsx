import type { ElementType, ReactElement } from 'react';
import { forwardRef, useEffect, useMemo, useRef } from 'react';

import { compact } from 'lodash-es';
import { useFocus } from 'rooks';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useBoolean, useGetColor } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types';

import { Icon } from '@components/DataDisplay';
import { useFormControlContext } from '@components/Forms/components/FormControl/common/hooks';
import { Grid, GridItem } from '@components/Layout';
import type { PushableOverlayRef } from '@components/Overlay';
import { PushableOverlay } from '@components/Overlay';
import { VisuallyHidden } from '@components/VisuallyHidden';

import { getFormDescriptionID } from '../FormDescription/common/utils';
import { getFormLabelID } from '../FormLabel/common/utils';

import {
	__DEFAULT_RADIO_ID__,
	__DEFAULT_RADIO_IS_ACTIVE__,
	__DEFAULT_RADIO_IS_CHECKED__,
	__DEFAULT_RADIO_IS_CLICKABLE__,
	__DEFAULT_RADIO_IS_COMPACT__,
	__DEFAULT_RADIO_IS_DISABLED__,
	__DEFAULT_RADIO_IS_ERROR__,
	__DEFAULT_RADIO_IS_FOCUSED__,
	__DEFAULT_RADIO_IS_OUTLINED__,
	__DEFAULT_RADIO_IS_READONLY__,
	__DEFAULT_RADIO_IS_REQUIRED__,
	__DEFAULT_RADIO_IS_SUCCESS__,
	__DEFAULT_RADIO_IS_WARNING__,
	__DEFAULT_RADIO_LABEL_POSITION__,
	__DEFAULT_RADIO_LINE_HEIGHT_SIZE__,
	__DEFAULT_RADIO_SIZE__,
	__DEFAULT_RADIO_TYPE__
} from './common/constants';
import { useRadioClasses, useRadioIconSize, useRadioResponsiveValues, useRadioSizeConfig } from './common/hooks';
import { __KEYS_RADIO_CLASS__ } from './common/keys';
import type { RadioFocusEvent, RadioMouseEvent, RadioProps, RadioRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const Radio = forwardRef(function Radio<Element extends ElementType = PolymorphicDefaultElement>(
	props: RadioProps<Element>,
	ref: RadioRef<Element>
): ReactElement {
	const pushableOverlayRef = useRef<PushableOverlayRef<PolymorphicDefaultElement>>(null);

	const {
		color: __DEFAULT_FORM_CONTROL_COLOR__,
		colorMode: __DEFAULT_FORM_CONTROL_COLORMODE__,
		id: __DEFAULT_FORM_CONTROL_ID__ = __DEFAULT_RADIO_ID__,
		hasFormControl,
		isDisabled: __DEFAULT_FORM_CONTROL_IS_DISABLED__ = __DEFAULT_RADIO_IS_DISABLED__,
		isError: __DEFAULT_FORM_CONTROL_IS_ERROR__ = __DEFAULT_RADIO_IS_ERROR__,
		isFocused: __DEFAULT_FORM_CONTROL_IS_FOCUSED__ = __DEFAULT_RADIO_IS_FOCUSED__,
		isReadOnly: __DEFAULT_FORM_CONTROL_IS_READONLY__ = __DEFAULT_RADIO_IS_READONLY__,
		isRequired: __DEFAULT_FORM_CONTROL_IS_REQUIRED__ = __DEFAULT_RADIO_IS_REQUIRED__,
		isSuccess: __DEFAULT_FORM_CONTROL_IS_SUCCESS__ = __DEFAULT_RADIO_IS_SUCCESS__,
		isWarning: __DEFAULT_FORM_CONTROL_IS_WARNING__ = __DEFAULT_RADIO_IS_WARNING__,
		size: __DEFAULT_FORM_CONTROL_SIZE__ = __DEFAULT_RADIO_SIZE__
	} = useFormControlContext();

	const {
		id = __DEFAULT_FORM_CONTROL_ID__,
		className = __DEFAULT_CLASSNAME__,
		renderLabel,
		w,
		h,
		color = __DEFAULT_FORM_CONTROL_COLOR__,
		colorMode = __DEFAULT_FORM_CONTROL_COLORMODE__,
		placeholder,
		isActive: isActiveProp = __DEFAULT_RADIO_IS_ACTIVE__,
		isChecked: isCheckedProp = __DEFAULT_RADIO_IS_CHECKED__,
		isClickable: isClickableProp = __DEFAULT_RADIO_IS_CLICKABLE__,
		isCompact: isCompactProp = __DEFAULT_RADIO_IS_COMPACT__,
		isDisabled: isDisabledProp = __DEFAULT_FORM_CONTROL_IS_DISABLED__,
		isError: isErrorProp = __DEFAULT_FORM_CONTROL_IS_ERROR__,
		isFocused: focused = __DEFAULT_FORM_CONTROL_IS_FOCUSED__,
		isOutlined: isOutlinedProp = __DEFAULT_RADIO_IS_OUTLINED__,
		isReadOnly: isReadOnlyProp = __DEFAULT_FORM_CONTROL_IS_READONLY__,
		isRequired: isRequiredProp = __DEFAULT_FORM_CONTROL_IS_REQUIRED__,
		isSuccess: isSuccessProp = __DEFAULT_FORM_CONTROL_IS_SUCCESS__,
		isWarning: isWarningProp = __DEFAULT_FORM_CONTROL_IS_WARNING__,
		labelPosition: labelPositionProp = __DEFAULT_RADIO_LABEL_POSITION__,
		type = __DEFAULT_RADIO_TYPE__,
		onClick,
		onFocus,
		onBlur,
		onToggle,
		size: sizeProp = __DEFAULT_FORM_CONTROL_SIZE__,
		...rest
	} = props;

	const [isFocusedHook, setIsFocusedHook] = useBoolean();

	const {
		isActive,
		isChecked,
		isClickable,
		isCompact,
		isDisabled,
		isError,
		isFocused: isFocusedProp,
		isOutlined,
		isReadOnly,
		isRequired,
		isSuccess,
		isWarning,
		labelPosition,
		size
	} = useRadioResponsiveValues<Element>({
		isActive: isActiveProp,
		isChecked: isCheckedProp,
		isClickable: isClickableProp,
		isCompact: isCompactProp,
		isDisabled: isDisabledProp,
		isError: isErrorProp,
		isFocused: focused,
		isOutlined: isOutlinedProp,
		isReadOnly: isReadOnlyProp,
		isRequired: isRequiredProp,
		isSuccess: isSuccessProp,
		isWarning: isWarningProp,
		labelPosition: labelPositionProp,
		size: sizeProp
	});

	const isFocused = useMemo<boolean>(() => isFocusedProp || isFocusedHook, [isFocusedProp, isFocusedHook]);

	const classes = useRadioClasses<Element>({ isActive, isClickable, isDisabled, isReadOnly });

	const config = useRadioSizeConfig<Element>({ isCompact, size });
	const iconSize = useRadioIconSize<Element>({ isCompact, size });

	const labelColor = useGetColor({
		color: 'gray',
		colorMode,
		colorType: color ? 'color' : 'default',
		hueType: 'text.primary'
	});

	const handleClick = (event: RadioMouseEvent<Element>): void => {
		if (isClickable) {
			setIsFocusedHook.on();
		}

		if (pushableOverlayRef && pushableOverlayRef.current) {
			pushableOverlayRef.current.click();
		}

		if (onToggle) {
			onToggle(!isChecked);
		}

		if (onClick) {
			onClick(event);
		}
	};

	const handleFocus = (event: RadioFocusEvent<Element>): void => {
		if (isClickable) {
			setIsFocusedHook.on();
		}

		if (onFocus) {
			onFocus(event);
		}
	};

	const handleBlur = (event: RadioFocusEvent<Element>): void => {
		if (isClickable) {
			setIsFocusedHook.off();
		}

		if (onBlur) {
			onBlur(event);
		}
	};

	const { focusProps } = useFocus({ onFocus: handleFocus, onBlur: handleBlur });

	useEffect(() => {
		if (isClickable && isFocused) {
			setIsFocusedHook.on();
		}
	}, [isFocused]);

	return (
		<Grid<Element>
			{...rest}
			{...focusProps}
			ref={ref}
			className={classNames(__KEYS_RADIO_CLASS__, classes, { [className]: !!className })}
			w={hasFormControl ? '100%' : w}
			h={hasFormControl ? '100%' : h}
			templateColumns={compact([
				renderLabel && labelPosition === 'left' ? '1fr' : null,
				'auto',
				renderLabel && labelPosition === 'right' ? '1fr' : null
			]).join(' ')}
			templateRows={1}
			alignItems='stretch'
			alignContent='stretch'
			justifyItems='stretch'
			justifyContent='stretch'
			onFocus={handleFocus}
			onBlur={handleBlur}
			onClick={handleClick}
			spacing={config.spacing}
		>
			{renderLabel && labelPosition === 'left' ? (
				<GridItem alignSelf='center' justifySelf='end'>
					{renderLabel
						? renderLabel({
								align: 'right',
								color: labelColor,
								fontSize: config.fontSize,
								lineHeight: __DEFAULT_RADIO_LINE_HEIGHT_SIZE__
						  })
						: null}
				</GridItem>
			) : null}

			<GridItem>
				<PushableOverlay
					ref={pushableOverlayRef}
					color={isError ? 'red' : isWarning ? 'yellow' : isSuccess ? 'green' : color}
					colorMode={colorMode}
					radius={config.radius}
					isActive={isClickable && isActive}
					isDisabled={isClickable && isDisabled}
					isFocused={isClickable && isFocused}
					isOutlined={isOutlined}
					isPushable={isClickable && !isReadOnly}
					variant={!isReadOnly && isChecked ? 'outlined' : 'monochrome'}
					px={config.padding.x}
					py={config.padding.y}
				>
					<VisuallyHidden<'input'>
						as='input'
						aria-checked={isChecked ? 'true' : 'false'}
						aria-disabled={isDisabled ? 'true' : 'false'}
						aria-describedby={getFormDescriptionID(id)}
						aria-invalid={isError ? 'true' : 'false'}
						aria-labelledby={getFormLabelID(id)}
						aria-placeholder={placeholder}
						aria-readonly={isReadOnly ? 'true' : 'false'}
						aria-required={isRequired ? 'true' : 'false'}
						aria-selected={isFocused ? 'true' : 'false'}
						checked={isChecked}
						placeholder={placeholder}
						type={type}
						onChange={onToggle ? (event) => onToggle(event.target.checked) : undefined}
					/>
					<Icon
						w={iconSize.w}
						h={iconSize.h}
						color={color}
						colorMode={colorMode}
						icon={isChecked ? 'circle' : 'radio_button_unchecked'}
						category='filled'
						size={iconSize.size}
						variant='unstyled'
						sx={{ visibility: isChecked ? 'visible' : 'hidden' }}
					/>
				</PushableOverlay>
			</GridItem>

			{renderLabel && labelPosition === 'right' ? (
				<GridItem alignSelf='center' justifySelf='start'>
					{renderLabel
						? renderLabel({
								align: 'left',
								color: labelColor,
								fontSize: config.fontSize,
								lineHeight: __DEFAULT_RADIO_LINE_HEIGHT_SIZE__
						  })
						: null}
				</GridItem>
			) : null}
		</Grid>
	);
});

Radio.displayName = 'Radio';

export default Radio;
