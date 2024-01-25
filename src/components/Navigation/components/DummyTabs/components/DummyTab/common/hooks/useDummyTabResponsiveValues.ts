import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType } from '@common/types';

import { __DEFAULT_DUMMY_TAB_IS_COMPACT__, __DEFAULT_DUMMY_TAB_IS_UPPERCASE__ } from '../constants';
import type { DummyTabProps } from '../types';

type UseDummyTabResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<DummyTabProps<Element>, 'isCompact' | 'isUppercase'>
>;

const useDummyTabResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseDummyTabResponsiveValuesProps<Element>
) => {
	const {
		isCompact: isCompactProp = __DEFAULT_DUMMY_TAB_IS_COMPACT__,
		isUppercase: isUppercaseProp = __DEFAULT_DUMMY_TAB_IS_UPPERCASE__
	} = props;

	const isCompact = useGetResponsiveValue<boolean>(isCompactProp);
	const isUppercase = useGetResponsiveValue<boolean>(isUppercaseProp);

	return { isCompact, isUppercase };
};

export default useDummyTabResponsiveValues;
