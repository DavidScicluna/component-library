import type { ReactNode } from 'react';

import type { Required } from 'utility-types';

import { DEFAULT_SPACING } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type {
	AlignItemsClass,
	FlexDirectionClass,
	FlexWrapClass,
	JustifyContentClass,
	ThemeSpacing,
	Undefinable
} from '@common/types';

import {
	DEFAULT_STACK_ALIGN_ITEMS,
	DEFAULT_STACK_DIRECTION,
	DEFAULT_STACK_JUSTIFY_CONTENT,
	DEFAULT_STACK_WRAP
} from '../constants';
import type { StackNonResponsiveValueProps, StackResponsiveValueProps } from '../types';

type UseStackResponsiveValuesProps = Partial<StackResponsiveValueProps>;
type RequiredStackNonResponsiveValueProps = 'alignItems' | 'direction' | 'justifyContent' | 'spacing' | 'wrap';
type UseStackResponsiveValuesReturn = Required<StackNonResponsiveValueProps, RequiredStackNonResponsiveValueProps>;

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

	return {
		alignItems: alignItems || DEFAULT_STACK_ALIGN_ITEMS,
		direction: direction || DEFAULT_STACK_DIRECTION,
		divider,
		justifyContent: justifyContent || DEFAULT_STACK_JUSTIFY_CONTENT,
		spacing: spacing || DEFAULT_SPACING,
		wrap: wrap || DEFAULT_STACK_WRAP
	};
};

export default useStackResponsiveValues;
