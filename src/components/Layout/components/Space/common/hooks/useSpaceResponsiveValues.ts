import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing } from '@common/types';

import { __DEFAULT_SPACE_HEIGHT__, __DEFAULT_SPACE_WIDTH__ } from '../constants';
import type { SpaceProps } from '../types';

type UseSpaceResponsiveValuesProps = Partial<Pick<SpaceProps, 'width' | 'height'>>;

const useSpaceResponsiveValues = (props: UseSpaceResponsiveValuesProps) => {
	const { width: widthProp = __DEFAULT_SPACE_WIDTH__, height: heightProp = __DEFAULT_SPACE_HEIGHT__ } = props;

	const width = useGetResponsiveValue<ThemeSpacing>(widthProp);
	const height = useGetResponsiveValue<ThemeSpacing>(heightProp);

	return { width, height };
};

export default useSpaceResponsiveValues;
