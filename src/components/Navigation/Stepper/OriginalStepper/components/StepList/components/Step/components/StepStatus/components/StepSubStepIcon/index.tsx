import { FC, useMemo } from 'react';

import { useTheme } from '../../../../../../../../../../../../common/hooks';
import Icon from '../../../../../../../../../../../DataDisplay/Icon';
import { useStepperContext } from '../../../../../../../../common/hooks';
import { getStatusColor } from '../../../../common/utils';

import { StepSubStepIconProps } from './common/types';

const StepSubStepIcon: FC<StepSubStepIconProps> = ({ status }) => {
	const theme = useTheme();

	const { color, colorMode } = useStepperContext();

	const iconColor = useMemo(() => getStatusColor({ status, color }), [status]);

	return (
		// TODO: Go over all Icon and pass type
		<Icon
			color={iconColor}
			colorMode={colorMode}
			width={theme.fontSizes['lg']}
			height={theme.fontSizes['lg']}
			fontSize={theme.fontSizes['lg']}
			icon='circle'
			category={status === 'active' || status === 'success' ? 'filled' : 'outlined'}
			variant='transparent'
		/>
	);
};

export default StepSubStepIcon;
