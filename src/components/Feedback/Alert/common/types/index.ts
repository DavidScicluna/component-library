import { ReactNode } from 'react';

import { CommonThemeProps, Nullable, PickFrom } from '../../../../../common/types';
import { Color, Space } from '../../../../../theme/types';

export type AlertColor = PickFrom<Color, 'red' | 'blue' | 'green' | 'yellow'>;

export type AlertDuration =
	| 5
	| 5.5
	| 6
	| 6.5
	| 7
	| 7.5
	| 8
	| 8.5
	| 9
	| 9.5
	| 10
	| 10.5
	| 11
	| 11.5
	| 12
	| 12.5
	| 13
	| 13.5
	| 14
	| 14.5
	| 15
	| 15.5
	| 16
	| 16.5
	| 17
	| 17.5
	| 18
	| 18.5
	| 19
	| 19.5
	| 20;

export type AlertStatus = 'info' | 'warning' | 'success' | 'error';

export type AlertProps = Pick<CommonThemeProps, 'colorMode'> & {
	duration: Nullable<AlertDuration>;
	label?: string;
	description: string;
	actions?: ReactNode;
	onClose?: () => void;
	spacing?: Space;
	status: AlertStatus;
};
