import { useMemo } from 'react';

import { getFontSizeHeight } from '@common/utils';

import { DEFAULT_DUMMY_BADGE_LINE_HEIGHT_SIZE, DEFAULT_DUMMY_BADGE_SIZE } from '../constants';
import type { DummyBadgeElement, DummyBadgeProps } from '../types';

import useDummyBadgeResponsiveValues from './useDummyBadgeResponsiveValues';

type UseDummyBadgeFontSizeProps<Element extends DummyBadgeElement> = Pick<DummyBadgeProps<Element>, 'size'>;

const useDummyBadgeFontSize = <Element extends DummyBadgeElement>(
	props: UseDummyBadgeFontSizeProps<Element>
): number => {
	const { size: sizeProp = DEFAULT_DUMMY_BADGE_SIZE } = props;

	const { size } = useDummyBadgeResponsiveValues<Element>({ size: sizeProp });

	const fontSize = useMemo<number>(() => {
		return getFontSizeHeight(size, DEFAULT_DUMMY_BADGE_LINE_HEIGHT_SIZE);
	}, [size]);

	return fontSize;
};

export default useDummyBadgeFontSize;
