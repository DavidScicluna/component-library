import type { ReactNode } from 'react';

import { useGetResponsiveValue } from '@common/hooks';
import type {
	AlignItemsClass,
	FlexDirectionClass,
	FlexWrapClass,
	JustifyContentClass,
	ThemeSpacing,
	Undefinable
} from '@common/types';

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

	const alignItems = useGetResponsiveValue<Undefinable<AlignItemsClass>>(alignItemsProp);
	const direction = useGetResponsiveValue<Undefinable<FlexDirectionClass>>(directionProp);
	const divider = useGetResponsiveValue<Undefinable<ReactNode>>(dividerProp);
	const justifyContent = useGetResponsiveValue<Undefinable<JustifyContentClass>>(justifyContentProp);
	const spacing = useGetResponsiveValue<Undefinable<ThemeSpacing>>(spacingProp);
	const wrap = useGetResponsiveValue<Undefinable<FlexWrapClass>>(wrapProp);

	return { alignItems, direction, divider, justifyContent, spacing, wrap };
};

export default useStackResponsiveValues;
