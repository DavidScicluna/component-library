import { FC } from 'react';

import { useTheme } from '../../../../../../../../../common/hooks';
import { getColor } from '../../../../../../../../../common/utils/color';
import Icon from '../../../../../../../../Icon';
import { useStepperContext } from '../../../../../../common/hooks';
import { getStatusColor, getStatusIcon } from '../../common/utils';

import { StepIconProps } from './types';

const StepIcon: FC<StepIconProps> = ({ status }) => {
	const theme = useTheme();

	const { color, colorMode } = useStepperContext();

	return (
		<Icon
			width={theme.fontSizes['3xl']}
			height={theme.fontSizes['3xl']}
			fontSize={theme.fontSizes['3xl']}
			color={getColor({ theme, colorMode, color: getStatusColor({ status, color }), type: 'color' })}
			icon={getStatusIcon({ status })}
			category='outlined'
		/>
	);
};

export default StepIcon;
