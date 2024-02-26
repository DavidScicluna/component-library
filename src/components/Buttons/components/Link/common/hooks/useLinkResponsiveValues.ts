import { useGetResponsiveValue } from '@common/hooks';

import { DEFAULT_LINK_IS_DISABLED, DEFAULT_LINK_IS_UNDERLINE, DEFAULT_LINK_IS_UNSTYLED } from '../constants';
import type { LinkElement, LinkProps } from '../types';

type UseLinkResponsiveValuesProps<Element extends LinkElement> = Partial<
	Pick<LinkProps<Element>, 'isDisabled' | 'isUnderline' | 'isUnstyled'>
>;

const useLinkResponsiveValues = <Element extends LinkElement>(props: UseLinkResponsiveValuesProps<Element>) => {
	const {
		isDisabled: isDisabledProp = DEFAULT_LINK_IS_DISABLED,
		isUnderline: isUnderlineProp = DEFAULT_LINK_IS_UNDERLINE,
		isUnstyled: isUnstyledProp = DEFAULT_LINK_IS_UNSTYLED
	} = props;

	const isDisabled = useGetResponsiveValue<boolean>(isDisabledProp);
	const isUnderline = useGetResponsiveValue<boolean>(isUnderlineProp);
	const isUnstyled = useGetResponsiveValue<boolean>(isUnstyledProp);

	return { isDisabled, isUnderline, isUnstyled };
};

export default useLinkResponsiveValues;
