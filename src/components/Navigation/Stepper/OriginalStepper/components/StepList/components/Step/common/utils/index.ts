import memoize from 'micro-memoize';

import { AppColor, NoUndefinedField } from '../../../../../../../../../../common/types';
import { Icon } from '../../../../../../../../../../common/types/icons';
import { activeStep as defaultActiveStep, variant as defaultVariant } from '../../../../../../../common/default/props';
import { StepperProps } from '../../../../../../common/types';
import { status as defaultStatus } from '../default/props';
import { StepProps, StepStatus } from '../types';

type GetStepStatusColorProps = NoUndefinedField<Pick<StepperProps, 'color'>> & Pick<StepProps, 'status'>;

export const getStepStatusColor = memoize(({ status = defaultStatus, color }: GetStepStatusColorProps): AppColor => {
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
});

type GetStepStatusIconProps = Pick<StepperProps, 'variant'> & Pick<StepProps, 'status'>;

export const getStepStatusIcon = memoize(
	({ status = defaultStatus, variant = defaultVariant }: GetStepStatusIconProps): Icon => {
		switch (status) {
			case 'success':
				return variant === 'dot' ? 'check' : 'check_circle_outline';
			case 'error':
				return variant === 'dot' ? 'error' : 'error_outline';
			case 'active':
				return variant === 'dot' ? 'circle' : 'radio_button_checked';
			case 'warning':
				return variant === 'dot' ? 'warning' : 'warning_amber';
			default:
				return 'radio_button_unchecked';
		}
	}
);

type GetStepStatusProps = Pick<StepperProps, 'activeStep'> & Pick<StepProps, 'index' | 'status'>;

export const getStepStatus = memoize((props: GetStepStatusProps): StepStatus => {
	const { activeStep = defaultActiveStep, index, status = defaultStatus } = props;

	if (activeStep === index) {
		return 'active';
	}
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
});
