import { FC, useMemo } from 'react';

import { Center, HStack, VStack } from '@chakra-ui/react';
import { dataAttr } from '@chakra-ui/utils';

import { merge, omit } from 'lodash-es';

import { useBoolean, useGetColor, useTheme } from '../../../../../../../../common/hooks';
import Divider from '../../../../../../../Divider';
import ScaleFade from '../../../../../../../Transitions/ScaleFade';
import { isDisabled as defaultIsDisabled } from '../../../../../common/default/props';
import { border } from '../../../../../common/default/sizes';
import { getSizeConfig, GetSizeConfigReturn } from '../../../../../common/utils';
import { useStepperContext } from '../../../../common/hooks';

import {
	hasIcon as defaultHasIcon,
	isActive as defaultIsActive,
	isSelected as defaultIsSelected,
	steps as defaultSteps
} from './common/default/props';
import useStyles from './common/styles';
import { StepMouseEvent, StepProps } from './common/types';
import StepIcon from './components/StepIcon';
import StepLabel from './components/StepLabel';
import StepStatus from './components/StepStatus';
import StepStatusIcon from './components/StepStatusIcon';

const Step: FC<StepProps> = (props) => {
	const theme = useTheme();

	const { color, colorMode, isDisabled: isStepDisabled, isConsecutively, isFitted, size } = useStepperContext();

	const {
		index,
		title,
		subtitle,
		isActive = defaultIsActive,
		isDisabled = defaultIsDisabled,
		isSelected = defaultIsSelected,
		hasIcon = defaultHasIcon,
		onSelect,
		onClick,
		onMouseEnter,
		onMouseLeave,
		status,
		steps = defaultSteps,
		sx,
		...rest
	} = props;

	const [isHovering, setIsHovering] = useBoolean();

	const borderColor = useGetColor({
		color: isActive || isSelected ? color : 'gray',
		colorMode,
		type: isActive || isSelected ? 'color' : 'default'
	});

	// TODO: Go over all useMemo and check we are passing down a type
	const config = useMemo<GetSizeConfigReturn>(() => {
		return getSizeConfig({ size });
	}, [size]);

	const style = useStyles({ theme, color, colorMode, isConsecutively, isSelected: isActive || isSelected });

	const handleClick = (event: StepMouseEvent): void => {
		onSelect(index);

		if (onClick) {
			onClick(event);
		}
	};

	const handleMouseEnter = (event: StepMouseEvent): void => {
		setIsHovering.on();

		if (onMouseEnter) {
			onMouseEnter(event);
		}
	};

	const handleMouseLeave = (event: StepMouseEvent): void => {
		setIsHovering.off();

		if (onMouseLeave) {
			onMouseLeave(event);
		}
	};

	return (
		<VStack
			{...omit({ ...rest }, 'panelId')}
			aria-disabled={isStepDisabled || isDisabled}
			data-active={dataAttr(isConsecutively || isActive || isSelected)}
			width={isFitted ? '100%' : 'auto'}
			// minWidth={config.minWidth}
			// maxWidth={!isFitted ? config.maxWidth : 'auto'}
			alignItems='stretch'
			alignContent='stretch'
			justifyContent='space-between'
			onClick={handleClick}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			spacing={0}
			sx={merge(style.step, sx)}
			_disabled={style.disabled}
			_active={style.active}
		>
			<Center width='100%' px={config.padding.x}>
				<Divider
					width='100%'
					height={`${border.tab}px`}
					backgroundColor={theme.colors.transparent}
					borderStartStartRadius='full'
					borderStartEndRadius='full'
				/>
			</Center>

			<HStack
				width='100%'
				alignItems='center'
				alignContent='center'
				justifyContent='space-between'
				spacing={config.spacing}
				px={config.padding.x}
				py={config.padding.y}
			>
				<HStack
					flex={1}
					alignItems='center'
					alignContent='center'
					justifyContent='flex-start'
					spacing={config.spacing}
				>
					{hasIcon ? <StepIcon index={index} status={status} /> : null}

					<VStack alignItems='flex-start' justifyContent='center' spacing={0.5}>
						<StepStatus status={status} steps={steps} />
						<StepLabel index={index} title={title} subtitle={subtitle} hasIcon={hasIcon} />
					</VStack>
				</HStack>

				{!hasIcon ? <StepStatusIcon status={status} /> : null}
			</HStack>

			<ScaleFade in={isActive || isSelected || isHovering} unmountOnExit={false} initialScale={0.75}>
				<Center width='100%' px={config.padding.x}>
					<Divider
						width='100%'
						height={`${border.tab}px`}
						backgroundColor={borderColor}
						borderStartStartRadius='full'
						borderStartEndRadius='full'
					/>
				</Center>
			</ScaleFade>
		</VStack>
	);
};

export default Step;
