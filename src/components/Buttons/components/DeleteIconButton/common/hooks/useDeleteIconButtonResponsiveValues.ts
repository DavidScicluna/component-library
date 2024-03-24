import { useGetResponsiveValue } from '@common/hooks';

import type { DeleteIconButtonNonResponsiveValueProps, DeleteIconButtonResponsiveValueProps } from '../types';

type UseDeleteIconButtonResponsiveValuesProps = Partial<DeleteIconButtonResponsiveValueProps>;
type UseDeleteIconButtonResponsiveValuesReturn = DeleteIconButtonNonResponsiveValueProps;

const useDeleteIconButtonResponsiveValues = (
	props: UseDeleteIconButtonResponsiveValuesProps
): UseDeleteIconButtonResponsiveValuesReturn => {
	const { hasTooltip: hasTooltipProp, label: labelProp, placement: placementProp } = props;

	const hasTooltip = useGetResponsiveValue<DeleteIconButtonNonResponsiveValueProps['hasTooltip']>(hasTooltipProp);

	const label = useGetResponsiveValue<DeleteIconButtonNonResponsiveValueProps['label']>(labelProp);
	const placement = useGetResponsiveValue<DeleteIconButtonNonResponsiveValueProps['placement']>(placementProp);

	return { hasTooltip, label, placement };
};

export default useDeleteIconButtonResponsiveValues;
