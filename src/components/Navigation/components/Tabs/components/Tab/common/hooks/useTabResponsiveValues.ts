import { useGetResponsiveValue } from '@common/hooks';

import {
	__DEFAULT_TAB_IS_ACTIVE__,
	__DEFAULT_TAB_IS_COMPACT__,
	__DEFAULT_TAB_IS_DISABLED__,
	__DEFAULT_TAB_IS_UPPERCASE__
} from '../constants';
import type { TabProps } from '../types';

type UseTabResponsiveValuesProps = Partial<Pick<TabProps, 'isActive' | 'isCompact' | 'isDisabled' | 'isUppercase'>>;

const useTabResponsiveValues = (props: UseTabResponsiveValuesProps) => {
	const {
		isActive: isActiveProp = __DEFAULT_TAB_IS_ACTIVE__,
		isCompact: isCompactProp = __DEFAULT_TAB_IS_COMPACT__,
		isDisabled: isDisabledProp = __DEFAULT_TAB_IS_DISABLED__,
		isUppercase: isUppercaseProp = __DEFAULT_TAB_IS_UPPERCASE__
	} = props;

	const isActive = useGetResponsiveValue<boolean>(isActiveProp);
	const isCompact = useGetResponsiveValue<boolean>(isCompactProp);
	const isDisabled = useGetResponsiveValue<boolean>(isDisabledProp);
	const isUppercase = useGetResponsiveValue<boolean>(isUppercaseProp);

	return { isActive, isCompact, isDisabled, isUppercase };
};

export default useTabResponsiveValues;
