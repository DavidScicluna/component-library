import type { ElementType } from 'react';
import { useMemo } from 'react';

import type { PolymorphicDefaultElement } from '@common/types';
import { getFontSizeHeight } from '@common/utils';

import type { IconProps } from '@components/DataDisplay';

import { __DEFAULT_RATING_SIZE__ } from '../constants';
import type { RatingProps } from '../types';

import { useRatingResponsiveValues } from '.';

type RatingIconSize = Pick<IconProps, 'w' | 'h' | 'size'>;

type UseRatingIconSizeProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	RatingProps<Element>,
	'size'
>;
type UseRatingIconSizeReturn = RatingIconSize;

const useRatingIconSize = <Element extends ElementType = PolymorphicDefaultElement>(
	props: UseRatingIconSizeProps<Element>
): UseRatingIconSizeReturn => {
	const { size: sizeProp = __DEFAULT_RATING_SIZE__ } = props;

	const { size } = useRatingResponsiveValues<Element>({ size: sizeProp });

	const iconSize = useMemo<number>(() => getFontSizeHeight(size), [size]);

	return { w: `${iconSize}px`, h: `${iconSize}px`, size: `${iconSize}px` };
};

export default useRatingIconSize;