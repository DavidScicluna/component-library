import { useMemo } from 'react';

import { getFontSizeHeight } from '@common/utils';

import { __DEFAULT_DUMMY_TABS_SIZE__, __DEFAULT_DUMMY_TABS_TAB_LINE_HEIGHT_SIZE__ } from '../constants';
import type { DummyTabsProps } from '../types';

import useDummyTabsResponsiveValues from './useDummyTabsResponsiveValues';

type UseDummyTabsDummyTabFontSizeProps = Pick<DummyTabsProps, 'size'>;

const useDummyTabsTabFontSize = (props: UseDummyTabsDummyTabFontSizeProps): number => {
	const { size: sizeProp = __DEFAULT_DUMMY_TABS_SIZE__ } = props;

	const { size } = useDummyTabsResponsiveValues({ size: sizeProp });

	const fontSize = useMemo<number>(() => {
		return getFontSizeHeight(size, __DEFAULT_DUMMY_TABS_TAB_LINE_HEIGHT_SIZE__);
	}, [size]);

	return fontSize;
};

export default useDummyTabsTabFontSize;
