import { useMemo } from 'react';

import { getFontSizeHeight } from '@common/utils';

import { __DEFAULT_TABS_SIZE__, __DEFAULT_TABS_TAB_LINE_HEIGHT_SIZE__ } from '../constants';
import type { TabsProps } from '../types';

import useTabsResponsiveValues from './useTabsResponsiveValues';

type UseTabsTabFontSizeProps = Pick<TabsProps, 'size'>;

const useTabsTabFontSize = (props: UseTabsTabFontSizeProps): number => {
	const { size: sizeProp = __DEFAULT_TABS_SIZE__ } = props;

	const { size } = useTabsResponsiveValues({ size: sizeProp });

	const fontSize = useMemo<number>(() => {
		return getFontSizeHeight(size, __DEFAULT_TABS_TAB_LINE_HEIGHT_SIZE__);
	}, [size]);

	return fontSize;
};

export default useTabsTabFontSize;
