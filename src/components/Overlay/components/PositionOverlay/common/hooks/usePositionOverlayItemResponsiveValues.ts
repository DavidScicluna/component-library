import { useGetResponsiveValue } from '@common/hooks';

import { DEFAULT_POSITION_OVERLAY_ITEM_PLACEMENT } from '../constants';
import type { PositionOverlayItem, PositionOverlayItemPlacement } from '../types';

type UsePositionOverlayItemResponsiveValuesProps = Partial<Pick<PositionOverlayItem, 'placement'>>;

const usePositionOverlayItemResponsiveValues = (props: UsePositionOverlayItemResponsiveValuesProps) => {
	const { placement: placementProp = DEFAULT_POSITION_OVERLAY_ITEM_PLACEMENT } = props;

	const placement = useGetResponsiveValue<PositionOverlayItemPlacement>(placementProp);

	return { placement };
};

export default usePositionOverlayItemResponsiveValues;
