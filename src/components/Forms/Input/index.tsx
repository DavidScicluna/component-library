import { forwardRef, ReactElement, useCallback, useEffect, useMemo, useRef } from 'react';

import { Center, FormControl, HStack, Input as CUIInput, InputGroup, useBoolean, VStack } from '@chakra-ui/react';

import { debounce, isEmpty, isNil } from 'lodash-es';
import merge from 'lodash-es/merge';

import { useTheme } from '../../../common/hooks';
import { useProviderContext } from '../../Provider/common/hooks';
import Collapse from '../../Transitions/Collapse';
import FormHelperText from '../FormHelperText';
import FormLabel from '../FormLabel';

import {
	autoComplete as defaultAutoComplete,
	isDisabled as defaultIsDisabled,
	isError as defaultIsError,
	isFocused as defaultIsFocused,
	isFullWidth as defaultIsFullWidth,
	isReadOnly as defaultIsReadOnly,
	isRequired as defaultIsRequired,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning,
	size as defaultSize,
	variant as defaultVariant
} from './common/default/props';
import useStyles from './common/styles';
import { InputFocusEvent, InputProps, InputRef } from './common/types';
import { getSizeConfig } from './common/utils';

const Input = forwardRef<InputRef, InputProps>(function Input(props, ref): ReactElement {
	const theme = useTheme();

	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const inputRef = useRef<InputRef>(null);

	const {
		autoComplete = defaultAutoComplete,
		color = defaultColor,
		colorMode = defaultColorMode,
		id,
		name,
		label,
		helper,
		isDisabled = defaultIsDisabled,
		isError = defaultIsError,
		isWarning = defaultIsWarning,
		isSuccess = defaultIsSuccess,
		isFocused: isFocusedProp = defaultIsFocused,
		isReadOnly = defaultIsReadOnly,
		isRequired = defaultIsRequired,
		isFullWidth = defaultIsFullWidth,
		renderLeftPanel,
		renderRightPanel,
		onFocus,
		onBlur,
		size = defaultSize,
		variant = defaultVariant,
		sx,
		...rest
	} = props;

	const [isFocusedHook, setIsFocusedHook] = useBoolean();

	const isFocused = useMemo((): boolean => isFocusedProp || isFocusedHook, [isFocusedProp, isFocusedHook]);

	const style = useStyles({
		theme,
		color,
		colorMode,
		isError,
		isWarning,
		isSuccess,
		isFocused,
		isFullWidth,
		size,
		variant
	});

	const handleReturnSpacing = useCallback(
		debounce((): number => getSizeConfig({ size }).spacing, 500),
		[size, getSizeConfig]
	);

	const handleReturnPanelSize = useCallback(
		debounce((): number => getSizeConfig({ size }).panel, 500),
		[size, getSizeConfig]
	);

	const handleContainerClick = (): void => {
		if (inputRef && inputRef.current) {
			inputRef.current.focus();
		}
	};

	const handleFocus = (event: InputFocusEvent): void => {
		setIsFocusedHook.on();

		if (onFocus) {
			onFocus(event);
		}
	};

	const handleBlur = (event: InputFocusEvent): void => {
		setIsFocusedHook.off();

		if (onBlur) {
			onBlur(event);
		}
	};

	useEffect(() => (isFocused ? handleContainerClick() : undefined), [isFocused]);

	return (
		<VStack
			as={FormControl}
			ref={ref}
			tabIndex={0}
			alignItems='flex-start'
			onClick={handleContainerClick}
			spacing={handleReturnSpacing()}
			sx={{ width: isFullWidth ? '100%' : 'auto' }}
		>
			{label && (
				<FormLabel
					colorMode={colorMode}
					id={id || name}
					isDisabled={isDisabled}
					isReadOnly={isReadOnly}
					isRequired={isRequired}
					size={size}
					sx={sx?.formLabel}
				>
					{label}
				</FormLabel>
			)}

			<HStack
				as={InputGroup}
				aria-disabled={isDisabled}
				aria-invalid={isError}
				aria-readonly={isReadOnly}
				spacing={handleReturnSpacing()}
				sx={merge(style.group, sx?.group || {})}
				_disabled={style.disabled}
				_readOnly={style.readOnly}
			>
				{renderLeftPanel && (
					<Center>
						{renderLeftPanel({
							width: `${handleReturnPanelSize() || 20}px`,
							height: `${handleReturnPanelSize() || 20}px`,
							fontSize: `${handleReturnPanelSize() || 20}px`,
							color,
							colorMode
						})}
					</Center>
				)}

				<Center flex={1}>
					<CUIInput
						{...rest}
						ref={inputRef}
						autoComplete={autoComplete || 'off'}
						isDisabled={isDisabled}
						isRequired={isRequired}
						isInvalid={isError}
						isReadOnly={isReadOnly}
						id={id || name}
						name={name}
						onFocus={handleFocus}
						onBlur={handleBlur}
						variant='unstyled'
						sx={merge(style.input, sx?.input || {})}
					/>
				</Center>

				{renderRightPanel && (
					<Center>
						{renderRightPanel({
							width: `${handleReturnPanelSize() || 20}px`,
							height: `${handleReturnPanelSize() || 20}px`,
							fontSize: `${handleReturnPanelSize() || 20}px`,
							color,
							colorMode
						})}
					</Center>
				)}
			</HStack>

			<Collapse in={!(isNil(helper) || isEmpty(helper))} style={{ width: '100%' }}>
				<FormHelperText
					colorMode={colorMode}
					isDisabled={isDisabled}
					isError={isError}
					isWarning={isWarning}
					isSuccess={isSuccess}
					isReadOnly={isReadOnly}
					size={size}
					sx={sx?.formHelperText || {}}
				>
					{helper}
				</FormHelperText>
			</Collapse>
		</VStack>
	);
});

export default Input;
