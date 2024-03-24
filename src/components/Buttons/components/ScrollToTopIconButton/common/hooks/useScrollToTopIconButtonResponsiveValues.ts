import { useGetResponsiveValue } from '@common/hooks';

import type { ScrollToTopIconButtonNonResponsiveValueProps, ScrollToTopIconButtonResponsiveValueProps } from '../types';

type UseScrollToTopIconButtonResponsiveValuesProps = Partial<ScrollToTopIconButtonResponsiveValueProps>;
type UseScrollToTopIconButtonResponsiveValuesReturn = ScrollToTopIconButtonNonResponsiveValueProps;

const useScrollToTopIconButtonResponsiveValues = (
	props: UseScrollToTopIconButtonResponsiveValuesProps
): UseScrollToTopIconButtonResponsiveValuesReturn => {
	const { hasTooltip: hasTooltipProp, label: labelProp, placement: placementProp } = props;

	const hasTooltip =
		useGetResponsiveValue<ScrollToTopIconButtonNonResponsiveValueProps['hasTooltip']>(hasTooltipProp);

	const label = useGetResponsiveValue<ScrollToTopIconButtonNonResponsiveValueProps['label']>(labelProp);
	const placement = useGetResponsiveValue<ScrollToTopIconButtonNonResponsiveValueProps['placement']>(placementProp);

	return { hasTooltip, label, placement };
};

export default useScrollToTopIconButtonResponsiveValues;
