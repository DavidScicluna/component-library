import { useGetResponsiveValue } from '@common/hooks';

import type { TooltipPlacement } from '@components/Overlay';

import {
	DEFAULT_CLOSE_ICON_BUTTON_HAS_TOOLTIP,
	DEFAULT_CLOSE_ICON_BUTTON_LABEL,
	DEFAULT_CLOSE_ICON_BUTTON_PLACEMENT
} from '../constants';
import type { CloseIconButtonElement, CloseIconButtonProps } from '../types';

type PickedCloseIconButtonProps = 'hasTooltip' | 'label' | 'placement';
type UseCloseIconButtonResponsiveValuesProps<Element extends CloseIconButtonElement> = Partial<
	Pick<CloseIconButtonProps<Element>, PickedCloseIconButtonProps>
>;

const useCloseIconButtonResponsiveValues = <Element extends CloseIconButtonElement>(
	props: UseCloseIconButtonResponsiveValuesProps<Element>
) => {
	const {
		hasTooltip: hasTooltipProp = DEFAULT_CLOSE_ICON_BUTTON_HAS_TOOLTIP,
		label: labelProp = DEFAULT_CLOSE_ICON_BUTTON_LABEL,
		placement: placementProp = DEFAULT_CLOSE_ICON_BUTTON_PLACEMENT
	} = props;

	const hasTooltip = useGetResponsiveValue<boolean>(hasTooltipProp);

	const label = useGetResponsiveValue<string>(labelProp);
	const placement = useGetResponsiveValue<TooltipPlacement>(placementProp);

	return { hasTooltip, label, placement };
};

export default useCloseIconButtonResponsiveValues;
