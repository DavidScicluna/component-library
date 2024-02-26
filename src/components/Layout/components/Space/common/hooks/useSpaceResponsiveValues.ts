import type { Required } from 'utility-types';

import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing, Undefinable } from '@common/types';

import { DEFAULT_SPACE_HEIGHT, DEFAULT_SPACE_WIDTH } from '../constants';
import type { SpaceNonResponsiveValueProps, SpaceResponsiveValueProps } from '../types';

type UseSpaceResponsiveValuesProps = Partial<SpaceResponsiveValueProps>;
type UseSpaceResponsiveValuesReturn = Required<SpaceNonResponsiveValueProps, 'width' | 'height'>;

const useSpaceResponsiveValues = (props: UseSpaceResponsiveValuesProps): UseSpaceResponsiveValuesReturn => {
	const { width: widthProp, height: heightProp } = props;

	const width = useGetResponsiveValue<Undefinable<ThemeSpacing>>(widthProp);
	const height = useGetResponsiveValue<Undefinable<ThemeSpacing>>(heightProp);

	return { width: width || DEFAULT_SPACE_WIDTH, height: height || DEFAULT_SPACE_HEIGHT };
};

export default useSpaceResponsiveValues;
