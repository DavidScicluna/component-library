import { DEFAULT_SPACING } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing } from '@common/types';

import {
	DEFAULT_TABS_ALIGN,
	DEFAULT_TABS_INDEX,
	DEFAULT_TABS_IS_DISABLED,
	DEFAULT_TABS_IS_FITTED,
	DEFAULT_TABS_ORIENTATION,
	DEFAULT_TABS_SIZE
} from '../constants';
import type { TabsAlign, TabsElement, TabsOrientation, TabsProps, TabsSize } from '../types';

type UseTabsResponsiveValuesProps<Element extends TabsElement> = Partial<
	Pick<TabsProps<Element>, 'align' | 'index' | 'isDisabled' | 'isFitted' | 'orientation' | 'size' | 'spacing'>
>;

const useTabsResponsiveValues = <Element extends TabsElement>(props: UseTabsResponsiveValuesProps<Element>) => {
	const {
		align: alignProp = DEFAULT_TABS_ALIGN,
		index: indexProp = DEFAULT_TABS_INDEX,
		isDisabled: isDisabledProp = DEFAULT_TABS_IS_DISABLED,
		isFitted: isFittedProp = DEFAULT_TABS_IS_FITTED,
		orientation: orientationProp = DEFAULT_TABS_ORIENTATION,
		size: sizeProp = DEFAULT_TABS_SIZE,
		spacing: spacingProp = DEFAULT_SPACING
	} = props;

	const align = useGetResponsiveValue<TabsAlign>(alignProp);

	const index = useGetResponsiveValue<number>(indexProp);

	const isDisabled = useGetResponsiveValue<boolean>(isDisabledProp);
	const isFitted = useGetResponsiveValue<boolean>(isFittedProp);

	const orientation = useGetResponsiveValue<TabsOrientation>(orientationProp);
	const size = useGetResponsiveValue<TabsSize>(sizeProp);
	const spacing = useGetResponsiveValue<ThemeSpacing>(spacingProp);

	return { align, index, isDisabled, isFitted, orientation, size, spacing };
};

export default useTabsResponsiveValues;
