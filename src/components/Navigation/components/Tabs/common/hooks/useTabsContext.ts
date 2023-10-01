import type { ElementType } from 'react';
import { useContext } from 'react';

import { __DEFAULT_METHOD__, __DEFAULT_SPACING__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing } from '@common/types';

import { TabsContext } from '../../Tabs';
import {
	__DEFAULT_TABS_ALIGN__,
	__DEFAULT_TABS_ID__,
	__DEFAULT_TABS_INDEX__,
	__DEFAULT_TABS_IS_DISABLED__,
	__DEFAULT_TABS_IS_FITTED__,
	__DEFAULT_TABS_ORIENTATION__,
	__DEFAULT_TABS_SIZE__
} from '../constants';
import type { TabsAlign, TabsContext as TabsContextType, TabsOrientation, TabsSize } from '../types';

const useTabsContext = <Element extends ElementType>() => {
	const {
		color,
		colorMode,
		align: a = __DEFAULT_TABS_ALIGN__,
		id = __DEFAULT_TABS_ID__,
		index: ind = __DEFAULT_TABS_INDEX__,
		isDisabled: disabled = __DEFAULT_TABS_IS_DISABLED__,
		isFitted: fitted = __DEFAULT_TABS_IS_FITTED__,
		onChange = __DEFAULT_METHOD__,
		orientation: o = __DEFAULT_TABS_ORIENTATION__,
		size: si = __DEFAULT_TABS_SIZE__,
		spacing: sp = __DEFAULT_SPACING__
	} = useContext<TabsContextType<Element>>(TabsContext);

	const align = useGetResponsiveValue<TabsAlign>(a);

	const index = useGetResponsiveValue<number>(ind);

	const isDisabled = useGetResponsiveValue<boolean>(disabled);
	const isFitted = useGetResponsiveValue<boolean>(fitted);

	const orientation = useGetResponsiveValue<TabsOrientation>(o);
	const size = useGetResponsiveValue<TabsSize>(si);
	const spacing = useGetResponsiveValue<ThemeSpacing>(sp);

	return { color, colorMode, align, id, index, isDisabled, isFitted, onChange, orientation, size, spacing };
};

export default useTabsContext;
