import { createContext, forwardRef, ReactElement, useMemo } from 'react';

import { Center, Grid, GridItem, useCheckbox } from '@chakra-ui/react';

import { compact, merge } from 'lodash-es';
import { useElementSize } from 'usehooks-ts';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../common/default/props';
import { useTheme } from '../../../common/hooks';
import { getFontSizeHeight } from '../../../common/utils';
import { Radius } from '../../../theme/types';
import Icon from '../../DataDisplay/Icon';
import PushableOverlay from '../../Overlay/PushableOverlay';
import { useProviderContext } from '../../Provider/common/hooks';
import {
	isDisabled as defaultIsDisabled,
	isError as defaultIsError,
	isReadOnly as defaultIsReadOnly,
	isRequired as defaultIsRequired,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning,
	size as defaultSize
} from '../FormControl/common/default/props';
import { useFormControlContext } from '../FormControl/common/hooks';

import {
	isChecked as defaultIsChecked,
	isCompact as defaultIsCompact,
	isIndeterminate as defaultIsIndeterminate,
	isRound as defaultIsRound,
	variant as defaultVariant
} from './common/default/props';
import useStyles from './common/styles';
import { CheckboxContext as CheckboxContextType, CheckboxProps, CheckboxRef } from './common/types';
import { getSizeConfig, GetSizeConfigReturn, getVariantRadius } from './common/utils';

export const CheckboxContext = createContext<CheckboxContextType>({
	color: defaultColor,
	colorMode: defaultColorMode,
	size: defaultSize
});

const Checkbox = forwardRef<CheckboxRef, CheckboxProps>(function Checkbox(props, ref): ReactElement {
	const theme = useTheme();

	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const {
		color: formControlColor,
		colorMode: formControlColorMode,
		isDisabled: formControlIsDisabled,
		isError: formControlIsError,
		isReadOnly: formControlIsReadOnly,
		isRequired: formControlIsRequired,
		isSuccess: formControlIsSuccess,
		isWarning: formControlIsWarning,
		size: formControlSize
	} = useFormControlContext();

	const [checkboxRef, { width: checkboxWidth, height: checkboxHeight }] = useElementSize();

	const {
		color = formControlColor || defaultColor,
		colorMode = formControlColorMode || defaultColorMode,
		renderLeft,
		renderRight,
		defaultChecked = defaultIsChecked,
		isChecked: isCheckedProp = defaultIsChecked,
		isCompact = defaultIsCompact,
		isDisabled: isDisabledProp = formControlIsDisabled || defaultIsDisabled,
		isError = formControlIsError || defaultIsError,
		isIndeterminate: isIndeterminateProp = defaultIsIndeterminate,
		isReadOnly: isReadOnlyProp = formControlIsReadOnly || defaultIsReadOnly,
		isRequired: isRequiredProp = formControlIsRequired || defaultIsRequired,
		isRound = defaultIsRound,
		isSuccess = formControlIsSuccess || defaultIsSuccess,
		isWarning = formControlIsWarning || defaultIsWarning,
		onChange,
		size = formControlSize || defaultSize,
		variant = defaultVariant,
		sx,
		...rest
	} = props;

	const { state, getRootProps, getCheckboxProps, getInputProps, getLabelProps, htmlProps } = useCheckbox({
		isChecked: defaultChecked || isIndeterminateProp || isCheckedProp,
		isDisabled: isDisabledProp,
		isFocusable: true,
		isIndeterminate: isIndeterminateProp,
		isInvalid: isError,
		isReadOnly: isReadOnlyProp,
		isRequired: isRequiredProp
	});

	const { isChecked, isDisabled, isIndeterminate, isInvalid, isReadOnly, isRequired } = state;

	const radius = useMemo(
		(): Radius => getVariantRadius({ isCompact, isRound, variant }),
		[isCompact, isRound, variant]
	);
	const config = useMemo((): GetSizeConfigReturn => getSizeConfig({ isCompact, size }), [isCompact, size]);

	const fontSize = useMemo(
		(): string => `${getFontSizeHeight({ theme, fontSize: size, lineHeight: 'shorter' })}px`,
		[theme, size]
	);

	const style = useStyles({ theme });

	const handleCheckboxChange = (): void => {
		if (!isReadOnly && onChange) {
			onChange(!isChecked);
		}
	};

	return (
		<CheckboxContext.Provider value={{ color, colorMode, size }}>
			<Center
				{...getRootProps()}
				{...htmlProps}
				{...rest}
				ref={ref}
				aria-readonly={isReadOnly}
				aria-required={isRequired}
				aria-checked={isChecked}
				aria-disabled={isDisabled}
				aria-invalid={isInvalid}
				onChange={handleCheckboxChange}
				sx={merge(style.group, sx)}
				_disabled={style.disabled}
			>
				<PushableOverlay
					width='100%'
					height='100%'
					borderRadius={radius}
					color={isInvalid ? 'red' : isSuccess ? 'green' : isWarning ? 'yellow' : color}
					colorMode={colorMode}
					isDisabled={isDisabled}
					variant={variant}
					p={config.padding}
				>
					<Grid
						templateColumns={compact([renderLeft ? 'auto' : null, '1fr', renderRight ? 'auto' : null]).join(
							' '
						)}
						templateRows='1fr'
						alignItems='stretch'
						alignContent='stretch'
						justifyItems='stretch'
						justifyContent='stretch'
						gap={config.spacing}
					>
						{renderLeft ? (
							<GridItem>
								{renderLeft({
									color,
									colorMode,
									width: checkboxWidth,
									height: checkboxHeight
								})}
							</GridItem>
						) : null}

						<GridItem>
							<Center
								{...getCheckboxProps()}
								ref={checkboxRef}
								width='100%'
								height='100%'
								aria-checked={isIndeterminate || isChecked}
								aria-disabled={isDisabled}
								aria-invalid={isInvalid}
								aria-required={isRequired}
								onChange={handleCheckboxChange}
							>
								<input {...getInputProps({})} hidden />
								<Icon
									{...getLabelProps()}
									width={fontSize}
									height={fontSize}
									fontSize={fontSize}
									color={isInvalid ? 'red' : isSuccess ? 'green' : isWarning ? 'yellow' : color}
									colorMode={colorMode}
									icon={
										isIndeterminate
											? 'indeterminate_check_box'
											: isChecked
											? 'check_box'
											: 'check_box_outline_blank'
									}
									variant='unstyled'
								/>
							</Center>
						</GridItem>

						{renderRight ? (
							<GridItem>
								{renderRight({
									color,
									colorMode,
									width: checkboxWidth,
									height: checkboxHeight
								})}
							</GridItem>
						) : null}
					</Grid>
				</PushableOverlay>
			</Center>
		</CheckboxContext.Provider>
	);
});

export default Checkbox;
