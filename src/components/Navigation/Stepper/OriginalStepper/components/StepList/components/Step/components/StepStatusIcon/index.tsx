import { FC, useMemo } from 'react';

import { useTheme } from '../../../../../../../../../../common/hooks';
import Icon from '../../../../../../../../../DataDisplay/Icon/';
import { getSizeConfig, GetSizeConfigReturn } from '../../../../../../../common/utils';
import { useStepperContext } from '../../../../../../common/hooks';
import { getStepStatusColor, getStepStatusIcon } from '../../common/utils';

import { StepStatusIconProps } from './common/types';

const StepStatusIcon: FC<StepStatusIconProps> = ({ status }) => {
	const theme = useTheme();

	const { color, colorMode, size } = useStepperContext();

	const iconColor = useMemo(() => getStepStatusColor({ status, color }), [status]);
	const iconType = useMemo(() => getStepStatusIcon({ status }), [status]);

	// TODO: Go over all useMemo and check we are passing down a type
	const { icon } = useMemo<GetSizeConfigReturn>(() => {
		return getSizeConfig({ size });
	}, [size]);

	return (
		<Icon
			color={iconColor}
			colorMode={colorMode}
			width={theme.fontSizes[icon.fontSize]}
			height={theme.fontSizes[icon.fontSize]}
			fontSize={theme.fontSizes[icon.fontSize]}
			icon={iconType}
			category='outlined'
			variant='transparent'
		/>
	);
};

export default StepStatusIcon;
