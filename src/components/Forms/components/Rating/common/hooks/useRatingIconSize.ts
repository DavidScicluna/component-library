import { useMemo } from 'react';

import { getFontSizeHeight } from '@common/utils';

import type { IconDefaultElement, IconProps } from '@components/DataDisplay';

import { DEFAULT_RATING_SIZE } from '../constants';
import type { RatingUniqueProps } from '../types';

import { useRatingResponsiveValues } from '.';

type RatingIconSize = Pick<IconProps<IconDefaultElement>, 'w' | 'h' | 'size'>;

type UseRatingIconSizeProps = Pick<RatingUniqueProps, 'size'>;
type UseRatingIconSizeReturn = RatingIconSize;

const useRatingIconSize = (props: UseRatingIconSizeProps): UseRatingIconSizeReturn => {
	const { size: sizeProp = DEFAULT_RATING_SIZE } = props;

	const { size } = useRatingResponsiveValues({ size: sizeProp });

	const iconSize = useMemo<number>(() => getFontSizeHeight(size), [size]);

	return { w: `${iconSize}px`, h: `${iconSize}px`, size: `${iconSize}px` };
};

export default useRatingIconSize;
