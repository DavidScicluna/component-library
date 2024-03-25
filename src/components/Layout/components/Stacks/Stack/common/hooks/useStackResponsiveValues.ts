import { useGetResponsiveValue } from '@common/hooks';

import type { StackNonResponsiveValueProps, StackResponsiveValueProps } from '../types';

type UseStackResponsiveValuesProps = Partial<StackResponsiveValueProps>;
type UseStackResponsiveValuesReturn = StackNonResponsiveValueProps;

const useStackResponsiveValues = (props: UseStackResponsiveValuesProps): UseStackResponsiveValuesReturn => {
	const {
		alignItems: alignItemsProp,
		divider: dividerProp,
		direction: directionProp,
		justifyContent: justifyContentProp,
		spacing: spacingProp,
		wrap: wrapProp
	} = props;

	const alignItems = useGetResponsiveValue<StackNonResponsiveValueProps['alignItems']>(alignItemsProp);
	const direction = useGetResponsiveValue<StackNonResponsiveValueProps['direction']>(directionProp);
	const divider = useGetResponsiveValue<StackNonResponsiveValueProps['divider']>(dividerProp);
	const justifyContent = useGetResponsiveValue<StackNonResponsiveValueProps['justifyContent']>(justifyContentProp);
	const spacing = useGetResponsiveValue<StackNonResponsiveValueProps['spacing']>(spacingProp);
	const wrap = useGetResponsiveValue<StackNonResponsiveValueProps['wrap']>(wrapProp);

	return { alignItems, direction, divider, justifyContent, spacing, wrap };
};

export default useStackResponsiveValues;
