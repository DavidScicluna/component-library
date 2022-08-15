import { FC, useContext, useCallback } from 'react';

import { Text } from '@chakra-ui/react';

import { getStatusColor } from '../../common/utils';
import { StepperContext as StepperContextType } from '../../../../../../types';
import { StepperContext } from '../../../../../..';
import { color as defaultColor, colorMode as defaultColorMode } from '../../../../../../common/data/defaultPropValues';
import { useTheme } from '../../../../../../../../../common/hooks';
import { getColor } from '../../../../../../../../../common/utils/color';

import { StatusProps } from './types';

const StepStatus: FC<StatusProps> = ({ status }) => {
	const theme = useTheme();

	const { color = defaultColor, colorMode = defaultColorMode } = useContext<StepperContextType>(StepperContext);

	const handleReturnLabel = useCallback((): string => {
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
