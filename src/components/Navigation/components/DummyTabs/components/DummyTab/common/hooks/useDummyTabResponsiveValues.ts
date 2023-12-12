import { useGetResponsiveValue } from '@common/hooks';

import { __DEFAULT_DUMMY_TAB_IS_COMPACT__, __DEFAULT_DUMMY_TAB_IS_UPPERCASE__ } from '../constants';
import type { DummyTabProps } from '../types';

type UseDummyTabResponsiveValuesProps = Partial<Pick<DummyTabProps, 'isCompact' | 'isUppercase'>>;

const useDummyTabResponsiveValues = (props: UseDummyTabResponsiveValuesProps) => {
	const {
		isCompact: isCompactProp = __DEFAULT_DUMMY_TAB_IS_COMPACT__,
		isUppercase: isUppercaseProp = __DEFAULT_DUMMY_TAB_IS_UPPERCASE__
	} = props;

	const isCompact = useGetResponsiveValue<boolean>(isCompactProp);
	const isUppercase = useGetResponsiveValue<boolean>(isUppercaseProp);

	return { isCompact, isUppercase };
};

export default useDummyTabResponsiveValues;
