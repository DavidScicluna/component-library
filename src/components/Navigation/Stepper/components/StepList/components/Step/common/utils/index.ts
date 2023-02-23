import memoize from 'memoizee';

import { Icon } from '../../../../../../../../../common/types/icons';
import { Color } from '../../../../../../../../../theme/types';
import { activeStep as defaultActiveStep } from '../../../../../../common/data/defaultPropValues';
import { StepperColor } from '../../../../../../types';
import { Status } from '../../types';
import { status as defaultStatus } from '../data/defaultPropValues';

type GetStatusColorProps = { status: Status; color: StepperColor };
type GetStatusColorReturn = Exclude<Color, 'transparent' | 'black' | 'white'>;

export const getStatusColor = memoize(
	({ status = defaultStatus, color }: GetStatusColorProps): GetStatusColorReturn => {
		switch (status) {
			case 'success':
				return 'green';
			case 'error':
				return 'red';
			case 'active':
				return color;
			case 'warning':
				return 'yellow';
			default:
				return 'gray';
		}
	}
);

type GetStatusIconProps = { status: Status };

export const getStatusIcon = memoize(({ status = defaultStatus }: GetStatusIconProps): Icon => {
	switch (status) {
		case 'error':
			return 'error_outline';
		case 'warning':
			return 'warning_amber';
		default:
			return 'done';
	}
});

type GetStatusProps = { activeStep: number; index: number; status: Status };

export const getStatus = memoize((props: GetStatusProps): Status => {
	const { activeStep = defaultActiveStep, index, status = defaultStatus } = props;

	if (activeStep === index) {
		return 'active';
	} else {
		switch (status) {
			case 'success':
				return 'success';
			case 'error':
				return 'error';
			case 'warning':
				return 'warning';
			default:
				return 'idle';
		}
	}
});
