import type { ElementType } from 'react';
import { useMemo } from 'react';

import type { PolymorphicDefaultElement } from '@common/types';
import { getFontSizeHeight } from '@common/utils';

import { __DEFAULT_DUMMY_BADGE_LINE_HEIGHT_SIZE__, __DEFAULT_DUMMY_BADGE_SIZE__ } from '../constants';
import type { DummyBadgeProps } from '../types';

import useDummyBadgeResponsiveValues from './useDummyBadgeResponsiveValues';

type UseDummyBadgeFontSizeProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	DummyBadgeProps<Element>,
	'size'
>;

const useDummyBadgeFontSize = <Element extends ElementType = PolymorphicDefaultElement>(
	props: UseDummyBadgeFontSizeProps<Element>
): number => {
	const { size: sizeProp = __DEFAULT_DUMMY_BADGE_SIZE__ } = props;

	const { size } = useDummyBadgeResponsiveValues({ size: sizeProp });

	const fontSize = useMemo<number>(() => {
		return getFontSizeHeight(size, __DEFAULT_DUMMY_BADGE_LINE_HEIGHT_SIZE__);
	}, [size]);

	return fontSize;
};

export default useDummyBadgeFontSize;
