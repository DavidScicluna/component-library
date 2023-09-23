import type { ElementType } from 'react';
import { useMemo } from 'react';

import { useGetResponsiveValue } from '@common/hooks';
import { getFontSizeHeight } from '@common/utils';

import { __DEFAULT_BADGE_LINE_HEIGHT_SIZE__, __DEFAULT_BADGE_SIZE__ } from '../constants';
import type { BadgeProps, BadgeSize } from '../types';

type UseBadgeFontSizeProps<Element extends ElementType> = Pick<BadgeProps<Element>, 'size'>;

const useBadgeFontSize = <Element extends ElementType>(props: UseBadgeFontSizeProps<Element>): number => {
	const { size: s = __DEFAULT_BADGE_SIZE__ } = props;

	const size = useGetResponsiveValue<BadgeSize>(s);

	const fontSize = useMemo<number>(() => {
		return getFontSizeHeight(size, __DEFAULT_BADGE_LINE_HEIGHT_SIZE__);
	}, [size]);

	return fontSize;
};

export default useBadgeFontSize;
