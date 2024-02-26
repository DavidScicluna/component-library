import { useMemo } from 'react';

import type { PolymorphicElementType } from '@common/types';
import { getFontSizeHeight } from '@common/utils';

import type { IconDefaultElement, IconProps } from '@components/DataDisplay';

import { DEFAULT_RATING_SIZE } from '../constants';
import type { RatingProps } from '../types';

import { useRatingResponsiveValues } from '.';

type RatingIconSize = Pick<IconProps<IconDefaultElement>, 'w' | 'h' | 'size'>;

type UseRatingIconSizeProps<Element extends PolymorphicElementType> = Pick<RatingProps<Element>, 'size'>;
type UseRatingIconSizeReturn = RatingIconSize;

const useRatingIconSize = <Element extends PolymorphicElementType>(
	props: UseRatingIconSizeProps<Element>
): UseRatingIconSizeReturn => {
	const { size: sizeProp = DEFAULT_RATING_SIZE } = props;

	const { size } = useRatingResponsiveValues<Element>({ size: sizeProp });

	const iconSize = useMemo<number>(() => getFontSizeHeight(size), [size]);

	return { w: `${iconSize}px`, h: `${iconSize}px`, size: `${iconSize}px` };
};

export default useRatingIconSize;
