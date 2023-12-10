import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing } from '@common/types';

import { __DEFAULT_ALERT_DURATION__, __DEFAULT_ALERT_STATUS__, __DEFAULT_ALERT_VARIANT__ } from '../constants';
import type { AlertDuration, AlertProps, AlertStatus, AlertVariant } from '../types';

type UseAlertResponsiveValuesProps = Partial<Pick<AlertProps, 'duration' | 'spacing' | 'status' | 'variant'>>;

const useAlertResponsiveValues = (props: UseAlertResponsiveValuesProps) => {
	const {
		duration: durationProp = __DEFAULT_ALERT_DURATION__,
		spacing: spacingProp = __DEFAULT_SPACING__,
		status: statusProp = __DEFAULT_ALERT_STATUS__,
		variant: variantProp = __DEFAULT_ALERT_VARIANT__
	} = props;

	const duration = useGetResponsiveValue<AlertDuration>(durationProp);
	const spacing = useGetResponsiveValue<ThemeSpacing>(spacingProp);
	const status = useGetResponsiveValue<AlertStatus>(statusProp);
	const variant = useGetResponsiveValue<AlertVariant>(variantProp);

	return { duration, spacing, status, variant };
};

export default useAlertResponsiveValues;
