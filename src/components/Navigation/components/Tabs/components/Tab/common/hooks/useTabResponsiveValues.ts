import { useGetResponsiveValue } from '@common/hooks';

import {
	DEFAULT_TAB_IS_ACTIVE,
	DEFAULT_TAB_IS_COMPACT,
	DEFAULT_TAB_IS_DISABLED,
	DEFAULT_TAB_IS_UPPERCASE
} from '../constants';
import type { TabElement, TabProps } from '../types';

type UseTabResponsiveValuesProps<Element extends TabElement> = Partial<
	Pick<TabProps<Element>, 'isActive' | 'isCompact' | 'isDisabled' | 'isUppercase'>
>;

const useTabResponsiveValues = <Element extends TabElement>(props: UseTabResponsiveValuesProps<Element>) => {
	const {
		isActive: isActiveProp = DEFAULT_TAB_IS_ACTIVE,
		isCompact: isCompactProp = DEFAULT_TAB_IS_COMPACT,
		isDisabled: isDisabledProp = DEFAULT_TAB_IS_DISABLED,
		isUppercase: isUppercaseProp = DEFAULT_TAB_IS_UPPERCASE
	} = props;

	const isActive = useGetResponsiveValue<boolean>(isActiveProp);
	const isCompact = useGetResponsiveValue<boolean>(isCompactProp);
	const isDisabled = useGetResponsiveValue<boolean>(isDisabledProp);
	const isUppercase = useGetResponsiveValue<boolean>(isUppercaseProp);

	return { isActive, isCompact, isDisabled, isUppercase };
};

export default useTabResponsiveValues;
