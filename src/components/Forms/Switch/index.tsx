import { forwardRef, ReactElement, useMemo } from 'react';

import { Box, Center, Grid, GridItem, useCheckbox } from '@chakra-ui/react';

import { merge } from 'lodash-es';
import { useElementSize } from 'usehooks-ts';

import { useTheme } from '../../../common/hooks';
import PushableOverlay from '../../Overlay/PushableOverlay';
import { useProviderContext } from '../../Provider/common/hooks';
import { useFormControlContext } from '../FormControl/common/hooks';

import { isChecked as defaultIsChecked } from './common/default/props';
import useStyles from './common/styles';
import { SwitchProps, SwitchRef } from './common/types';
import { getSizeConfig, GetSizeConfigReturn } from './common/utils';
import SwitchThumb from './components/SwitchThumb';

const Switch = forwardRef<SwitchRef, SwitchProps>(function Switch(props, ref): ReactElement {
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

	const [trackRef, { width: trackWidth, height: trackHeight }] = useElementSize();

	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		renderOnLabel,
		renderOffLabel,
		renderThumbIcon,
		defaultChecked = defaultIsChecked,
		isChecked: isCheckedProp = defaultIsChecked,
		isDisabled: isDisabledProp = defaultIsDisabled,
		isError = defaultIsError,
		isReadOnly: isReadOnlyProp = defaultIsReadOnly,
		isRequired: isRequiredProp = defaultIsRequired,
		isSuccess = defaultIsSuccess,
		isWarning = defaultIsWarning,
		onChange,
		size = defaultSize,
		sx,
		...rest
	} = props;

	const { state, getRootProps, getCheckboxProps, getInputProps, htmlProps } = useCheckbox({
		isChecked: defaultChecked || isCheckedProp,
		isDisabled: isDisabledProp,
		isFocusable: true,
		isIndeterminate: false,
		isInvalid: isError,
		isReadOnly: isReadOnlyProp,
		isRequired: isRequiredProp
	});

	const { isChecked, isDisabled, isHovered, isInvalid, isReadOnly, isRequired } = state;

	const config = useMemo((): GetSizeConfigReturn => {
		return getSizeConfig({ size });
	}, [size]);

	const style = useStyles({ theme });

	const handleSwitchClick = (): void => {
		if (!isReadOnly && onChange) {
			onChange(!isChecked);
		}
	};

	return (
		<Box
			{...htmlProps}
			{...getRootProps()}
			{...rest}
			ref={ref}
			as='label'
			aria-readonly={isReadOnly}
			aria-required={isRequired}
			aria-checked={isChecked}
			aria-disabled={isDisabled}
			aria-invalid={isInvalid}
			onClick={handleSwitchClick}
			sx={merge(style.group, sx)}
			_disabled={style.disabled}
		>
			<PushableOverlay
				width='100%'
				minWidth={`${config.width}px`}
				height='100%'
				minHeight={`${config.height}px`}
				borderRadius='full'
				color={isInvalid ? 'red' : isSuccess ? 'green' : isWarning ? 'yellow' : isChecked ? color : 'gray'}
				colorMode={colorMode}
				isDisabled={isDisabled}
				isFixed={isReadOnly}
				variant='contained'
				p={config.padding}
			>
				<input className='ds-cl-switch-input' {...getInputProps({}, ref)} />
				<Grid
					{...getCheckboxProps()}
					ref={trackRef}
					className='ds-cl-switch-track'
					as='span'
					width='100%'
					height='100%'
					templateColumns='1fr 1fr'
					templateRows='1fr'
					alignItems='center'
					alignContent='space-between'
					justifyItems='space-between'
					justifyContent='space-between'
					gap={0}
				>
					<GridItem>
						{isChecked ? (
							renderOffLabel ? (
								<Center width='100%' height='100%' mr={config.padding}>
									{renderOffLabel({
										color,
										colorMode,
										width: trackWidth,
										height: trackHeight,
										isChecked
									})}
								</Center>
							) : null
						) : (
							<SwitchThumb
								color={color}
								colorMode={colorMode}
								renderThumbIcon={renderThumbIcon}
								isChecked={false}
								isHovered={isHovered}
								size={size}
							/>
						)}
					</GridItem>

					<GridItem>
						{!isChecked ? (
							renderOnLabel ? (
								<Center width='100%' height='100%' ml={config.padding}>
									{renderOnLabel({
										color,
										colorMode,
										width: trackWidth,
										height: trackHeight,
										isChecked
									})}
								</Center>
							) : null
						) : (
							<SwitchThumb
								color={color}
								colorMode={colorMode}
								renderThumbIcon={renderThumbIcon}
								isChecked
								isHovered={isHovered}
								size={size}
							/>
						)}
					</GridItem>
				</Grid>
			</PushableOverlay>
		</Box>
	);
});

export default Switch;
