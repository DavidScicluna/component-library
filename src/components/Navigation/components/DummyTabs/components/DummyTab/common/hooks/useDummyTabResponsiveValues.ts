import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType } from '@common/types';

import { DEFAULT_DUMMY_TAB_IS_COMPACT, DEFAULT_DUMMY_TAB_IS_UPPERCASE } from '../constants';
import type { DummyTabProps } from '../types';

type UseDummyTabResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<DummyTabProps<Element>, 'isCompact' | 'isUppercase'>
>;

const useDummyTabResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseDummyTabResponsiveValuesProps<Element>
) => {
	const {
		isCompact: isCompactProp = DEFAULT_DUMMY_TAB_IS_COMPACT,
		isUppercase: isUppercaseProp = DEFAULT_DUMMY_TAB_IS_UPPERCASE
	} = props;

	const isCompact = useGetResponsiveValue<boolean>(isCompactProp);
	const isUppercase = useGetResponsiveValue<boolean>(isUppercaseProp);

	return { isCompact, isUppercase };
};

export default useDummyTabResponsiveValues;
