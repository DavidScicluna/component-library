import { __DEFAULT_BORDER_WIDTH__, __DEFAULT_SPACING__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeBorderWidth, ThemeSpacing } from '@common/types';

import {
	__DEFAULT_DIVIDER_ORIENTATION__,
	__DEFAULT_DIVIDER_PLACEMENT__,
	__DEFAULT_DIVIDER_VARIANT__
} from '../constants';
import type { DividerElement, DividerOrientation, DividerPlacement, DividerProps, DividerVariant } from '../types';

type UseDividerResponsiveValuesProps<Element extends DividerElement> = Partial<
	Pick<DividerProps<Element>, 'orientation' | 'placement' | 'spacing' | 'size' | 'variant'>
>;

const useDividerResponsiveValues = <Element extends DividerElement>(
	props: UseDividerResponsiveValuesProps<Element>
) => {
	const {
		orientation: orientationProp = __DEFAULT_DIVIDER_ORIENTATION__,
		placement: placementProp = __DEFAULT_DIVIDER_PLACEMENT__,
		spacing: spacingProp = __DEFAULT_SPACING__,
		size: sizeProp = __DEFAULT_BORDER_WIDTH__,
		variant: variantProp = __DEFAULT_DIVIDER_VARIANT__
	} = props;

	const orientation = useGetResponsiveValue<DividerOrientation>(orientationProp);
	const placement = useGetResponsiveValue<DividerPlacement>(placementProp);
	const spacing = useGetResponsiveValue<ThemeSpacing>(spacingProp);
	const size = useGetResponsiveValue<ThemeBorderWidth>(sizeProp);
	const variant = useGetResponsiveValue<DividerVariant>(variantProp);

	return { orientation, placement, spacing, size, variant };
};

export default useDividerResponsiveValues;
