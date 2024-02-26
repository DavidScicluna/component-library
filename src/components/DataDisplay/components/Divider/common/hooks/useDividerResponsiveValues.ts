import { DEFAULT_BORDER_WIDTH, DEFAULT_SPACING } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeBorderWidth, ThemeSpacing } from '@common/types';

import { DEFAULT_DIVIDER_ORIENTATION, DEFAULT_DIVIDER_PLACEMENT, DEFAULT_DIVIDER_VARIANT } from '../constants';
import type { DividerElement, DividerOrientation, DividerPlacement, DividerProps, DividerVariant } from '../types';

type UseDividerResponsiveValuesProps<Element extends DividerElement> = Partial<
	Pick<DividerProps<Element>, 'orientation' | 'placement' | 'spacing' | 'size' | 'variant'>
>;

const useDividerResponsiveValues = <Element extends DividerElement>(
	props: UseDividerResponsiveValuesProps<Element>
) => {
	const {
		orientation: orientationProp = DEFAULT_DIVIDER_ORIENTATION,
		placement: placementProp = DEFAULT_DIVIDER_PLACEMENT,
		spacing: spacingProp = DEFAULT_SPACING,
		size: sizeProp = DEFAULT_BORDER_WIDTH,
		variant: variantProp = DEFAULT_DIVIDER_VARIANT
	} = props;

	const orientation = useGetResponsiveValue<DividerOrientation>(orientationProp);
	const placement = useGetResponsiveValue<DividerPlacement>(placementProp);
	const spacing = useGetResponsiveValue<ThemeSpacing>(spacingProp);
	const size = useGetResponsiveValue<ThemeBorderWidth>(sizeProp);
	const variant = useGetResponsiveValue<DividerVariant>(variantProp);

	return { orientation, placement, spacing, size, variant };
};

export default useDividerResponsiveValues;
