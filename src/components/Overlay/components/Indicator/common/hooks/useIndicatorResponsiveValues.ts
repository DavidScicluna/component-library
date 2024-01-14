import { useGetResponsiveValue } from '@common/hooks';

import {
	__DEFAULT_INDICATOR_IS_VISIBLE__,
	__DEFAULT_INDICATOR_OFFSET__,
	__DEFAULT_INDICATOR_PLACEMENT__
} from '../constants';
import type { IndicatorPlacement, IndicatorProps } from '../types';

type UseIndicatorResponsiveValuesProps = Partial<Pick<IndicatorProps, 'isVisible' | 'offset' | 'placement'>>;

const useIndicatorResponsiveValues = (props: UseIndicatorResponsiveValuesProps) => {
	const {
		isVisible: isVisibleProp = __DEFAULT_INDICATOR_IS_VISIBLE__,
		offset: offsetProp = __DEFAULT_INDICATOR_OFFSET__,
		placement: placementProp = __DEFAULT_INDICATOR_PLACEMENT__
	} = props;

	const isVisible = useGetResponsiveValue<boolean>(isVisibleProp);

	const offset = useGetResponsiveValue<number>(offsetProp);
	const placement = useGetResponsiveValue<IndicatorPlacement>(placementProp);

	return { isVisible, offset, placement };
};

export default useIndicatorResponsiveValues;
