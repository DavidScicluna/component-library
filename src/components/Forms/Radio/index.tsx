import { createContext, forwardRef, ReactElement, useMemo } from 'react';

import { Center, Grid, GridItem, useRadio } from '@chakra-ui/react';

import { compact, merge } from 'lodash-es';
import { useElementSize } from 'usehooks-ts';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../common/default/props';
import { useTheme } from '../../../common/hooks';
import { getFontSizeHeight } from '../../../common/utils';
import { Radius } from '../../../theme/types';
import Icon from '../../DataDisplay/Icon';
import PushableOverlay from '../../Overlay/PushableOverlay';
import { useProviderContext } from '../../Provider/common/hooks';
import { size as defaultSize } from '../FormControl/common/default/props';
import { useFormControlContext } from '../FormControl/common/hooks';

import {
	isChecked as defaultIsChecked,
	isCompact as defaultIsCompact,
	isRound as defaultIsRound,
	variant as defaultVariant
} from './common/default/props';
import useStyles from './common/styles';
import { RadioContext as RadioContextType, RadioProps, RadioRef } from './common/types';
import { getSizeConfig, GetSizeConfigReturn, getVariantRadius } from './common/utils';

export const RadioContext = createContext<RadioContextType>({
	color: defaultColor,
	colorMode: defaultColorMode,
	size: defaultSize
});

const Radio = forwardRef<RadioRef, RadioProps>(function Radio(props, ref): ReactElement {
	const theme = useTheme();

	const { color: appColor, colorMode: appColorMode } = useProviderContext();

	const {
		color: defaultColor = appColor,
		colorMode: defaultColorMode = appColorMode,
		isDisabled: defaultIsDisabled,
		isError: defaultIsError,
		isReadOnly: defaultIsReadOnly,
		isRequired: defaultIsRequired,
		isSuccess: defaultIsSuccess,
		isWarning: defaultIsWarning,
		size: defaultSize
	} = useFormControlContext();

	const { getInputProps, getRadioProps, htmlProps, getLabelProps } = useRadio();

	const [radioRef, { width: radioWidth, height: radioHeight }] = useElementSize();

	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		renderLeft,
		renderRight,
		defaultChecked = defaultIsChecked,
		isChecked: isCheckedProp = defaultIsChecked,
		isCompact = defaultIsCompact,
		isDisabled = defaultIsDisabled,
		isError = defaultIsError,
		isReadOnly = defaultIsReadOnly,
		isRequired = defaultIsRequired,
		isRound = defaultIsRound,
		isSuccess = defaultIsSuccess,
		isWarning = defaultIsWarning,
		onChange,
		size = defaultSize,
		variant = defaultVariant,
		sx,
		...rest
	} = props;

	const isChecked = useMemo((): boolean => {
		return defaultChecked || isCheckedProp;
	}, [defaultChecked, isCheckedProp]);

	const radius = useMemo((): Radius => {
		return getVariantRadius({ isCompact, isRound, variant });
	}, [isCompact, isRound, variant]);
	const config = useMemo((): GetSizeConfigReturn => {
		return getSizeConfig({ isCompact, size });
	}, [isCompact, size]);

	const fontSize = useMemo((): string => {
		return `${getFontSizeHeight({ theme, fontSize: size, lineHeight: 'shorter' })}px`;
	}, [theme, size]);

	const style = useStyles({ theme });

	const handleRadioClick = (): void => {
		if (!isReadOnly && onChange) {
			onChange(!isChecked);
		}
	};

	return (
		<RadioContext.Provider value={{ color, colorMode, size }}>
			<Center
				{...htmlProps}
				{...rest}
				ref={ref}
				aria-readonly={isReadOnly}
				aria-checked={isChecked}
				aria-disabled={isDisabled}
				aria-invalid={isError}
				onClick={handleRadioClick}
				sx={merge(style.group, sx)}
				_disabled={style.disabled}
			>
				<PushableOverlay
					width='100%'
					height='100%'
					borderRadius={radius}
					color={isError ? 'red' : isSuccess ? 'green' : isWarning ? 'yellow' : color}
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
								{renderLeft({ color, colorMode, width: radioWidth, height: radioHeight })}
							</GridItem>
						) : null}

						<GridItem>
							<Center
								{...getRadioProps()}
								ref={radioRef}
								width='100%'
								height='100%'
								aria-checked={isChecked}
								aria-disabled={isDisabled}
								aria-invalid={isError}
								aria-required={isRequired}
							>
								<input {...getInputProps({})} hidden />
								<Icon
									{...getLabelProps()}
									width={fontSize}
									height={fontSize}
									fontSize={fontSize}
									color={isError ? 'red' : isSuccess ? 'green' : isWarning ? 'yellow' : color}
									colorMode={colorMode}
									icon={isChecked ? 'radio_button_checked' : 'radio_button_unchecked'}
									variant='unstyled'
								/>
							</Center>
						</GridItem>

						{renderRight ? (
							<GridItem>
								{renderRight({ color, colorMode, width: radioWidth, height: radioHeight })}
							</GridItem>
						) : null}
					</Grid>
				</PushableOverlay>
			</Center>
		</RadioContext.Provider>
	);
});

export default Radio;
