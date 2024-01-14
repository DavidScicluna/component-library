import { useMemo } from 'react';

import { getFontSizeHeight } from '@common/utils';

import { __DEFAULT_DUMMY_BADGE_LINE_HEIGHT_SIZE__, __DEFAULT_DUMMY_BADGE_SIZE__ } from '../constants';
import type { DummyBadgeProps } from '../types';

import useDummyBadgeResponsiveValues from './useDummyBadgeResponsiveValues';

type UseDummyBadgeFontSizeProps = Pick<DummyBadgeProps, 'size'>;

const useDummyBadgeFontSize = (props: UseDummyBadgeFontSizeProps): number => {
	const { size: sizeProp = __DEFAULT_DUMMY_BADGE_SIZE__ } = props;

	const { size } = useDummyBadgeResponsiveValues({ size: sizeProp });

	const fontSize = useMemo<number>(() => {
		return getFontSizeHeight(size, __DEFAULT_DUMMY_BADGE_LINE_HEIGHT_SIZE__);
	}, [size]);

	return fontSize;
};

export default useDummyBadgeFontSize;
