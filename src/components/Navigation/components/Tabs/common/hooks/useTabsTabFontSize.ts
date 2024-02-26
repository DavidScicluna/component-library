import { useMemo } from 'react';

import { getFontSizeHeight } from '@common/utils';

import { DEFAULT_TABS_SIZE, DEFAULT_TABS_TAB_LINE_HEIGHT_SIZE } from '../constants';
import type { TabsElement, TabsProps } from '../types';

import useTabsResponsiveValues from './useTabsResponsiveValues';

type UseTabsTabFontSizeProps<Element extends TabsElement> = Pick<TabsProps<Element>, 'size'>;

const useTabsTabFontSize = <Element extends TabsElement>(props: UseTabsTabFontSizeProps<Element>): number => {
	const { size: sizeProp = DEFAULT_TABS_SIZE } = props;

	const { size } = useTabsResponsiveValues<Element>({ size: sizeProp });

	const fontSize = useMemo<number>(() => {
		return getFontSizeHeight(size, DEFAULT_TABS_TAB_LINE_HEIGHT_SIZE);
	}, [size]);

	return fontSize;
};

export default useTabsTabFontSize;
