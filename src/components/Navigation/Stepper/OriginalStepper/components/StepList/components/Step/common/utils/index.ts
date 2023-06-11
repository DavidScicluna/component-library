import memoize from 'micro-memoize';

import { AppColor } from '../../../../../../../../../../common/types';
import { Icon } from '../../../../../../../../../../common/types/icons';
import { activeStep as defaultActiveStep } from '../../../../../../../common/default/props';
import { status as defaultStatus } from '../default/props';
import { StepStatus } from '../types';

type GetStatusColorProps = { status: StepStatus; color: AppColor };
type GetStatusColorReturn = AppColor;

export const getStepStatusColor = memoize(
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

type GetStatusIconProps = { status: StepStatus };

export const getStepStatusIcon = memoize(({ status = defaultStatus }: GetStatusIconProps): Icon => {
	switch (status) {
		case 'success':
			return 'check_circle_outline';
		case 'error':
			return 'error_outline';
		case 'active':
			return 'adjust';
		case 'warning':
			return 'warning_amber';
		default:
			return 'pending';
	}
});

type GetStatusProps = { activeStep: number; index: number; status: StepStatus };

export const getStepStatus = memoize((props: GetStatusProps): StepStatus => {
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
