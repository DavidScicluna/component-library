import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType } from '@common/types';

import {
	DEFAULT_TOOLTIP_CLOSE_DELAY,
	DEFAULT_TOOLTIP_CLOSE_ON_CLICK,
	DEFAULT_TOOLTIP_CLOSE_ON_ESC,
	DEFAULT_TOOLTIP_GUTTER,
	DEFAULT_TOOLTIP_IS_DISABLED,
	DEFAULT_TOOLTIP_LABEL,
	DEFAULT_TOOLTIP_OPEN_DELAY,
	DEFAULT_TOOLTIP_PLACEMENT
} from '../constants';
import type { TooltipPlacement, TooltipProps } from '../types';

type PickedTooltipProps =
	| 'closeDelay'
	| 'openDelay'
	| 'closeOnClick'
	| 'closeOnEsc'
	| 'gutter'
	| 'label'
	| 'isDisabled'
	| 'placement';
type UseTooltipResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<TooltipProps<Element>, PickedTooltipProps>
>;

// TODO: See if we should add return for ResponsiveValues hooks (take look in layout folder)
const useTooltipResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseTooltipResponsiveValuesProps<Element>
) => {
	const {
		closeDelay: closeDelayProp = DEFAULT_TOOLTIP_CLOSE_DELAY,
		openDelay: openDelayProp = DEFAULT_TOOLTIP_OPEN_DELAY,
		closeOnClick: closeOnClickProp = DEFAULT_TOOLTIP_CLOSE_ON_CLICK,
		closeOnEsc: closeOnEscProp = DEFAULT_TOOLTIP_CLOSE_ON_ESC,
		gutter: gutterProp = DEFAULT_TOOLTIP_GUTTER,
		isDisabled: isDisabledProp = DEFAULT_TOOLTIP_IS_DISABLED,
		label: labelProp = DEFAULT_TOOLTIP_LABEL,
		placement: placementProp = DEFAULT_TOOLTIP_PLACEMENT
	} = props;

	const closeDelay = useGetResponsiveValue<number>(closeDelayProp);
	const openDelay = useGetResponsiveValue<number>(openDelayProp);

	const closeOnClick = useGetResponsiveValue<boolean>(closeOnClickProp);
	const closeOnEsc = useGetResponsiveValue<boolean>(closeOnEscProp);

	const gutter = useGetResponsiveValue<number>(gutterProp);
	const label = useGetResponsiveValue<string>(labelProp);

	const isDisabled = useGetResponsiveValue<boolean>(isDisabledProp);

	const placement = useGetResponsiveValue<TooltipPlacement>(placementProp);

	return { closeDelay, openDelay, closeOnClick, closeOnEsc, gutter, label, isDisabled, placement };
};

export default useTooltipResponsiveValues;
