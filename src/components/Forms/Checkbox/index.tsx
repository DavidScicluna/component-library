import { FC, createContext, useRef, useCallback } from 'react';

import { useColorMode, FormControl, Checkbox as CUICheckbox, VStack, HStack, Center } from '@chakra-ui/react';

import { debounce, isEmpty, isNil, merge } from 'lodash';

import { useTheme } from '../../../common/hooks';
import Icon from '../../Icon';
import Collapse from '../../Transitions/Collapse';
import FormHelperText from '../FormHelperText';
import FormLabel from '../FormLabel';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isChecked as defaultIsChecked,
	isIndeterminate as defaultIsIndeterminate,
	isDisabled as defaultIsDisabled,
	isError as defaultIsError,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning,
	isReadOnly as defaultIsReadOnly,
	isRequired as defaultIsRequired,
	isFullWidth as defaultIsFullWidth,
	size as defaultSize,
	variant as defaultVariant
} from './common/data/defaultPropValues';
import useStyles from './common/styles';
import { getSizeConfig } from './common/utils';
import { CheckboxContext as CheckboxContextType, CheckboxProps, CheckboxRef } from './types';

export const CheckboxContext = createContext<CheckboxContextType>({
	color: defaultColor,
	colorMode: defaultColorMode,
	size: defaultSize
});

const Checkbox: FC<CheckboxProps> = (props) => {
	const theme = useTheme();
	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	const checkboxRef = useRef<CheckboxRef>(null);

	const {
		color,
		colorMode = colorModeHook,
		id,
		name,
		label,
		helper,
		defaultChecked = defaultIsChecked,
		isChecked: isCheckedProp = defaultIsChecked,
		isIndeterminate = defaultIsIndeterminate,
		isDisabled = defaultIsDisabled,
		isError = defaultIsError,
		isWarning = defaultIsWarning,
		isSuccess = defaultIsSuccess,
		isReadOnly = defaultIsReadOnly,
		isRequired = defaultIsRequired,
		isFullWidth = defaultIsFullWidth,
		icon = <Icon icon={isIndeterminate ? 'remove' : 'check'} />,
		renderLeftPanel,
		renderRightPanel,
		onChange,
		size = defaultSize,
		variant = defaultVariant,
		sx,
		...rest
	} = props;

	const isChecked: boolean = defaultChecked || isIndeterminate || isCheckedProp;

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

	const handleContainerClick = useCallback((): void => {
		if (checkboxRef && checkboxRef.current) {
			checkboxRef.current.focus();
		}
	}, [checkboxRef]);

	const handleCheckboxClick = useCallback((): void => {
		if (onChange) {
			onChange({ isChecked: !isChecked });
		}
	}, [onChange, isChecked]);

	return (
		<CheckboxContext.Provider value={{ color, colorMode, size }}>
			<VStack
				as={FormControl}
				tabIndex={0}
				alignItems='flex-start'
				onClick={handleContainerClick}
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
						<CUICheckbox
							{...rest}
							ref={checkboxRef}
							icon={icon}
							isChecked={isChecked}
							isIndeterminate={isIndeterminate}
							isDisabled={isDisabled}
							isRequired={isRequired}
							isInvalid={isError}
							isReadOnly={isReadOnly}
							id={id || name}
							name={name}
							onChange={onChange ? (event) => onChange({ isChecked: event.target.checked }) : undefined}
							variant='unstyled'
							sx={sx?.checkbox || {}}
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
		</CheckboxContext.Provider>
	);
};

export default Checkbox;
