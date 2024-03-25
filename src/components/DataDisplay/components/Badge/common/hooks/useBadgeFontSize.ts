import { useMemo } from 'react';

import { getFontSizeHeight } from '@common/utils';

import { DEFAULT_BADGE_LINE_HEIGHT_SIZE, DEFAULT_BADGE_SIZE } from '../constants';
import type { BadgeUniqueProps } from '../types';

import useBadgeResponsiveValues from './useBadgeResponsiveValues';

type UseBadgeFontSizeProps = Pick<BadgeUniqueProps, 'size'>;

const useBadgeFontSize = (props: UseBadgeFontSizeProps): number => {
	const { size: sizeProp = DEFAULT_BADGE_SIZE } = props;

	const { size } = useBadgeResponsiveValues({ size: sizeProp });

	const fontSize = useMemo<number>(() => {
		return getFontSizeHeight(size, DEFAULT_BADGE_LINE_HEIGHT_SIZE);
	}, [size]);

	return fontSize;
};

export default useBadgeFontSize;
