import { __DEFAULT_RADIUS__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type {
	BrightnessClass,
	ContrastClass,
	GrayscaleClass,
	HueRotateClass,
	InvertClass,
	ObjectFitClass,
	ObjectPositionClass,
	SaturateClass,
	SepiaClass,
	ThemeBlurClass,
	ThemeRadius
} from '@common/types';

import {
	__DEFAULT_IMAGE_BLUR__,
	__DEFAULT_IMAGE_BORING__,
	__DEFAULT_IMAGE_BRIGHTNESS__,
	__DEFAULT_IMAGE_CONTRAST__,
	__DEFAULT_IMAGE_FILTERS__,
	__DEFAULT_IMAGE_FIT__,
	__DEFAULT_IMAGE_FULL__,
	__DEFAULT_IMAGE_GRAYSCALE__,
	__DEFAULT_IMAGE_HUE_ROTATE__,
	__DEFAULT_IMAGE_INVERT__,
	__DEFAULT_IMAGE_OPTIONS__,
	__DEFAULT_IMAGE_POSITION__,
	__DEFAULT_IMAGE_SATURATE__,
	__DEFAULT_IMAGE_SEPIA__,
	__DEFAULT_IMAGE_THUMBNAIL__
} from '../constants';
import type { ImageFilters, ImageMode, ImageOptions, ImageProps } from '../types';

type UseImageResponsiveValuesProps = Partial<
	Pick<ImageProps, 'boring' | 'thumbnail' | 'full' | 'filters' | 'options' | 'radius'>
>;

const useImageResponsiveValues = (props: UseImageResponsiveValuesProps) => {
	const {
		boring: boringProp = __DEFAULT_IMAGE_BORING__,
		thumbnail: thumbnailProp = __DEFAULT_IMAGE_THUMBNAIL__,
		full: fullProp = __DEFAULT_IMAGE_FULL__,
		filters: filtersProp = __DEFAULT_IMAGE_FILTERS__,
		options: optionsProp = __DEFAULT_IMAGE_OPTIONS__,
		radius: radiusProp = __DEFAULT_RADIUS__
	} = props;

	const boring = useGetResponsiveValue<ImageMode>(boringProp);
	const thumbnail = useGetResponsiveValue<ImageMode>(thumbnailProp);
	const full = useGetResponsiveValue<ImageMode>(fullProp);

	const filters = useGetResponsiveValue<ImageFilters>(filtersProp);
	const options = useGetResponsiveValue<ImageOptions>(optionsProp);
	const radius = useGetResponsiveValue<ThemeRadius>(radiusProp);

	const {
		blur: blurProp = __DEFAULT_IMAGE_BLUR__,
		brightness: brightnessProp = __DEFAULT_IMAGE_BRIGHTNESS__,
		contrast: contrastProp = __DEFAULT_IMAGE_CONTRAST__,
		grayscale: grayscaleProp = __DEFAULT_IMAGE_GRAYSCALE__,
		hueRotate: hueRotateProp = __DEFAULT_IMAGE_HUE_ROTATE__,
		invert: invertProp = __DEFAULT_IMAGE_INVERT__,
		saturate: saturateProp = __DEFAULT_IMAGE_SATURATE__,
		sepia: sepiaProp = __DEFAULT_IMAGE_SEPIA__
	} = filters;
	const { fit: fitProp = __DEFAULT_IMAGE_FIT__, position: positionProp = __DEFAULT_IMAGE_POSITION__ } = options;

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
