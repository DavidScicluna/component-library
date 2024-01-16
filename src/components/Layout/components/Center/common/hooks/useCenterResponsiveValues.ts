import type { DeepRequired } from 'utility-types';

import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicDefaultElement, PolymorphicElementType, ThemeSpacing } from '@common/types';

import { __DEFAULT_CENTER_SPACING__ } from '../constants';
import type { CenterOtherProps, CenterProps } from '../types';

type PickedCenterProps = 'spacing';

type UseCenterResponsiveValuesProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Partial<
	Pick<CenterProps<Element>, PickedCenterProps>
>;
type UseCenterResponsiveValuesReturn = DeepRequired<Pick<CenterOtherProps, PickedCenterProps>>;

const useCenterResponsiveValues = <Element extends PolymorphicElementType = PolymorphicDefaultElement>(
	props: UseCenterResponsiveValuesProps<Element>
): UseCenterResponsiveValuesReturn => {
	const { spacing: spacingProp = __DEFAULT_CENTER_SPACING__ } = props;

	const spacing = useGetResponsiveValue<ThemeSpacing>(spacingProp);

	return { spacing };
};

export default useCenterResponsiveValues;
