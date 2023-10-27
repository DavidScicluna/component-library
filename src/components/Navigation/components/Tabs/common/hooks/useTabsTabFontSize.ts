import type { ElementType } from 'react';
import { useMemo } from 'react';

import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types';
import { getFontSizeHeight } from '@common/utils';

import { __DEFAULT_TABS_SIZE__, __DEFAULT_TABS_TAB_LINE_HEIGHT_SIZE__ } from '../constants';
import type { TabsProps, TabsSize } from '../types';

type UseTabsTabFontSizeProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	TabsProps<Element>,
	'size'
>;

const useTabsTabFontSize = <Element extends ElementType = PolymorphicDefaultElement>(
	props: UseTabsTabFontSizeProps<Element>
): number => {
	const { size: s = __DEFAULT_TABS_SIZE__ } = props;

	const size = useGetResponsiveValue<TabsSize>(s);

	const fontSize = useMemo<number>(() => {
		return getFontSizeHeight(size, __DEFAULT_TABS_TAB_LINE_HEIGHT_SIZE__);
	}, [size]);

	return fontSize;
};

export default useTabsTabFontSize;
