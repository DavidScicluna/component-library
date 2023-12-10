import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing } from '@common/types';

import {
	__DEFAULT_TABS_ALIGN__,
	__DEFAULT_TABS_INDEX__,
	__DEFAULT_TABS_IS_DISABLED__,
	__DEFAULT_TABS_IS_FITTED__,
	__DEFAULT_TABS_ORIENTATION__,
	__DEFAULT_TABS_SIZE__
} from '../constants';
import type { TabsAlign, TabsOrientation, TabsProps, TabsSize } from '../types';

type UseTabsResponsiveValuesProps = Partial<
	Pick<TabsProps, 'align' | 'index' | 'isDisabled' | 'isFitted' | 'orientation' | 'size' | 'spacing'>
>;

const useTabsResponsiveValues = (props: UseTabsResponsiveValuesProps) => {
	const {
		align: alignProp = __DEFAULT_TABS_ALIGN__,
		index: indexProp = __DEFAULT_TABS_INDEX__,
		isDisabled: isDisabledProp = __DEFAULT_TABS_IS_DISABLED__,
		isFitted: isFittedProp = __DEFAULT_TABS_IS_FITTED__,
		orientation: orientationProp = __DEFAULT_TABS_ORIENTATION__,
		size: sizeProp = __DEFAULT_TABS_SIZE__,
		spacing: spacingProp = __DEFAULT_SPACING__
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
