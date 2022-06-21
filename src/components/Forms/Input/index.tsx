import { ReactElement, useRef, useCallback } from 'react';

import {
	useColorMode,
	useBoolean,
	FormControl,
	InputGroup,
	Input as CUIInput,
	VStack,
	HStack,
	Center
} from '@chakra-ui/react';

import { isEmpty, isNil } from 'lodash';
import merge from 'lodash/merge';

import {
	autoComplete as defaultAutoComplete,
	colorMode as defaultColorMode,
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
import { InputProps, InputRef, InputPanelRenderProps, Event } from './types';

import { useTheme } from '../../../common/hooks';
import Collapse from '../../Transitions/Collapse';
import FormHelperText from '../FormHelperText';
import FormLabel from '../FormLabel';

const Input = (props: InputProps): ReactElement => {
	const theme = useTheme();
	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	const inputRef = useRef<InputRef>(null);

	const {
		autoComplete = defaultAutoComplete,
		color,
		colorMode = colorModeHook,
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
		sx,
		...rest
	} = props;

	const [isFocusedHook, setIsFocusedHook] = useBoolean();

	const isFocused: boolean = isFocusedProp || isFocusedHook;

	const style = useStyles({ theme, color, colorMode, isError, isWarning, isSuccess, isFocused, isFullWidth, size });

	const handleReturnSpacing = useCallback((): number => getSizeConfig({ size }).spacing, [size, getSizeConfig]);

	const handleClick = useCallback((): void => {
		if (inputRef && inputRef.current) {
			inputRef.current.focus();
		}
	}, [inputRef]);

	const handleFocus = useCallback(
		(event: Event): void => {
			setIsFocusedHook.on();

			if (onFocus) {
				onFocus(event);
			}
		},
		[onFocus]
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

	const renderPanelProps: InputPanelRenderProps = { color, colorMode };

	return (
		<VStack
			as={FormControl}
			tabIndex={0}
			alignItems='flex-start'
			onClick={handleClick}
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
				{renderLeftPanel && <Center>{renderLeftPanel({ ...renderPanelProps })}</Center>}

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

				{renderRightPanel && <Center>{renderRightPanel({ ...renderPanelProps })}</Center>}
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
