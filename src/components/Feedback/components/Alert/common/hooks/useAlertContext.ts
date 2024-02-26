import { useContext } from 'react';

import { AlertContext } from '../../Alert';
import { DEFAULT_ALERT_STATUS, DEFAULT_ALERT_VARIANT } from '../constants';
import type { AlertContext as AlertContextType, AlertElement } from '../types';

import useAlertResponsiveValues from './useAlertResponsiveValues';

const useAlertContext = <Element extends AlertElement>() => {
	const {
		color,
		colorMode,
		status: statusProp = DEFAULT_ALERT_STATUS,
		variant: variantProp = DEFAULT_ALERT_VARIANT
	} = useContext<AlertContextType<Element>>(AlertContext);

	const { status, variant } = useAlertResponsiveValues<Element>({ status: statusProp, variant: variantProp });

	return { color, colorMode, status, variant };
};

export default useAlertContext;
