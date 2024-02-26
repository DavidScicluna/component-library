import { DEFAULT_SPACING } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing } from '@common/types';

import {
	DEFAULT_DUMMY_TABS_ALIGN,
	DEFAULT_DUMMY_TABS_INDEX,
	DEFAULT_DUMMY_TABS_IS_ANIMATED,
	DEFAULT_DUMMY_TABS_IS_FITTED,
	DEFAULT_DUMMY_TABS_ORIENTATION,
	DEFAULT_DUMMY_TABS_SIZE
} from '../constants';
import type { DummyTabsAlign, DummyTabsElement, DummyTabsOrientation, DummyTabsProps, DummyTabsSize } from '../types';

type UseDummyTabsResponsiveValuesProps<Element extends DummyTabsElement> = Partial<
	Pick<DummyTabsProps<Element>, 'align' | 'index' | 'isAnimated' | 'isFitted' | 'orientation' | 'size' | 'spacing'>
>;

const useDummyTabsResponsiveValues = <Element extends DummyTabsElement>(
	props: UseDummyTabsResponsiveValuesProps<Element>
) => {
	const {
		align: alignProp = DEFAULT_DUMMY_TABS_ALIGN,
		index: indexProp = DEFAULT_DUMMY_TABS_INDEX,
		isAnimated: isAnimatedProp = DEFAULT_DUMMY_TABS_IS_ANIMATED,
		isFitted: isFittedProp = DEFAULT_DUMMY_TABS_IS_FITTED,
		orientation: orientationProp = DEFAULT_DUMMY_TABS_ORIENTATION,
		size: sizeProp = DEFAULT_DUMMY_TABS_SIZE,
		spacing: spacingProp = DEFAULT_SPACING
	} = props;

	const align = useGetResponsiveValue<DummyTabsAlign>(alignProp);

	const index = useGetResponsiveValue<number>(indexProp);

	const isAnimated = useGetResponsiveValue<boolean>(isAnimatedProp);
	const isFitted = useGetResponsiveValue<boolean>(isFittedProp);

	const orientation = useGetResponsiveValue<DummyTabsOrientation>(orientationProp);
	const size = useGetResponsiveValue<DummyTabsSize>(sizeProp);
	const spacing = useGetResponsiveValue<ThemeSpacing>(spacingProp);

	return {
		align,
		index,
		isAnimated,
		isFitted,
		orientation,
		size,
		spacing
	};
};

export default useDummyTabsResponsiveValues;
