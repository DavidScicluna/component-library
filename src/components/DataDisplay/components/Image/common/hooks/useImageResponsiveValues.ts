import { DEFAULT_RADIUS } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type {
	BrightnessClass,
	ContrastClass,
	GrayscaleClass,
	HueRotateClass,
	InvertClass,
	ObjectFitClass,
	ObjectPositionClass,
	PolymorphicElementType,
	SaturateClass,
	SepiaClass,
	ThemeBlurClass,
	ThemeRadius
} from '@common/types';

import {
	DEFAULT_IMAGE_BLUR,
	DEFAULT_IMAGE_BORING,
	DEFAULT_IMAGE_BRIGHTNESS,
	DEFAULT_IMAGE_CONTRAST,
	DEFAULT_IMAGE_FILTERS,
	DEFAULT_IMAGE_FIT,
	DEFAULT_IMAGE_FULL,
	DEFAULT_IMAGE_GRAYSCALE,
	DEFAULT_IMAGE_HUE_ROTATE,
	DEFAULT_IMAGE_INVERT,
	DEFAULT_IMAGE_OPTIONS,
	DEFAULT_IMAGE_POSITION,
	DEFAULT_IMAGE_SATURATE,
	DEFAULT_IMAGE_SEPIA,
	DEFAULT_IMAGE_THUMBNAIL
} from '../constants';
import type { ImageFilters, ImageMode, ImageOptions, ImageProps } from '../types';

type UseImageResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<ImageProps<Element>, 'boring' | 'thumbnail' | 'full' | 'filters' | 'options' | 'radius'>
>;

const useImageResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseImageResponsiveValuesProps<Element>
) => {
	const {
		boring: boringProp = DEFAULT_IMAGE_BORING,
		thumbnail: thumbnailProp = DEFAULT_IMAGE_THUMBNAIL,
		full: fullProp = DEFAULT_IMAGE_FULL,
		filters: filtersProp = DEFAULT_IMAGE_FILTERS,
		options: optionsProp = DEFAULT_IMAGE_OPTIONS,
		radius: radiusProp = DEFAULT_RADIUS
	} = props;

	const boring = useGetResponsiveValue<ImageMode>(boringProp);
	const thumbnail = useGetResponsiveValue<ImageMode>(thumbnailProp);
	const full = useGetResponsiveValue<ImageMode>(fullProp);

	const filters = useGetResponsiveValue<ImageFilters>(filtersProp);
	const options = useGetResponsiveValue<ImageOptions>(optionsProp);
	const radius = useGetResponsiveValue<ThemeRadius>(radiusProp);

	const {
		blur: blurProp = DEFAULT_IMAGE_BLUR,
		brightness: brightnessProp = DEFAULT_IMAGE_BRIGHTNESS,
		contrast: contrastProp = DEFAULT_IMAGE_CONTRAST,
		grayscale: grayscaleProp = DEFAULT_IMAGE_GRAYSCALE,
		hueRotate: hueRotateProp = DEFAULT_IMAGE_HUE_ROTATE,
		invert: invertProp = DEFAULT_IMAGE_INVERT,
		saturate: saturateProp = DEFAULT_IMAGE_SATURATE,
		sepia: sepiaProp = DEFAULT_IMAGE_SEPIA
	} = filters;
	const { fit: fitProp = DEFAULT_IMAGE_FIT, position: positionProp = DEFAULT_IMAGE_POSITION } = options;

	const blur = useGetResponsiveValue<ThemeBlurClass>(blurProp);
	const brightness = useGetResponsiveValue<BrightnessClass>(brightnessProp);
	const contrast = useGetResponsiveValue<ContrastClass>(contrastProp);
	const grayscale = useGetResponsiveValue<GrayscaleClass>(grayscaleProp);
	const hueRotate = useGetResponsiveValue<HueRotateClass>(hueRotateProp);
	const invert = useGetResponsiveValue<InvertClass>(invertProp);
	const saturate = useGetResponsiveValue<SaturateClass>(saturateProp);
	const sepia = useGetResponsiveValue<SepiaClass>(sepiaProp);

	const fit = useGetResponsiveValue<ObjectFitClass>(fitProp);
	const position = useGetResponsiveValue<ObjectPositionClass>(positionProp);

	return {
		boring,
		thumbnail,
		full,
		filters: { blur, brightness, contrast, grayscale, hueRotate, invert, saturate, sepia },
		options: { fit, position },
		radius
	};
};

export default useImageResponsiveValues;
