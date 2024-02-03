import { useMemo } from 'react';

import { getFontSizeHeight } from '@common/utils';

import { __DEFAULT_DUMMY_BADGE_LINE_HEIGHT_SIZE__, __DEFAULT_DUMMY_BADGE_SIZE__ } from '../constants';
import type { DummyBadgeElement, DummyBadgeProps } from '../types';

import useDummyBadgeResponsiveValues from './useDummyBadgeResponsiveValues';

type UseDummyBadgeFontSizeProps<Element extends DummyBadgeElement> = Pick<DummyBadgeProps<Element>, 'size'>;

const useDummyBadgeFontSize = <Element extends DummyBadgeElement>(
	props: UseDummyBadgeFontSizeProps<Element>
): number => {
	const { size: sizeProp = __DEFAULT_DUMMY_BADGE_SIZE__ } = props;

	const { size } = useDummyBadgeResponsiveValues<Element>({ size: sizeProp });

	const fontSize = useMemo<number>(() => {
		return getFontSizeHeight(size, __DEFAULT_DUMMY_BADGE_LINE_HEIGHT_SIZE__);
	}, [size]);

	return fontSize;
};

export default useDummyBadgeFontSize;
