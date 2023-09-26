import type { ElementType } from 'react';
import { useContext } from 'react';

import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing } from '@common/types';

import { DummyTabsContext } from '../../DummyTabs';
import {
	__DEFAULT_DUMMY_TABS_ALIGN__,
	__DEFAULT_DUMMY_TABS_ID__,
	__DEFAULT_DUMMY_TABS_INDEX__,
	__DEFAULT_DUMMY_TABS_IS_ANIMATED__,
	__DEFAULT_DUMMY_TABS_IS_FITTED__,
	__DEFAULT_DUMMY_TABS_ORIENTATION__,
	__DEFAULT_DUMMY_TABS_SIZE__
} from '../constants';
import type {
	DummyTabsAlign,
	DummyTabsContext as DummyTabsContextType,
	DummyTabsOrientation,
	DummyTabsSize
} from '../types';

const useDummyTabsContext = <Element extends ElementType>() => {
	const {
		color,
		colorMode,
		align: a = __DEFAULT_DUMMY_TABS_ALIGN__,
		id: i = __DEFAULT_DUMMY_TABS_ID__,
		index: ind = __DEFAULT_DUMMY_TABS_INDEX__,
		isAnimated: animated = __DEFAULT_DUMMY_TABS_IS_ANIMATED__,
		isFitted: fitted = __DEFAULT_DUMMY_TABS_IS_FITTED__,
		orientation: o = __DEFAULT_DUMMY_TABS_ORIENTATION__,
		size: si = __DEFAULT_DUMMY_TABS_SIZE__,
		spacing: sp = __DEFAULT_SPACING__
	} = useContext<DummyTabsContextType<Element>>(DummyTabsContext);

	const align = useGetResponsiveValue<DummyTabsAlign>(a);

	const id = useGetResponsiveValue<string>(i);
	const index = useGetResponsiveValue<number>(ind);

	const isAnimated = useGetResponsiveValue<boolean>(animated);
	const isFitted = useGetResponsiveValue<boolean>(fitted);

	const orientation = useGetResponsiveValue<DummyTabsOrientation>(o);
	const size = useGetResponsiveValue<DummyTabsSize>(si);
	const spacing = useGetResponsiveValue<ThemeSpacing>(sp);

	return { color, colorMode, align, id, index, isAnimated, isFitted, orientation, size, spacing };
};

export default useDummyTabsContext;
