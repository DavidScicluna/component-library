import { useGetResponsiveValue } from '@common/hooks';

import { __DEFAULT_POSITION_OVERLAY_ITEM_PLACEMENT__ } from '../constants';
import type { PositionOverlayItem, PositionOverlayItemPlacement } from '../types';

type UsePositionOverlayItemResponsiveValuesProps = Partial<Pick<PositionOverlayItem, 'placement'>>;

const usePositionOverlayItemResponsiveValues = (props: UsePositionOverlayItemResponsiveValuesProps) => {
	const { placement: placementProp = __DEFAULT_POSITION_OVERLAY_ITEM_PLACEMENT__ } = props;

	const placement = useGetResponsiveValue<PositionOverlayItemPlacement>(placementProp);

	return { placement };
};

export default usePositionOverlayItemResponsiveValues;
