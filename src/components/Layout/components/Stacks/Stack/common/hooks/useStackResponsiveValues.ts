import type { DeepRequired } from 'utility-types';

import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type {
	AlignItemsClass,
	FlexDirectionClass,
	FlexWrapClass,
	JustifyContentClass,
	PolymorphicDefaultElement,
	PolymorphicElementType,
	ThemeSpacing
} from '@common/types';

import {
	__DEFAULT_STACK_ALIGN_ITEMS__,
	__DEFAULT_STACK_DIRECTION__,
	__DEFAULT_STACK_JUSTIFY_CONTENT__,
	__DEFAULT_STACK_WRAP__
} from '../constants';
import type { StackOtherProps, StackProps } from '../types';

type PickedStackProps = 'alignItems' | 'direction' | 'justifyContent' | 'spacing' | 'wrap';

type UseStackResponsiveValuesProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Partial<
	Pick<StackProps<Element>, PickedStackProps>
>;
type UseStackResponsiveValuesReturn = DeepRequired<Pick<StackOtherProps, PickedStackProps>>;

const useStackResponsiveValues = <Element extends PolymorphicElementType = PolymorphicDefaultElement>(
	props: UseStackResponsiveValuesProps<Element>
): UseStackResponsiveValuesReturn => {
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
