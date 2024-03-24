import { useGetResponsiveValue } from '@common/hooks';

import type { ClearIconButtonNonResponsiveValueProps, ClearIconButtonResponsiveValueProps } from '../types';

type UseClearIconButtonResponsiveValuesProps = Partial<ClearIconButtonResponsiveValueProps>;
type UseClearIconButtonResponsiveValuesReturn = ClearIconButtonNonResponsiveValueProps;

const useClearIconButtonResponsiveValues = (
	props: UseClearIconButtonResponsiveValuesProps
): UseClearIconButtonResponsiveValuesReturn => {
	const { hasTooltip: hasTooltipProp, label: labelProp, placement: placementProp } = props;

	const hasTooltip = useGetResponsiveValue<ClearIconButtonNonResponsiveValueProps['hasTooltip']>(hasTooltipProp);

	const label = useGetResponsiveValue<ClearIconButtonNonResponsiveValueProps['label']>(labelProp);
	const placement = useGetResponsiveValue<ClearIconButtonNonResponsiveValueProps['placement']>(placementProp);

	return { hasTooltip, label, placement };
};

export default useClearIconButtonResponsiveValues;
