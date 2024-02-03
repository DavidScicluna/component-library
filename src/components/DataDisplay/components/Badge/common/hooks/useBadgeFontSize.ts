import { useMemo } from 'react';

import { getFontSizeHeight } from '@common/utils';

import { __DEFAULT_BADGE_LINE_HEIGHT_SIZE__, __DEFAULT_BADGE_SIZE__ } from '../constants';
import type { BadgeElement, BadgeProps } from '../types';

import useBadgeResponsiveValues from './useBadgeResponsiveValues';

type UseBadgeFontSizeProps<Element extends BadgeElement> = Pick<BadgeProps<Element>, 'size'>;

const useBadgeFontSize = <Element extends BadgeElement>(props: UseBadgeFontSizeProps<Element>): number => {
	const { size: sizeProp = __DEFAULT_BADGE_SIZE__ } = props;

	const { size } = useBadgeResponsiveValues<Element>({ size: sizeProp });

	const fontSize = useMemo<number>(() => {
		return getFontSizeHeight(size, __DEFAULT_BADGE_LINE_HEIGHT_SIZE__);
	}, [size]);

	return fontSize;
};

export default useBadgeFontSize;
