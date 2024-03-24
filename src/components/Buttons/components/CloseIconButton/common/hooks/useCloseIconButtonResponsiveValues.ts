import { useGetResponsiveValue } from '@common/hooks';

import type { CloseIconButtonNonResponsiveValueProps, CloseIconButtonResponsiveValueProps } from '../types';

type UseCloseIconButtonResponsiveValuesProps = Partial<CloseIconButtonResponsiveValueProps>;
type UseCloseIconButtonResponsiveValuesReturn = CloseIconButtonNonResponsiveValueProps;

const useCloseIconButtonResponsiveValues = (
	props: UseCloseIconButtonResponsiveValuesProps
): UseCloseIconButtonResponsiveValuesReturn => {
	const { hasTooltip: hasTooltipProp, label: labelProp, placement: placementProp } = props;

	const hasTooltip = useGetResponsiveValue<CloseIconButtonNonResponsiveValueProps['hasTooltip']>(hasTooltipProp);

	const label = useGetResponsiveValue<CloseIconButtonNonResponsiveValueProps['label']>(labelProp);
	const placement = useGetResponsiveValue<CloseIconButtonNonResponsiveValueProps['placement']>(placementProp);

	return { hasTooltip, label, placement };
};

export default useCloseIconButtonResponsiveValues;
