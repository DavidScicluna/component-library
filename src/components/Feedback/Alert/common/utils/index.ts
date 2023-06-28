import memoize from 'micro-memoize';

import { IconType } from '../../../../..';
import { duration as defaultDuration } from '../default/props';
import { AlertColor, AlertDuration, AlertStatus } from '../types';

export const getStatusColor = memoize((status: AlertStatus): AlertColor => {
	switch (status) {
		case 'error':
			return 'red';
		case 'info':
			return 'blue';
		case 'success':
			return 'green';
		case 'warning':
			return 'yellow';
	}
});

export const getStatusIcon = memoize((status: AlertStatus): IconType => {
	switch (status) {
		case 'success':
			return 'check';
		case 'info':
			return 'info';
		case 'error':
			return 'error';
		case 'warning':
			return 'warning';
	}
});

export const convertDurationToMS = memoize((duration: AlertDuration = defaultDuration): number => duration * 1000);
