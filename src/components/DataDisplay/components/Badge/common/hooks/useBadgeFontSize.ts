import { useMemo } from 'react';

import { getFontSizeHeight } from '@common/utils';

import { DEFAULT_BADGE_LINE_HEIGHT_SIZE, DEFAULT_BADGE_SIZE } from '../constants';
import type { BadgeElement, BadgeProps } from '../types';

import useBadgeResponsiveValues from './useBadgeResponsiveValues';

type UseBadgeFontSizeProps<Element extends BadgeElement> = Pick<BadgeProps<Element>, 'size'>;

const useBadgeFontSize = <Element extends BadgeElement>(props: UseBadgeFontSizeProps<Element>): number => {
	const { size: sizeProp = DEFAULT_BADGE_SIZE } = props;

	const { size } = useBadgeResponsiveValues<Element>({ size: sizeProp });

	const fontSize = useMemo<number>(() => {
		return getFontSizeHeight(size, DEFAULT_BADGE_LINE_HEIGHT_SIZE);
	}, [size]);

	return fontSize;
};

export default useBadgeFontSize;
