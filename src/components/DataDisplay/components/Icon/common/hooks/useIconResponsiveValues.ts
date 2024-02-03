import { useGetResponsiveValue } from '@common/hooks';
import type { IconKey, ThemeRadius } from '@common/types';

import {
	__DEFAULT_ICON_CATEGORY__,
	__DEFAULT_ICON_ICON__,
	__DEFAULT_ICON_RADIUS__,
	__DEFAULT_ICON_SIZE__,
	__DEFAULT_ICON_VARIANT__
} from '../constants';
import type { IconCategory, IconElement, IconProps, IconSize, IconVariant } from '../types';

type UseIconResponsiveValuesProps<Element extends IconElement> = Partial<
	Pick<IconProps<Element>, 'icon' | 'category' | 'radius' | 'size' | 'variant'>
>;

const useIconResponsiveValues = <Element extends IconElement>(props: UseIconResponsiveValuesProps<Element>) => {
	const {
		icon: iconProp = __DEFAULT_ICON_ICON__,
		category: categoryProp = __DEFAULT_ICON_CATEGORY__,
		radius: radiusProp = __DEFAULT_ICON_RADIUS__,
		size: sizeProp = __DEFAULT_ICON_SIZE__,
		variant: variantProp = __DEFAULT_ICON_VARIANT__
	} = props;

	const icon = useGetResponsiveValue<IconKey>(iconProp);
	const category = useGetResponsiveValue<IconCategory>(categoryProp);

	const radius = useGetResponsiveValue<ThemeRadius>(radiusProp);

	const size = useGetResponsiveValue<IconSize>(sizeProp);
	const variant = useGetResponsiveValue<IconVariant>(variantProp);

	return { icon, category, radius, size, variant };
};

export default useIconResponsiveValues;
