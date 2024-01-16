import type { DeepRequired } from 'utility-types';

import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicDefaultElement, PolymorphicElementType, ThemeAspectRatio } from '@common/types';

import { __DEFAULT_ASPECT_RATIO_RATIO__ } from '../constants';
import type { AspectRatioOtherProps, AspectRatioProps } from '../types';

type PickedAspectRatioProps = 'ratio';

type UseAspectRatioResponsiveValuesProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Partial<
	Pick<AspectRatioProps<Element>, PickedAspectRatioProps>
>;
type UseCenterResponsiveValuesReturn = DeepRequired<Pick<AspectRatioOtherProps, PickedAspectRatioProps>>;

const useAspectRatioResponsiveValues = <Element extends PolymorphicElementType = PolymorphicDefaultElement>(
	props: UseAspectRatioResponsiveValuesProps<Element>
): UseCenterResponsiveValuesReturn => {
	const { ratio: ratioProp = __DEFAULT_ASPECT_RATIO_RATIO__ } = props;

	const ratio = useGetResponsiveValue<ThemeAspectRatio>(ratioProp);

	return { ratio };
};

export default useAspectRatioResponsiveValues;
