import { useGetResponsiveValue } from '@common/hooks';

import {
	__DEFAULT_LINK_IS_DISABLED__,
	__DEFAULT_LINK_IS_UNDERLINE__,
	__DEFAULT_LINK_IS_UNSTYLED__
} from '../constants';
import type { LinkProps } from '../types';

type UseLinkResponsiveValuesProps = Partial<Pick<LinkProps, 'isDisabled' | 'isUnderline' | 'isUnstyled'>>;

const useLinkResponsiveValues = (props: UseLinkResponsiveValuesProps) => {
	const {
		isDisabled: isDisabledProp = __DEFAULT_LINK_IS_DISABLED__,
		isUnderline: isUnderlineProp = __DEFAULT_LINK_IS_UNDERLINE__,
		isUnstyled: isUnstyledProp = __DEFAULT_LINK_IS_UNSTYLED__
	} = props;

	const isDisabled = useGetResponsiveValue<boolean>(isDisabledProp);
	const isUnderline = useGetResponsiveValue<boolean>(isUnderlineProp);
	const isUnstyled = useGetResponsiveValue<boolean>(isUnstyledProp);

	return { isDisabled, isUnderline, isUnstyled };
};

export default useLinkResponsiveValues;
