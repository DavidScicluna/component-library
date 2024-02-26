import { DEFAULT_SPACING } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing } from '@common/types';

import { DEFAULT_ALERT_DURATION, DEFAULT_ALERT_STATUS, DEFAULT_ALERT_VARIANT } from '../constants';
import type { AlertDuration, AlertElement, AlertProps, AlertStatus, AlertVariant } from '../types';

type UseAlertResponsiveValuesProps<Element extends AlertElement> = Partial<
	Pick<AlertProps<Element>, 'duration' | 'spacing' | 'status' | 'variant'>
>;

const useAlertResponsiveValues = <Element extends AlertElement>(props: UseAlertResponsiveValuesProps<Element>) => {
	const {
		duration: durationProp = DEFAULT_ALERT_DURATION,
		spacing: spacingProp = DEFAULT_SPACING,
		status: statusProp = DEFAULT_ALERT_STATUS,
		variant: variantProp = DEFAULT_ALERT_VARIANT
	} = props;

	const duration = useGetResponsiveValue<AlertDuration>(durationProp);
	const spacing = useGetResponsiveValue<ThemeSpacing>(spacingProp);
	const status = useGetResponsiveValue<AlertStatus>(statusProp);
	const variant = useGetResponsiveValue<AlertVariant>(variantProp);

	return { duration, spacing, status, variant };
};

export default useAlertResponsiveValues;
