import { useGetResponsiveValue } from '@common/hooks';

import type { TooltipPlacement } from '@components/Overlay';

import {
	DEFAULT_SCROLL_TO_TOP_ICON_BUTTON_HAS_TOOLTIP,
	DEFAULT_SCROLL_TO_TOP_ICON_BUTTON_LABEL,
	DEFAULT_SCROLL_TO_TOP_ICON_BUTTON_PLACEMENT
} from '../constants';
import type { ScrollToTopIconButtonElement, ScrollToTopIconButtonProps } from '../types';

type PickedScrollToTopIconButtonProps = 'hasTooltip' | 'label' | 'placement';
type UseScrollToTopIconButtonResponsiveValuesProps<Element extends ScrollToTopIconButtonElement> = Partial<
	Pick<ScrollToTopIconButtonProps<Element>, PickedScrollToTopIconButtonProps>
>;

const useScrollToTopIconButtonResponsiveValues = <Element extends ScrollToTopIconButtonElement>(
	props: UseScrollToTopIconButtonResponsiveValuesProps<Element>
) => {
	const {
		hasTooltip: hasTooltipProp = DEFAULT_SCROLL_TO_TOP_ICON_BUTTON_HAS_TOOLTIP,
		label: labelProp = DEFAULT_SCROLL_TO_TOP_ICON_BUTTON_LABEL,
		placement: placementProp = DEFAULT_SCROLL_TO_TOP_ICON_BUTTON_PLACEMENT
	} = props;

	const hasTooltip = useGetResponsiveValue<boolean>(hasTooltipProp);

	const label = useGetResponsiveValue<string>(labelProp);
	const placement = useGetResponsiveValue<TooltipPlacement>(placementProp);

	return { hasTooltip, label, placement };
};

export default useScrollToTopIconButtonResponsiveValues;
