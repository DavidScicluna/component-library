import memoize from 'micro-memoize';

import type { IconKey, ThemeAppColor, ThemeColor } from '@common/types';

import type { StepperVariant, StepStatus } from '@components/Navigation';

export const getStepStatusColor = memoize((color: ThemeAppColor, status: StepStatus): ThemeColor => {
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

export const getStepStatusIcon = memoize((status: StepStatus, variant: StepperVariant): IconKey => {
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
});

export const getStepStatusLabel = memoize((isSelected: boolean, status: StepStatus): StepStatus => {
	if (isSelected) {
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
