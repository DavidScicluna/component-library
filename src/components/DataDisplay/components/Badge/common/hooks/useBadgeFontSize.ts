import { useMemo } from 'react';

import { getFontSizeHeight } from '@common/utils';

import { __DEFAULT_BADGE_LINE_HEIGHT_SIZE__, __DEFAULT_BADGE_SIZE__ } from '../constants';
import type { BadgeProps } from '../types';

import useBadgeResponsiveValues from './useBadgeResponsiveValues';

type UseBadgeFontSizeProps = Pick<BadgeProps, 'size'>;

const useBadgeFontSize = (props: UseBadgeFontSizeProps): number => {
	const { size: sizeProp = __DEFAULT_BADGE_SIZE__ } = props;

	const { size } = useBadgeResponsiveValues({ size: sizeProp });

	const fontSize = useMemo<number>(() => {
		return getFontSizeHeight(size, __DEFAULT_BADGE_LINE_HEIGHT_SIZE__);
	}, [size]);

	return fontSize;
};

export default useBadgeFontSize;
