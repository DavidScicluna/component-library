import { useContext } from 'react';

import { AlertContext } from '../../Alert';
import { __DEFAULT_ALERT_STATUS__, __DEFAULT_ALERT_VARIANT__ } from '../constants';
import type { AlertContext as AlertContextType, AlertElement } from '../types';

import useAlertResponsiveValues from './useAlertResponsiveValues';

const useAlertContext = <Element extends AlertElement>() => {
	const {
		color,
		colorMode,
		status: statusProp = __DEFAULT_ALERT_STATUS__,
		variant: variantProp = __DEFAULT_ALERT_VARIANT__
	} = useContext<AlertContextType<Element>>(AlertContext);

	const { status, variant } = useAlertResponsiveValues<Element>({ status: statusProp, variant: variantProp });

	return { color, colorMode, status, variant };
};

export default useAlertContext;
