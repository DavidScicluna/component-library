import { forwardRef, ReactElement, useEffect, useMemo, useRef } from 'react';

import { Box, Grid, GridItem, Input as CUIInput, InputGroup, useBoolean } from '@chakra-ui/react';

import { compact, merge } from 'lodash-es';
import { useElementSize } from 'usehooks-ts';

import { useTheme } from '../../../common/hooks';
import { useFormControlContext } from '../FormControl/common/hooks';

import useStyles from './common/styles';
import { InputFocusEvent, InputProps, InputRef } from './common/types';
import { getSizeConfig, GetSizeConfigReturn } from './common/utils';

const Input = forwardRef<InputRef, InputProps>(function Input(props, ref): ReactElement {
	const theme = useTheme();

	const {
		color: defaultColor,
		colorMode: defaultColorMode,
		isDisabled: defaultIsDisabled,
		isError: defaultIsError,
		isFocused: defaultIsFocused,
		isReadOnly: defaultIsReadOnly,
		isRequired: defaultIsRequired,
		isSuccess: defaultIsSuccess,
		isWarning: defaultIsWarning,
		size: defaultSize
	} = useFormControlContext();

	const inputRef = useRef<InputRef>(null);

	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const {
		autoComplete = 'off',
		color = defaultColor,
		colorMode = defaultColorMode,
		id,
		name,
		renderLeft,
		renderRight,
		isDisabled = defaultIsDisabled,
		isError = defaultIsError,
		isFocused: isFocusedProp = defaultIsFocused,
		isReadOnly = defaultIsReadOnly,
		isRequired = defaultIsRequired,
		isSuccess = defaultIsSuccess,
		isWarning = defaultIsWarning,
		onFocus,
		onBlur,
		size = defaultSize,
		sx,
		...rest
	} = props;

	const [isFocusedHook, setIsFocusedHook] = useBoolean();

	const isFocused = useMemo((): boolean => isFocusedProp || isFocusedHook, [isFocusedProp, isFocusedHook]);

	const config = useMemo((): GetSizeConfigReturn => {
		return getSizeConfig({ size });
	}, [size]);

	const style = useStyles({ theme, color, colorMode, isError, isSuccess, isWarning, isFocused, size });

	const handleContainerClick = (): void => {
		if (isFocused && inputRef && inputRef.current) {
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

	useEffect(() => handleContainerClick(), [isFocused]);

	return (
		<Grid
			ref={ref}
			as={InputGroup}
			aria-disabled={isDisabled}
			aria-invalid={isError}
			aria-readonly={isReadOnly}
			templateColumns={compact([renderLeft ? 'auto' : null, '1fr', renderRight ? 'auto' : null]).join(' ')}
			templateRows='1fr'
			alignItems='stretch'
			alignContent='stretch'
			justifyContent='stretch'
			gap={config.spacing}
			px={config.padding.x}
			py={config.padding.y}
			sx={merge(style.group, sx)}
			_disabled={style.disabled}
			_readOnly={style.readOnly}
		>
			{renderLeft ? (
				<GridItem>{renderLeft({ color, colorMode, width: childrenWidth, height: childrenHeight })}</GridItem>
			) : null}

			<GridItem>
				<Box ref={childrenRef} as='span' width='100%' height='100%'>
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
						sx={style.input}
					/>
				</Box>
			</GridItem>

			{renderRight ? (
				<GridItem>{renderRight({ color, colorMode, width: childrenWidth, height: childrenHeight })}</GridItem>
			) : null}
		</Grid>
	);
});

export default Input;
