import { useGetResponsiveValue } from '@common/hooks';

import {
	__DEFAULT_TOOLTIP_CLOSE_DELAY__,
	__DEFAULT_TOOLTIP_CLOSE_ON_CLICK__,
	__DEFAULT_TOOLTIP_CLOSE_ON_ESC__,
	__DEFAULT_TOOLTIP_GUTTER__,
	__DEFAULT_TOOLTIP_IS_DISABLED__,
	__DEFAULT_TOOLTIP_LABEL__,
	__DEFAULT_TOOLTIP_OPEN_DELAY__,
	__DEFAULT_TOOLTIP_PLACEMENT__
} from '../constants';
import type { TooltipPlacement, TooltipProps } from '../types';

type UseTooltipResponsiveValuesProps = Partial<
	Pick<
		TooltipProps,
		'closeDelay' | 'openDelay' | 'closeOnClick' | 'closeOnEsc' | 'gutter' | 'label' | 'isDisabled' | 'placement'
	>
>;

const useTooltipResponsiveValues = (props: UseTooltipResponsiveValuesProps) => {
	const {
		closeDelay: closeDelayProp = __DEFAULT_TOOLTIP_CLOSE_DELAY__,
		openDelay: openDelayProp = __DEFAULT_TOOLTIP_OPEN_DELAY__,
		closeOnClick: closeOnClickProp = __DEFAULT_TOOLTIP_CLOSE_ON_CLICK__,
		closeOnEsc: closeOnEscProp = __DEFAULT_TOOLTIP_CLOSE_ON_ESC__,
		gutter: gutterProp = __DEFAULT_TOOLTIP_GUTTER__,
		isDisabled: isDisabledProp = __DEFAULT_TOOLTIP_IS_DISABLED__,
		label: labelProp = __DEFAULT_TOOLTIP_LABEL__,
		placement: placementProp = __DEFAULT_TOOLTIP_PLACEMENT__
	} = props;

	const closeDelay = useGetResponsiveValue<number>(closeDelayProp);
	const openDelay = useGetResponsiveValue<number>(openDelayProp);

	const closeOnClick = useGetResponsiveValue<boolean>(closeOnClickProp);
	const closeOnEsc = useGetResponsiveValue<boolean>(closeOnEscProp);

	const gutter = useGetResponsiveValue<number>(gutterProp);
	const label = useGetResponsiveValue<number>(labelProp);

	const isDisabled = useGetResponsiveValue<boolean>(isDisabledProp);

	const placement = useGetResponsiveValue<TooltipPlacement>(placementProp);

	return { closeDelay, openDelay, closeOnClick, closeOnEsc, gutter, label, isDisabled, placement };
};

export default useTooltipResponsiveValues;
