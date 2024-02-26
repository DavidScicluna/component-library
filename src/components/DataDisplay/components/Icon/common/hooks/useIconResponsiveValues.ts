import { useGetResponsiveValue } from '@common/hooks';
import type { IconKey, ThemeRadius } from '@common/types';

import {
	DEFAULT_ICON_CATEGORY,
	DEFAULT_ICON_ICON,
	DEFAULT_ICON_RADIUS,
	DEFAULT_ICON_SIZE,
	DEFAULT_ICON_VARIANT
} from '../constants';
import type { IconCategory, IconElement, IconProps, IconSize, IconVariant } from '../types';

type UseIconResponsiveValuesProps<Element extends IconElement> = Partial<
	Pick<IconProps<Element>, 'icon' | 'category' | 'radius' | 'size' | 'variant'>
>;

const useIconResponsiveValues = <Element extends IconElement>(props: UseIconResponsiveValuesProps<Element>) => {
	const {
		icon: iconProp = DEFAULT_ICON_ICON,
		category: categoryProp = DEFAULT_ICON_CATEGORY,
		radius: radiusProp = DEFAULT_ICON_RADIUS,
		size: sizeProp = DEFAULT_ICON_SIZE,
		variant: variantProp = DEFAULT_ICON_VARIANT
	} = props;

	const icon = useGetResponsiveValue<IconKey>(iconProp);
	const category = useGetResponsiveValue<IconCategory>(categoryProp);

	const radius = useGetResponsiveValue<ThemeRadius>(radiusProp);

	const size = useGetResponsiveValue<IconSize>(sizeProp);
	const variant = useGetResponsiveValue<IconVariant>(variantProp);

	return { icon, category, radius, size, variant };
};

export default useIconResponsiveValues;
