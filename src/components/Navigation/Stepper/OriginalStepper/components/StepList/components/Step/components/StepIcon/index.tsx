import { FC, useMemo } from 'react';

import { useTheme } from '../../../../../../../../../../common/hooks';
import Icon from '../../../../../../../../../DataDisplay/Icon';
import { IconVariant } from '../../../../../../../../../DataDisplay/Icon/common/types';
import { getSizeConfig, GetSizeConfigReturn } from '../../../../../../../common/utils';
import { useStepperContext } from '../../../../../../common/hooks';
import { getStepStatusColor, getStepStatusIcon } from '../../common/utils';

import { StepIconProps } from './common/types';

const StepIcon: FC<StepIconProps> = ({ index, status }) => {
	const theme = useTheme();

	const { color, colorMode, size } = useStepperContext();

	const iconColor = useMemo(() => getStepStatusColor({ status, color }), [status]);
	const iconType = useMemo(() => getStepStatusIcon({ status, variant: 'dot' }), [status]);

	const iconVariant = useMemo<IconVariant>(() => {
		switch (status) {
			case 'success':
			case 'error':
			case 'warning':
				return 'outlined';
			case 'active':
				return 'contained';
			default:
				return 'monochrome';
		}
	}, [status]);

	// TODO: Go over all useMemo and check we are passing down a type
	const { icon } = useMemo<GetSizeConfigReturn>(() => getSizeConfig({ size }), [size]);

	return (
		<Icon
			color={iconColor}
			colorMode={colorMode}
			width={`${icon.width}px`}
			height={`${icon.height}px`}
			fontSize={theme.fontSizes[icon.fontSize]}
			borderRadius='full'
			icon={iconType}
			category='outlined'
			variant={iconVariant}
			sx={status === 'idle' || status === 'active' ? { fontWeight: theme.fontWeights.semibold } : undefined}
		>
			{status === 'idle' || status === 'active' ? index + 1 : undefined}
		</Icon>
	);
};

export default StepIcon;
