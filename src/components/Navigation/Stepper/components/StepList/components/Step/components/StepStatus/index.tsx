import { FC, useContext } from 'react';

import { Text } from '@chakra-ui/react';

import { StepperContext } from '../../../../../..';
import { useTheme } from '../../../../../../../../../common/hooks';
import { getColor } from '../../../../../../../../../common/utils/color';
import { color as defaultColor, colorMode as defaultColorMode } from '../../../../../../common/data/defaultPropValues';
import { StepperContext as StepperContextType } from '../../../../../../types';
import { getStatusColor } from '../../common/utils';

import { StatusProps } from './types';

const StepStatus: FC<StatusProps> = ({ status }) => {
	const theme = useTheme();

	const { color = defaultColor, colorMode = defaultColorMode } = useContext<StepperContextType>(StepperContext);

	const handleReturnLabel = (): string => {
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
	};

	return (
		<Text
			align='left'
			color={getColor({ theme, colorMode, color: getStatusColor({ status, color }), type: 'color' })}
			fontSize='xs'
			fontWeight='semibold'
			lineHeight='base'
			textTransform='uppercase'
			noOfLines={1}
		>
			{handleReturnLabel()}
		</Text>
	);
};

export default StepStatus;
