import { FC, createContext, useRef, useCallback } from 'react';

import {
	ColorMode,
	useColorMode,
	FormControl,
	Checkbox as CUICheckbox,
	VStack,
	HStack,
	Center,
	Collapse
} from '@chakra-ui/react';

import { isEmpty, isNil, merge } from 'lodash';

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
import { CheckboxContext as CheckboxContextType, CheckboxProps, CheckboxRef, CheckboxPanelRenderProps } from './types';

import { useTheme } from '../../../common/hooks';
import Icon from '../../Icon';
import FormHelperText from '../FormHelperText';
import FormLabel from '../FormLabel';

export const CheckboxContext = createContext<CheckboxContextType>({ color: defaultColor, colorMode: defaultColorMode });

const Checkbox: FC<CheckboxProps> = (props) => {
	const theme = useTheme();
	const { colorMode: colorModeHook } = useColorMode();

	const checkboxRef = useRef<CheckboxRef>(null);

	const {
		color,
		colorMode: colorModeProp,
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
		size = defaultSize,
		variant = defaultVariant,
		sx,
		...rest
	} = props;

	const colorMode: ColorMode = colorModeProp || colorModeHook;

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

	const handleReturnSpacing = useCallback((): number => getSizeConfig({ size }).spacing, [size, getSizeConfig]);

	const handleClick = useCallback((): void => {
		if (checkboxRef && checkboxRef.current) {
			checkboxRef.current.focus();
		}
	}, [checkboxRef]);

	const renderPanelProps: CheckboxPanelRenderProps = {
		// width: handleReturnPanelSize(),
		// height: handleReturnPanelSize(),
		// fontSize: size,
		color,
		colorMode
	};

	return (
		<CheckboxContext.Provider value={{ color, colorMode }}>
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
					spacing={handleReturnSpacing()}
					sx={merge(style.group, sx?.group || {})}
					_checked={style.checked}
					_disabled={style.disabled}
					_readOnly={style.readOnly}
				>
					{renderLeftPanel && <Center flex={1}>{renderLeftPanel({ ...renderPanelProps })}</Center>}

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
							variant='unstyled'
							sx={sx?.checkbox || {}}
						/>
					</Center>

					{renderRightPanel && <Center flex={1}>{renderRightPanel({ ...renderPanelProps })}</Center>}
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
		</CheckboxContext.Provider>
	);
};

export default Checkbox;
