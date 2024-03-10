import { forwardRef, useEffect, useMemo, useRef } from 'react';

import classNames from 'classnames';
import { compact } from 'lodash-es';
import { useFocus } from 'rooks';

import { DEFAULT_CLASSNAME } from '@common/constants';
import { useBoolean, useGetColor } from '@common/hooks';
import type {
	PolymorphicChangeEvent,
	PolymorphicDefaultElement,
	PolymorphicElement,
	PolymorphicElementType,
	PolymorphicFocusEvent,
	PolymorphicMouseEvent
} from '@common/types';

import { Box } from '@components/Box';
import { Icon } from '@components/DataDisplay';
import { useFormControlContext } from '@components/Forms/components/FormControl/common/hooks';
import { Grid, GridItem } from '@components/Layout';
import { PushableOverlay } from '@components/Overlay';
import { Text } from '@components/Typography';
import { VisuallyHidden } from '@components/VisuallyHidden';

import { getFormDescriptionID } from '../FormDescription/common/utils';
import { getFormLabelID } from '../FormLabel/common/utils';

import {
	DEFAULT_SWITCH_HAS_IO_LABEL,
	DEFAULT_SWITCH_ID,
	DEFAULT_SWITCH_IS_ACTIVE,
	DEFAULT_SWITCH_IS_CHECKED,
	DEFAULT_SWITCH_IS_CLICKABLE,
	DEFAULT_SWITCH_IS_COMPACT,
	DEFAULT_SWITCH_IS_DISABLED,
	DEFAULT_SWITCH_IS_ERROR,
	DEFAULT_SWITCH_IS_FOCUSED,
	DEFAULT_SWITCH_IS_OUTLINED,
	DEFAULT_SWITCH_IS_READONLY,
	DEFAULT_SWITCH_IS_REQUIRED,
	DEFAULT_SWITCH_IS_SUCCESS,
	DEFAULT_SWITCH_IS_WARNING,
	DEFAULT_SWITCH_LABEL_POSITION,
	DEFAULT_SWITCH_LINE_HEIGHT_SIZE,
	DEFAULT_SWITCH_SIZE,
	DEFAULT_SWITCH_TYPE
} from './common/constants';
import { useSwitchClasses, useSwitchIconSize, useSwitchResponsiveValues, useSwitchSizeConfig } from './common/hooks';
import { KEYS_SWITCH_CLASS } from './common/keys';
// TODO: Go over all Form components Event types and check if they are used if not remove
import type { SwitchProps, SwitchRef } from './common/types';

const Switch = forwardRef(function Switch<Element extends PolymorphicElementType>(
	props: SwitchProps<Element>,
	ref: SwitchRef<Element>
): JSX.Element {
	const pushableOverlayRef = useRef<PolymorphicElement<PolymorphicDefaultElement>>(null);

	const {
		color: DEFAULT_FORM_CONTROL_COLOR,
		colorMode: DEFAULT_FORM_CONTROL_COLORMODE,
		id: DEFAULT_FORM_CONTROL_ID = DEFAULT_SWITCH_ID,
		hasFormControl,
		isDisabled: DEFAULT_FORM_CONTROL_IS_DISABLED = DEFAULT_SWITCH_IS_DISABLED,
		isError: DEFAULT_FORM_CONTROL_IS_ERROR = DEFAULT_SWITCH_IS_ERROR,
		isFocused: DEFAULT_FORM_CONTROL_IS_FOCUSED = DEFAULT_SWITCH_IS_FOCUSED,
		isReadOnly: DEFAULT_FORM_CONTROL_IS_READONLY = DEFAULT_SWITCH_IS_READONLY,
		isRequired: DEFAULT_FORM_CONTROL_IS_REQUIRED = DEFAULT_SWITCH_IS_REQUIRED,
		isSuccess: DEFAULT_FORM_CONTROL_IS_SUCCESS = DEFAULT_SWITCH_IS_SUCCESS,
		isWarning: DEFAULT_FORM_CONTROL_IS_WARNING = DEFAULT_SWITCH_IS_WARNING,
		size: DEFAULT_FORM_CONTROL_SIZE = DEFAULT_SWITCH_SIZE
	} = useFormControlContext();

	const {
		id = DEFAULT_FORM_CONTROL_ID,
		className = DEFAULT_CLASSNAME,
		renderLabel,
		w,
		h,
		color = DEFAULT_FORM_CONTROL_COLOR,
		colorMode = DEFAULT_FORM_CONTROL_COLORMODE,
		placeholder,
		hasIOLabel: hasIOLabelProp = DEFAULT_SWITCH_HAS_IO_LABEL,
		isActive: isActiveProp = DEFAULT_SWITCH_IS_ACTIVE,
		isChecked: isCheckedProp = DEFAULT_SWITCH_IS_CHECKED,
		isClickable: isClickableProp = DEFAULT_SWITCH_IS_CLICKABLE,
		isCompact: isCompactProp = DEFAULT_SWITCH_IS_COMPACT,
		isDisabled: isDisabledProp = DEFAULT_FORM_CONTROL_IS_DISABLED,
		isError: isErrorProp = DEFAULT_FORM_CONTROL_IS_ERROR,
		isFocused: isFocusedProp = DEFAULT_FORM_CONTROL_IS_FOCUSED,
		isOutlined: isOutlinedProp = DEFAULT_SWITCH_IS_OUTLINED,
		isReadOnly: isReadOnlyProp = DEFAULT_FORM_CONTROL_IS_READONLY,
		isRequired: isRequiredProp = DEFAULT_FORM_CONTROL_IS_REQUIRED,
		isSuccess: isSuccessProp = DEFAULT_FORM_CONTROL_IS_SUCCESS,
		isWarning: isWarningProp = DEFAULT_FORM_CONTROL_IS_WARNING,
		labelPosition: labelPositionProp = DEFAULT_SWITCH_LABEL_POSITION,
		type = DEFAULT_SWITCH_TYPE,
		onClick,
		onFocus,
		onBlur,
		onToggle,
		size: sizeProp = DEFAULT_FORM_CONTROL_SIZE,
		...rest
	} = props;

	const [isFocusedHook, setIsFocusedHook] = useBoolean();

	const {
		hasIOLabel,
		isActive,
		isChecked,
		isClickable,
		isCompact,
		isDisabled,
		isError,
		isFocused: focused,
		isOutlined,
		isReadOnly,
		isRequired,
		isSuccess,
		isWarning,
		labelPosition,
		size
	} = useSwitchResponsiveValues<Element>({
		hasIOLabel: hasIOLabelProp,
		isActive: isActiveProp,
		isChecked: isCheckedProp,
		isClickable: isClickableProp,
		isCompact: isCompactProp,
		isDisabled: isDisabledProp,
		isError: isErrorProp,
		isFocused: isFocusedProp,
		isOutlined: isOutlinedProp,
		isReadOnly: isReadOnlyProp,
		isRequired: isRequiredProp,
		isSuccess: isSuccessProp,
		isWarning: isWarningProp,
		labelPosition: labelPositionProp,
		size: sizeProp
	});

	const isFocused = useMemo<boolean>(() => focused || isFocusedHook, [focused, isFocusedHook]);

	const classes = useSwitchClasses<Element>({ isActive, isClickable, isDisabled, isReadOnly });

	const config = useSwitchSizeConfig<Element>({ isCompact, size });
	const iconSize = useSwitchIconSize<Element>({ isCompact, size });

	const labelColor = useGetColor({
		color: 'gray',
		colorMode,
		colorType: color ? 'color' : 'default',
		hueType: 'text.primary'
	});

	const handleClick = (event: PolymorphicMouseEvent): void => {
		if (isClickable) {
			setIsFocusedHook.on();
		}

		if (pushableOverlayRef && pushableOverlayRef.current) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(pushableOverlayRef.current as any).click();
		}

		if (onToggle) {
			onToggle(!isChecked);
		}

		if (onClick) {
			onClick(event);
		}
	};

	const handleFocus = (event: PolymorphicFocusEvent): void => {
		if (isClickable) {
			setIsFocusedHook.on();
		}

		if (onFocus) {
			onFocus(event);
		}
	};

	const handleBlur = (event: PolymorphicFocusEvent): void => {
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
		<Grid
			{...rest}
			{...focusProps}
			ref={ref}
			className={classNames(KEYS_SWITCH_CLASS, classes, { [className]: !!className })}
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
								lineHeight: DEFAULT_SWITCH_LINE_HEIGHT_SIZE
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
					variant={!isReadOnly && isChecked ? 'contained' : 'monochrome'}
					px={config.padding.x}
					py={config.padding.y}
				>
					<VisuallyHidden>
						<Box
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
							onChange={
								onToggle
									? // eslint-disable-next-line @typescript-eslint/no-explicit-any
										(event: PolymorphicChangeEvent) => onToggle(!!(event.target as any).checked)
									: undefined
							}
						/>
					</VisuallyHidden>
					<Grid
						w='100%'
						h='100%'
						templateColumns={[iconSize.w, iconSize.w].join(' ')}
						templateRows={1}
						alignItems='stretch'
						alignContent='stretch'
						justifyItems='stretch'
						justifyContent='stretch'
						spacing={0}
					>
						<GridItem alignSelf='center' justifySelf='center'>
							{!isChecked ? (
								<Icon
									w={iconSize.w}
									h={iconSize.h}
									color={color}
									colorMode={colorMode}
									icon='circle'
									category='filled'
									size={iconSize.size}
									variant='unstyled'
								/>
							) : hasIOLabel ? (
								<Text
									w={iconSize.w}
									h={iconSize.h}
									align='center'
									fontSize={config.fontSize}
									lineHeight={DEFAULT_SWITCH_LINE_HEIGHT_SIZE}
									textTransform='uppercase'
								>
									I
								</Text>
							) : null}
						</GridItem>
						<GridItem alignSelf='center' justifySelf='center'>
							{isChecked ? (
								<Icon
									w={iconSize.w}
									h={iconSize.h}
									color={color}
									colorMode={colorMode}
									icon='circle'
									category='filled'
									size={iconSize.size}
									variant='unstyled'
								/>
							) : hasIOLabel ? (
								<Text
									w={iconSize.w}
									h={iconSize.h}
									align='center'
									fontSize={config.fontSize}
									lineHeight={DEFAULT_SWITCH_LINE_HEIGHT_SIZE}
									textTransform='uppercase'
								>
									O
								</Text>
							) : null}
						</GridItem>
					</Grid>
				</PushableOverlay>
			</GridItem>

			{renderLabel && labelPosition === 'right' ? (
				<GridItem alignSelf='center' justifySelf='start'>
					{renderLabel
						? renderLabel({
								align: 'left',
								color: labelColor,
								fontSize: config.fontSize,
								lineHeight: DEFAULT_SWITCH_LINE_HEIGHT_SIZE
							})
						: null}
				</GridItem>
			) : null}
		</Grid>
	);
});

// Switch.displayName = 'Switch';

export default Switch;
