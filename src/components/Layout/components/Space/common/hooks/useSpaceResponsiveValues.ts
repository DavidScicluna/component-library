import type { Required } from 'utility-types';

import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing, Undefinable } from '@common/types';

import { __DEFAULT_SPACE_HEIGHT__, __DEFAULT_SPACE_WIDTH__ } from '../constants';
import type { SpaceNonResponsiveValueProps, SpaceResponsiveValueProps } from '../types';

type UseSpaceResponsiveValuesProps = Partial<SpaceResponsiveValueProps>;
type UseSpaceResponsiveValuesReturn = Required<SpaceNonResponsiveValueProps, 'width' | 'height'>;

const useSpaceResponsiveValues = (props: UseSpaceResponsiveValuesProps): UseSpaceResponsiveValuesReturn => {
	const { width: widthProp, height: heightProp } = props;

	const width = useGetResponsiveValue<Undefinable<ThemeSpacing>>(widthProp);
	const height = useGetResponsiveValue<Undefinable<ThemeSpacing>>(heightProp);

	return { width: width || __DEFAULT_SPACE_WIDTH__, height: height || __DEFAULT_SPACE_HEIGHT__ };
};

export default useSpaceResponsiveValues;
