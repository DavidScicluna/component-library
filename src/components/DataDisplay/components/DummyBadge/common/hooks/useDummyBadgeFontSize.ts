import type { ElementType } from 'react';
import { useMemo } from 'react';

import { useGetResponsiveValue } from '@common/hooks';
import { getFontSizeHeight } from '@common/utils';

import { __DEFAULT_DUMMY_BADGE_LINE_HEIGHT_SIZE__, __DEFAULT_DUMMY_BADGE_SIZE__ } from '../constants';
import type { DummyBadgeProps, DummyBadgeSize } from '../types';

type UseDummyBadgeFontSizeProps<Element extends ElementType> = Pick<DummyBadgeProps<Element>, 'size'>;

const useDummyBadgeFontSize = <Element extends ElementType>(props: UseDummyBadgeFontSizeProps<Element>): number => {
	const { size: s = __DEFAULT_DUMMY_BADGE_SIZE__ } = props;

	const size = useGetResponsiveValue<DummyBadgeSize>(s);

	const fontSize = useMemo<number>(() => {
		return getFontSizeHeight(size, __DEFAULT_DUMMY_BADGE_LINE_HEIGHT_SIZE__);
	}, [size]);

	return fontSize;
};

export default useDummyBadgeFontSize;
