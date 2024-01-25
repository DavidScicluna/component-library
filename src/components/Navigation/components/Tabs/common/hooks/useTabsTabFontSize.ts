import { useMemo } from 'react';

import { getFontSizeHeight } from '@common/utils';

import { __DEFAULT_TABS_SIZE__, __DEFAULT_TABS_TAB_LINE_HEIGHT_SIZE__ } from '../constants';
import type { TabsElement, TabsProps } from '../types';

import useTabsResponsiveValues from './useTabsResponsiveValues';

type UseTabsTabFontSizeProps<Element extends TabsElement> = Pick<TabsProps<Element>, 'size'>;

const useTabsTabFontSize = <Element extends TabsElement>(props: UseTabsTabFontSizeProps<Element>): number => {
	const { size: sizeProp = __DEFAULT_TABS_SIZE__ } = props;

	const { size } = useTabsResponsiveValues<Element>({ size: sizeProp });

	const fontSize = useMemo<number>(() => {
		return getFontSizeHeight(size, __DEFAULT_TABS_TAB_LINE_HEIGHT_SIZE__);
	}, [size]);

	return fontSize;
};

export default useTabsTabFontSize;
