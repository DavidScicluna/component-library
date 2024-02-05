import type { ReactNode } from 'react';

import type { Required } from 'utility-types';

import { __DEFAULT_SPACING__ } from '@common/constants';
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
	__DEFAULT_STACK_ALIGN_ITEMS__,
	__DEFAULT_STACK_DIRECTION__,
	__DEFAULT_STACK_JUSTIFY_CONTENT__,
	__DEFAULT_STACK_WRAP__
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
		alignItems: alignItems || __DEFAULT_STACK_ALIGN_ITEMS__,
		direction: direction || __DEFAULT_STACK_DIRECTION__,
		divider,
		justifyContent: justifyContent || __DEFAULT_STACK_JUSTIFY_CONTENT__,
		spacing: spacing || __DEFAULT_SPACING__,
		wrap: wrap || __DEFAULT_STACK_WRAP__
	};
};

export default useStackResponsiveValues;
