import type { ElementType } from 'react';
import { useMemo } from 'react';

import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types';
import { getFontSizeHeight } from '@common/utils';

import { __DEFAULT_DUMMY_TABS_SIZE__, __DEFAULT_DUMMY_TABS_TAB_LINE_HEIGHT_SIZE__ } from '../constants';
import type { DummyTabsProps, DummyTabsSize } from '../types';

type UseDummyTabsDummyTabFontSizeProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	DummyTabsProps<Element>,
	'size'
>;

const useDummyTabsTabFontSize = <Element extends ElementType = PolymorphicDefaultElement>(
	props: UseDummyTabsDummyTabFontSizeProps<Element>
): number => {
	const { size: s = __DEFAULT_DUMMY_TABS_SIZE__ } = props;

	const size = useGetResponsiveValue<DummyTabsSize>(s);

	const fontSize = useMemo<number>(() => {
		return getFontSizeHeight(size, __DEFAULT_DUMMY_TABS_TAB_LINE_HEIGHT_SIZE__);
	}, [size]);

	return fontSize;
};

export default useDummyTabsTabFontSize;
