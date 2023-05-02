import { createContext, FC, useCallback, useRef } from 'react';

import { Center, FormControl, HStack, Radio as CUIRadio, VStack } from '@chakra-ui/react';

import { debounce, isEmpty, isNil, merge } from 'lodash-es';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../common/default/props';
import { useProviderContext, useTheme } from '../../../common/hooks';
import Collapse from '../../Transitions/Collapse';
import FormHelperText from '../FormHelperText';
import FormLabel from '../FormLabel';

import {
	isChecked as defaultIsChecked,
	isDisabled as defaultIsDisabled,
	isError as defaultIsError,
	isFullWidth as defaultIsFullWidth,
	isReadOnly as defaultIsReadOnly,
	isRequired as defaultIsRequired,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning,
	size as defaultSize,
	variant as defaultVariant
} from './common/default/props';
import useStyles from './common/styles';
import { RadioContext as RadioContextType, RadioProps, RadioRef } from './common/types';
import { getSizeConfig } from './common/utils';

export const RadioContext = createContext<RadioContextType>({
	color: defaultColor,
	colorMode: defaultColorMode,
	size: defaultSize
});

const Radio: FC<RadioProps> = (props) => {
	const theme = useTheme();

	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const radioRef = useRef<RadioRef>(null);

	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		id,
		name,
		label,
		helper,
		defaultChecked = defaultIsChecked,
		isChecked: isCheckedProp = defaultIsChecked,
		isDisabled = defaultIsDisabled,
		isError = defaultIsError,
		isWarning = defaultIsWarning,
		isSuccess = defaultIsSuccess,
		isReadOnly = defaultIsReadOnly,
		isRequired = defaultIsRequired,
		isFullWidth = defaultIsFullWidth,
		renderLeftPanel,
		renderRightPanel,
		onChange,
		size = defaultSize,
		variant = defaultVariant,
		sx,
		...rest
	} = props;

	const isChecked: boolean = defaultChecked || isCheckedProp;

	const style = useStyles({
		theme,
		color,
		colorMode,
		isChecked,
		isError,
		isWarning,
		isSuccess,
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
		if (radioRef && radioRef.current) {
			radioRef.current.focus();
		}
	};

	const handleCheckboxClick = (): void => {
		if (onChange) {
			onChange({ isChecked: !isChecked });
		}
	};

	return (
		<RadioContext.Provider value={{ color, colorMode, size }}>
			<VStack
				as={FormControl}
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
						isRequired={isRequired}
						isReadOnly={isReadOnly}
						size={size}
						sx={sx?.formLabel}
					>
						{label}
					</FormLabel>
				)}

				<HStack
					aria-checked={isChecked}
					aria-disabled={isDisabled}
					aria-invalid={isError}
					aria-readonly={isReadOnly}
					onClick={handleCheckboxClick}
					spacing={handleReturnSpacing()}
					sx={merge(style.group, sx?.group || {})}
					_checked={style.checked}
					_disabled={style.disabled}
					_readOnly={style.readOnly}
				>
					{renderLeftPanel && (
						<Center flex={1}>
							{renderLeftPanel({
								width: `${handleReturnPanelSize() || 20}px`,
								height: `${handleReturnPanelSize() || 20}px`,
								fontSize: `${handleReturnPanelSize() || 20}px`,
								color,
								colorMode
							})}
						</Center>
					)}

					<Center>
						<CUIRadio
							{...rest}
							ref={radioRef}
							isChecked={isChecked}
							isDisabled={isDisabled}
							isRequired={isRequired}
							isInvalid={isError}
							isReadOnly={isReadOnly}
							id={id || name}
							name={name}
							onChange={onChange ? (event) => onChange({ isChecked: event.target.checked }) : undefined}
							variant='unstyled'
							sx={sx?.radio || {}}
						/>
					</Center>

					{renderRightPanel && (
						<Center flex={1}>
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
		</RadioContext.Provider>
	);
};

export default Radio;
