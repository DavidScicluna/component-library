import { useGetResponsiveValue } from '@common/hooks';

import type { TooltipPlacement } from '@components/Overlay';

import {
	DEFAULT_CLEAR_ICON_BUTTON_HAS_TOOLTIP,
	DEFAULT_CLEAR_ICON_BUTTON_LABEL,
	DEFAULT_CLEAR_ICON_BUTTON_PLACEMENT
} from '../constants';
import type { ClearIconButtonElement, ClearIconButtonProps } from '../types';

type PickedClearIconButtonProps = 'hasTooltip' | 'label' | 'placement';
type UseClearIconButtonResponsiveValuesProps<Element extends ClearIconButtonElement> = Partial<
	Pick<ClearIconButtonProps<Element>, PickedClearIconButtonProps>
>;

const useClearIconButtonResponsiveValues = <Element extends ClearIconButtonElement>(
	props: UseClearIconButtonResponsiveValuesProps<Element>
) => {
	const {
		hasTooltip: hasTooltipProp = DEFAULT_CLEAR_ICON_BUTTON_HAS_TOOLTIP,
		label: labelProp = DEFAULT_CLEAR_ICON_BUTTON_LABEL,
		placement: placementProp = DEFAULT_CLEAR_ICON_BUTTON_PLACEMENT
	} = props;

	const hasTooltip = useGetResponsiveValue<boolean>(hasTooltipProp);

	const label = useGetResponsiveValue<string>(labelProp);
	const placement = useGetResponsiveValue<TooltipPlacement>(placementProp);

	return { hasTooltip, label, placement };
};

export default useClearIconButtonResponsiveValues;
