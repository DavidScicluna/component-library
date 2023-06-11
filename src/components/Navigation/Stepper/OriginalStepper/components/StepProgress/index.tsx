import { FC } from 'react';

import { Progress } from '@chakra-ui/react';

import { useGetColor } from '../../../../../../common/hooks';
import { useStepperContext } from '../../common/hooks';

import { StepProgressProps } from './common/types';

const StepProgress: FC<StepProgressProps> = (props) => {
	const { activeStep, totalSteps, color, colorMode, isConsecutively } = useStepperContext();

	const borderColor = useGetColor({ color: 'gray', colorMode, type: 'divider' });
	const backgroundColor = useGetColor({ color, colorMode, type: 'color' });

	return (
		<Progress
			{...props}
			background={borderColor}
			value={isConsecutively ? (activeStep * 100) / totalSteps : 0}
			sx={{ '& div': { backgroundImage: 'none', backgroundColor } }}
		/>
	);
};

export default StepProgress;
