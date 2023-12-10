import { useContext } from 'react';

import { AlertContext } from '../../Alert';
import { __DEFAULT_ALERT_STATUS__, __DEFAULT_ALERT_VARIANT__ } from '../constants';
import type { AlertContext as AlertContextType } from '../types';

import useAlertResponsiveValues from './useAlertResponsiveValues';

const useAlertContext = () => {
	const {
		color,
		colorMode,
		status: statusProp = __DEFAULT_ALERT_STATUS__,
		variant: variantProp = __DEFAULT_ALERT_VARIANT__
	} = useContext<AlertContextType>(AlertContext);

	const { status, variant } = useAlertResponsiveValues({ status: statusProp, variant: variantProp });

	return { color, colorMode, status, variant };
};

export default useAlertContext;
