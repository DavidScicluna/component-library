import memoize from 'micro-memoize';

import { DEFAULT_COLOR } from '@common/constants';
import type { IconKey, ThemeColor } from '@common/types';

import type { AlertStatus } from '../types';

export const getStatusColor = memoize((status: AlertStatus, color: ThemeColor = DEFAULT_COLOR): ThemeColor => {
	switch (status) {
		case 'error':
			return 'red';
		case 'info':
			return 'blue';
		case 'success':
			return 'green';
		case 'warning':
			return 'yellow';
		default:
			return color;
	}
});

export const getStatusIcon = memoize((status: AlertStatus): IconKey => {
	switch (status) {
		case 'success':
			return 'check';
		case 'error':
			return 'error';
		case 'warning':
			return 'warning';
		case 'info':
		default:
			return 'info';
	}
});
