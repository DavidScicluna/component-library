import { useMemo } from 'react';

import { getFontSizeHeight } from '@common/utils';

import { DEFAULT_DUMMY_TABS_SIZE, DEFAULT_DUMMY_TABS_TAB_LINE_HEIGHT_SIZE } from '../constants';
import type { DummyTabsElement, DummyTabsProps } from '../types';

import useDummyTabsResponsiveValues from './useDummyTabsResponsiveValues';

type UseDummyTabsDummyTabFontSizeProps<Element extends DummyTabsElement> = Pick<DummyTabsProps<Element>, 'size'>;

const useDummyTabsTabFontSize = <Element extends DummyTabsElement>(
	props: UseDummyTabsDummyTabFontSizeProps<Element>
): number => {
	const { size: sizeProp = DEFAULT_DUMMY_TABS_SIZE } = props;

	const { size } = useDummyTabsResponsiveValues<Element>({ size: sizeProp });

	const fontSize = useMemo<number>(() => {
		return getFontSizeHeight(size, DEFAULT_DUMMY_TABS_TAB_LINE_HEIGHT_SIZE);
	}, [size]);

	return fontSize;
};

export default useDummyTabsTabFontSize;
