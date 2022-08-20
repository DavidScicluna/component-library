import { FC, useContext } from 'react';

import { StepperContext } from '../../../../../..';
import { useTheme } from '../../../../../../../../../common/hooks';
import { getColor } from '../../../../../../../../../common/utils/color';
import Icon from '../../../../../../../../Icon';
import { color as defaultColor, colorMode as defaultColorMode } from '../../../../../../common/data/defaultPropValues';
import { StepperContext as StepperContextType } from '../../../../../../types';
import { getStatusColor, getStatusIcon } from '../../common/utils';

import { StepIconProps } from './types';

const StepIcon: FC<StepIconProps> = ({ status }) => {
	const theme = useTheme();

	const { color = defaultColor, colorMode = defaultColorMode } = useContext<StepperContextType>(StepperContext);

	return (
		<Icon
			icon={getStatusIcon({ status })}
			category='outlined'
			color={getColor({ theme, colorMode, color: getStatusColor({ status, color }), type: 'color' })}
			fontSize='3xl'
		/>
	);
};

export default StepIcon;
