import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType } from '@common/types';

import {
	__DEFAULT_INDICATOR_IS_VISIBLE__,
	__DEFAULT_INDICATOR_OFFSET__,
	__DEFAULT_INDICATOR_PLACEMENT__
} from '../constants';
import type { IndicatorPlacement, IndicatorProps } from '../types';

type UseIndicatorResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<IndicatorProps<Element>, 'isVisible' | 'offset' | 'placement'>
>;

const useIndicatorResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseIndicatorResponsiveValuesProps<Element>
) => {
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
