import { createContext, forwardRef, ReactElement, useMemo, useRef } from 'react';

import { Center, Checkbox as CUICheckbox, Grid, GridItem } from '@chakra-ui/react';

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

	const { color: appColor, colorMode: appColorMode } = useProviderContext();

	const {
		color: defaultColor = appColor,
		colorMode: defaultColorMode = appColorMode,
		isDisabled: defaultIsDisabled,
		isError: defaultIsError,
		isRequired: defaultIsRequired,
		isSuccess: defaultIsSuccess,
		isWarning: defaultIsWarning,
		size: defaultSize
	} = useFormControlContext();

	const checkboxRef = useRef<CheckboxRef>(null);

	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		id,
		name,
		renderLeft,
		renderRight,
		defaultChecked = defaultIsChecked,
		isChecked: isCheckedProp = defaultIsChecked,
		isCompact = defaultIsCompact,
		isDisabled = defaultIsDisabled,
		isError = defaultIsError,
		isIndeterminate = defaultIsIndeterminate,
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
		return defaultChecked || isIndeterminate || isCheckedProp;
	}, [defaultChecked, isIndeterminate, isCheckedProp]);

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

	const handleCheckboxClick = (): void => {
		if (onChange) {
			onChange(!isChecked);
		}
	};

	return (
		<CheckboxContext.Provider value={{ color, colorMode, size }}>
			<Center
				ref={ref}
				aria-checked={isChecked}
				aria-disabled={isDisabled}
				aria-invalid={isError}
				onClick={handleCheckboxClick}
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
						justifyContent='stretch'
						gap={config.spacing}
					>
						{renderLeft ? (
							<GridItem>
								{renderLeft({ color, colorMode, width: childrenWidth, height: childrenHeight })}
							</GridItem>
						) : null}

						<GridItem>
							<Center ref={childrenRef} as='span' width='100%' height='100%'>
								<CUICheckbox
									{...rest}
									ref={checkboxRef}
									icon={
										<Icon
											width={fontSize}
											height={fontSize}
											fontSize={fontSize}
											color={isError ? 'red' : isSuccess ? 'green' : isWarning ? 'yellow' : color}
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
									}
									isChecked={isChecked}
									isIndeterminate={isIndeterminate}
									isDisabled={isDisabled}
									isRequired={isRequired}
									isInvalid={isError}
									id={id || name}
									name={name}
									onChange={onChange ? (event) => onChange(event.target.checked) : undefined}
									variant='unstyled'
								/>
							</Center>
						</GridItem>

						{renderRight ? (
							<GridItem>
								{renderRight({ color, colorMode, width: childrenWidth, height: childrenHeight })}
							</GridItem>
						) : null}
					</Grid>
				</PushableOverlay>
			</Center>
		</CheckboxContext.Provider>
	);
});

export default Checkbox;
