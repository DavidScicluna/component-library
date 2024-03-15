import { useGetResponsiveValue } from '@common/hooks';

import type { TooltipPlacement } from '@components/Overlay';

import {
	DEFAULT_DELETE_ICON_BUTTON_HAS_TOOLTIP,
	DEFAULT_DELETE_ICON_BUTTON_LABEL,
	DEFAULT_DELETE_ICON_BUTTON_PLACEMENT
} from '../constants';
import type { DeleteIconButtonElement, DeleteIconButtonProps } from '../types';

type PickedDeleteIconButtonProps = 'hasTooltip' | 'label' | 'placement';
type UseDeleteIconButtonResponsiveValuesProps<Element extends DeleteIconButtonElement> = Partial<
	Pick<DeleteIconButtonProps<Element>, PickedDeleteIconButtonProps>
>;

const useDeleteIconButtonResponsiveValues = <Element extends DeleteIconButtonElement>(
	props: UseDeleteIconButtonResponsiveValuesProps<Element>
) => {
	const {
		hasTooltip: hasTooltipProp = DEFAULT_DELETE_ICON_BUTTON_HAS_TOOLTIP,
		label: labelProp = DEFAULT_DELETE_ICON_BUTTON_LABEL,
		placement: placementProp = DEFAULT_DELETE_ICON_BUTTON_PLACEMENT
	} = props;

	const hasTooltip = useGetResponsiveValue<boolean>(hasTooltipProp);

	const label = useGetResponsiveValue<string>(labelProp);
	const placement = useGetResponsiveValue<TooltipPlacement>(placementProp);

	return { hasTooltip, label, placement };
};

export default useDeleteIconButtonResponsiveValues;
