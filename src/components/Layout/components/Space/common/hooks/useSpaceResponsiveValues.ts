import type { DeepRequired } from 'utility-types';

import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicDefaultElement, PolymorphicElementType, ThemeSpacing } from '@common/types';

import { __DEFAULT_SPACE_HEIGHT__, __DEFAULT_SPACE_WIDTH__ } from '../constants';
import type { SpaceOtherProps, SpaceProps } from '../types';

type PickedSpaceProps = 'width' | 'height';

type UseSpaceResponsiveValuesProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Partial<
	Pick<SpaceProps<Element>, PickedSpaceProps>
>;
type UseSpaceResponsiveValuesReturn = DeepRequired<Pick<SpaceOtherProps, PickedSpaceProps>>;

const useSpaceResponsiveValues = <Element extends PolymorphicElementType = PolymorphicDefaultElement>(
	props: UseSpaceResponsiveValuesProps<Element>
): UseSpaceResponsiveValuesReturn => {
	const { width: widthProp = __DEFAULT_SPACE_WIDTH__, height: heightProp = __DEFAULT_SPACE_HEIGHT__ } = props;

	const width = useGetResponsiveValue<ThemeSpacing>(widthProp);
	const height = useGetResponsiveValue<ThemeSpacing>(heightProp);

	return { width, height };
};

export default useSpaceResponsiveValues;
