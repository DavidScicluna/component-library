import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type {
	AlignItemsClass,
	FlexDirectionClass,
	FlexWrapClass,
	JustifyContentClass,
	ThemeSpacing
} from '@common/types';

import {
	__DEFAULT_STACK_ALIGN_ITEMS__,
	__DEFAULT_STACK_DIRECTION__,
	__DEFAULT_STACK_JUSTIFY_CONTENT__,
	__DEFAULT_STACK_WRAP__
} from '../constants';
import type { StackProps } from '../types';

type UseStackResponsiveValuesProps = Partial<
	Pick<StackProps, 'alignItems' | 'direction' | 'justifyContent' | 'spacing' | 'wrap'>
>;

const useStackResponsiveValues = (props: UseStackResponsiveValuesProps) => {
	const {
		alignItems: alignItemsProp = __DEFAULT_STACK_ALIGN_ITEMS__,
		direction: directionProp = __DEFAULT_STACK_DIRECTION__,
		justifyContent: justifyContentProp = __DEFAULT_STACK_JUSTIFY_CONTENT__,
		spacing: spacingProp = __DEFAULT_SPACING__,
		wrap: wrapProp = __DEFAULT_STACK_WRAP__
	} = props;

	const alignItems = useGetResponsiveValue<AlignItemsClass>(alignItemsProp);
	const direction = useGetResponsiveValue<FlexDirectionClass>(directionProp);
	const justifyContent = useGetResponsiveValue<JustifyContentClass>(justifyContentProp);
	const spacing = useGetResponsiveValue<ThemeSpacing>(spacingProp);
	const wrap = useGetResponsiveValue<FlexWrapClass>(wrapProp);

	return { alignItems, direction, justifyContent, spacing, wrap };
};

export default useStackResponsiveValues;
