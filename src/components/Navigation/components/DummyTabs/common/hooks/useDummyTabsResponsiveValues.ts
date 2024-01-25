import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing } from '@common/types';

import {
	__DEFAULT_DUMMY_TABS_ALIGN__,
	__DEFAULT_DUMMY_TABS_INDEX__,
	__DEFAULT_DUMMY_TABS_IS_ANIMATED__,
	__DEFAULT_DUMMY_TABS_IS_FITTED__,
	__DEFAULT_DUMMY_TABS_ORIENTATION__,
	__DEFAULT_DUMMY_TABS_SIZE__
} from '../constants';
import type { DummyTabsAlign, DummyTabsElement, DummyTabsOrientation, DummyTabsProps, DummyTabsSize } from '../types';

type UseDummyTabsResponsiveValuesProps<Element extends DummyTabsElement> = Partial<
	Pick<DummyTabsProps<Element>, 'align' | 'index' | 'isAnimated' | 'isFitted' | 'orientation' | 'size' | 'spacing'>
>;

const useDummyTabsResponsiveValues = <Element extends DummyTabsElement>(
	props: UseDummyTabsResponsiveValuesProps<Element>
) => {
	const {
		align: alignProp = __DEFAULT_DUMMY_TABS_ALIGN__,
		index: indexProp = __DEFAULT_DUMMY_TABS_INDEX__,
		isAnimated: isAnimatedProp = __DEFAULT_DUMMY_TABS_IS_ANIMATED__,
		isFitted: isFittedProp = __DEFAULT_DUMMY_TABS_IS_FITTED__,
		orientation: orientationProp = __DEFAULT_DUMMY_TABS_ORIENTATION__,
		size: sizeProp = __DEFAULT_DUMMY_TABS_SIZE__,
		spacing: spacingProp = __DEFAULT_SPACING__
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
