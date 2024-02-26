import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType } from '@common/types';

import { DEFAULT_INDICATOR_IS_VISIBLE, DEFAULT_INDICATOR_OFFSET, DEFAULT_INDICATOR_PLACEMENT } from '../constants';
import type { IndicatorPlacement, IndicatorProps } from '../types';

type UseIndicatorResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<IndicatorProps<Element>, 'isVisible' | 'offset' | 'placement'>
>;

const useIndicatorResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseIndicatorResponsiveValuesProps<Element>
) => {
	const {
		isVisible: isVisibleProp = DEFAULT_INDICATOR_IS_VISIBLE,
		offset: offsetProp = DEFAULT_INDICATOR_OFFSET,
		placement: placementProp = DEFAULT_INDICATOR_PLACEMENT
	} = props;

	const isVisible = useGetResponsiveValue<boolean>(isVisibleProp);

	const offset = useGetResponsiveValue<number>(offsetProp);
	const placement = useGetResponsiveValue<IndicatorPlacement>(placementProp);

	return { isVisible, offset, placement };
};

export default useIndicatorResponsiveValues;
