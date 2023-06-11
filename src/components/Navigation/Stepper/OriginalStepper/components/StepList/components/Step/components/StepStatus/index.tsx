import { FC, useMemo } from 'react';

import { HStack, Text } from '@chakra-ui/react';

import { useGetColor } from '../../../../../../../../../../common/hooks';
import { getSizeConfig, GetSizeConfigReturn } from '../../../../../../../common/utils';
import { useStepperContext } from '../../../../../../common/hooks';
import { steps as defaultSteps } from '../../common/default/props';
import { getStatusColor } from '../../common/utils';

import { StatusProps } from './common/types';
import StepSubStepIcon from './components/StepSubStepIcon';

const StepStatus: FC<StatusProps> = ({ status, steps = defaultSteps }) => {
	const { color, colorMode, size } = useStepperContext();

	const textColor = useGetColor({ color: getStatusColor({ status, color }), colorMode, type: 'color' });

	const label = useMemo((): string => {
		switch (status) {
			case 'success':
				return 'complete';
			case 'error':
				return 'error';
			case 'active':
				return 'current';
			case 'warning':
				return 'incomplete';
			default:
				return 'not done yet';
		}
	}, [status]);

	// TODO: Go over all useMemo and check we are passing down a type
	const { statusFontSize, spacing } = useMemo<GetSizeConfigReturn>(() => {
		return getSizeConfig({ size });
	}, [size]);

	return (
		<HStack alignItems='center' justifyContent='center' spacing={spacing}>
			<Text
				align='left'
				color={textColor}
				fontSize={`${statusFontSize}px`}
				fontWeight='semibold'
				letterSpacing='.6px'
				textTransform='uppercase'
				noOfLines={1}
			>
				{label}
			</Text>

			{steps.length ? (
				<HStack alignItems='center' justifyContent='center' spacing={0.5}>
					{steps.map(({ status }, index) => (
						<StepSubStepIcon key={index} status={status} />
					))}
				</HStack>
			) : null}
		</HStack>
	);
};

export default StepStatus;
