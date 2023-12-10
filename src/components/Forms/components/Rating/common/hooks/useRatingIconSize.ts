import { useMemo } from 'react';

import { getFontSizeHeight } from '@common/utils';

import type { IconProps } from '@components/DataDisplay';

import { __DEFAULT_RATING_SIZE__ } from '../constants';
import type { RatingProps } from '../types';

import { useRatingResponsiveValues } from '.';

type RatingIconSize = Pick<IconProps, 'w' | 'h' | 'size'>;

type UseRatingIconSizeProps = Pick<RatingProps, 'size'>;
type UseRatingIconSizeReturn = RatingIconSize;

const useRatingIconSize = (props: UseRatingIconSizeProps): UseRatingIconSizeReturn => {
	const { size: sizeProp = __DEFAULT_RATING_SIZE__ } = props;

	const { size } = useRatingResponsiveValues({ size: sizeProp });

	const iconSize = useMemo<number>(() => getFontSizeHeight(size), [size]);

	return { w: `${iconSize}px`, h: `${iconSize}px`, size: `${iconSize}px` };
};

export default useRatingIconSize;
