import { useGetResponsiveValue } from '@common/hooks';

import type { TooltipNonResponsiveValueProps, TooltipResponsiveValueProps } from '../types';

type UseTooltipResponsiveValuesProps = Partial<TooltipResponsiveValueProps>;
type UseTooltipResponsiveValuesReturn = TooltipNonResponsiveValueProps;

const useTooltipResponsiveValues = (props: UseTooltipResponsiveValuesProps): UseTooltipResponsiveValuesReturn => {
	const {
		closeDelay: closeDelayProp,
		openDelay: openDelayProp,
		closeOnClick: closeOnClickProp,
		closeOnEsc: closeOnEscProp,
		gutter: gutterProp,
		isDisabled: isDisabledProp,
		label: labelProp,
		placement: placementProp
	} = props;

	const closeDelay = useGetResponsiveValue<TooltipNonResponsiveValueProps['closeDelay']>(closeDelayProp);
	const openDelay = useGetResponsiveValue<TooltipNonResponsiveValueProps['openDelay']>(openDelayProp);

	const closeOnClick = useGetResponsiveValue<TooltipNonResponsiveValueProps['closeOnClick']>(closeOnClickProp);
	const closeOnEsc = useGetResponsiveValue<TooltipNonResponsiveValueProps['closeOnEsc']>(closeOnEscProp);

	const gutter = useGetResponsiveValue<TooltipNonResponsiveValueProps['gutter']>(gutterProp);
	const label = useGetResponsiveValue<TooltipNonResponsiveValueProps['label']>(labelProp);

	const isDisabled = useGetResponsiveValue<TooltipNonResponsiveValueProps['isDisabled']>(isDisabledProp);

	const placement = useGetResponsiveValue<TooltipNonResponsiveValueProps['placement']>(placementProp);

	return { closeDelay, openDelay, closeOnClick, closeOnEsc, gutter, label, isDisabled, placement };
};

export default useTooltipResponsiveValues;
