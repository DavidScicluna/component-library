import type { ElementType } from 'react';
import { useContext } from 'react';

import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types';

import { AlertContext } from '../../Alert';
import { __DEFAULT_ALERT_STATUS__, __DEFAULT_ALERT_VARIANT__ } from '../constants';
import type { AlertContext as AlertContextType, AlertStatus, AlertVariant } from '../types';

const useAlertContext = <Element extends ElementType = PolymorphicDefaultElement>() => {
	const {
		color,
		colorMode,
		status: s = __DEFAULT_ALERT_STATUS__,
		variant: v = __DEFAULT_ALERT_VARIANT__
	} = useContext<AlertContextType<Element>>(AlertContext);

	const status = useGetResponsiveValue<AlertStatus>(s);
	const variant = useGetResponsiveValue<AlertVariant>(v);

	return { color, colorMode, status, variant };
};

export default useAlertContext;
