import { ReactElement, useRef, useCallback } from 'react';

import {
	ColorMode,
	useColorMode,
	useBoolean,
	FormControl,
	InputGroup,
	Input as CUIInput,
	VStack,
	HStack,
	Center,
	Collapse
} from '@chakra-ui/react';

import { isEmpty, isNil } from 'lodash';
import merge from 'lodash/merge';
import { useElementSize } from 'usehooks-ts';

import {
	autoComplete as defaultAutoComplete,
	isDisabled as defaultIsDisabled,
	isError as defaultIsError,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning,
	isFocused as defaultIsFocused,
	isReadOnly as defaultIsReadOnly,
	isRequired as defaultIsRequired,
	isFullWidth as defaultIsFullWidth,
	size as defaultSize
} from './common/data/defaultPropValues';
import useStyles from './common/styles';
import { getSizeConfig } from './common/utils';
import { InputProps, InputRef, RenderProps, Event } from './types';

import { useTheme } from '../../../common/hooks';
import FormHelperText from '../FormHelperText';
import FormLabel from '../FormLabel';

const Input = (props: InputProps): ReactElement => {
	const theme = useTheme();
	const { colorMode: colorModeHook } = useColorMode();

	const [containerRef, { width: containerWidth, height: containerHeight }] = useElementSize();
	const inputRef = useRef<InputRef>(null);

	const {
		autoComplete = defaultAutoComplete,
		color,
		colorMode: colorModeProp,
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
		onBlur,
		size = defaultSize,
		sx,
		...rest
	} = props;

	const [isFocusedHook, setIsFocusedHook] = useBoolean();

	const colorMode: ColorMode = colorModeProp || colorModeHook;
	const isFocused: boolean = isFocusedProp || isFocusedHook;

	const renderProps: RenderProps = {
		fontSize: size === 'sm' ? 'xs' : size === 'md' ? 'sm' : 'md',
		width: containerWidth,
		height: containerHeight
	};

	const style = useStyles({ theme, color, colorMode, isWarning, isSuccess, isFocused, isFullWidth, size });

	const handleReturnSpacing = useCallback((): number => getSizeConfig({ size }).spacing, [size, getSizeConfig]);

	const handleClick = useCallback((): void => {
		if (inputRef && inputRef.current) {
			inputRef.current.focus();
		}
	}, [inputRef]);

	const handleFocus = useCallback(
		(event: Event): void => {
			setIsFocusedHook.on();

			if (onBlur) {
				onBlur(event);
			}
		},
		[onBlur]
	);

	const handleBlur = useCallback(
		(event: Event): void => {
			setIsFocusedHook.off();

			if (onBlur) {
				onBlur(event);
			}
		},
		[onBlur]
	);

	return (
		<VStack
			as={FormControl}
			alignItems='flex-start'
			isDisabled={isDisabled}
			isRequired={isRequired}
			isInvalid={isError}
			isReadOnly={isReadOnly}
			onClick={handleClick}
			variant='unstyled'
			sx={{ width: isFullWidth ? '100%' : 'auto' }}
		>
			{label && (
				<FormLabel
					colorMode={colorMode}
					id={id || name}
					isDisabled={isDisabled}
					isReadOnly={isReadOnly}
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
				_invalid={style.invalid}
				_readOnly={style.readonly}
			>
				{renderLeftPanel && <Center>{renderLeftPanel({ ...renderProps })}</Center>}
				<Center ref={containerRef} width='100%'>
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
				{renderRightPanel && <Center>{renderRightPanel({ ...renderProps })}</Center>}
			</HStack>

			<Collapse in={!(isNil(helper) || isEmpty(helper))} unmountOnExit style={{ width: '100%' }}>
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
};

export default Input;
