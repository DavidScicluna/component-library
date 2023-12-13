import { __DEFAULT_RADIUS__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type {
	BackgroundAttachmentClass,
	BackgroundBlendModeClass,
	BackgroundClipClass,
	BackgroundOriginClass,
	BackgroundPositionClass,
	BackgroundRepeatClass,
	BackgroundSizeClass,
	BrightnessClass,
	ContrastClass,
	GrayscaleClass,
	HueRotateClass,
	InvertClass,
	SaturateClass,
	SepiaClass,
	ThemeBlurClass,
	ThemeRadius
} from '@common/types';

import {
	__DEFAULT_BACKGROUND_IMAGE_ATTACHMENT__,
	__DEFAULT_BACKGROUND_IMAGE_BLEND_MODE__,
	__DEFAULT_BACKGROUND_IMAGE_BLUR__,
	__DEFAULT_BACKGROUND_IMAGE_BRIGHTNESS__,
	__DEFAULT_BACKGROUND_IMAGE_CLIP__,
	__DEFAULT_BACKGROUND_IMAGE_CONTRAST__,
	__DEFAULT_BACKGROUND_IMAGE_FILTERS__,
	__DEFAULT_BACKGROUND_IMAGE_GRAYSCALE__,
	__DEFAULT_BACKGROUND_IMAGE_HUE_ROTATE__,
	__DEFAULT_BACKGROUND_IMAGE_INVERT__,
	__DEFAULT_BACKGROUND_IMAGE_OPTIONS__,
	__DEFAULT_BACKGROUND_IMAGE_ORIGIN__,
	__DEFAULT_BACKGROUND_IMAGE_POSITION__,
	__DEFAULT_BACKGROUND_IMAGE_REPEAT__,
	__DEFAULT_BACKGROUND_IMAGE_SATURATE__,
	__DEFAULT_BACKGROUND_IMAGE_SEPIA__,
	__DEFAULT_BACKGROUND_IMAGE_SIZE__,
	__DEFAULT_BACKGROUND_IMAGE_SRC__
} from '../constants';
import type { BackgroundImageFilters, BackgroundImageOptions, BackgroundImageProps } from '../types';

type UseBackgroundImageResponsiveValuesProps = Partial<
	Pick<BackgroundImageProps, 'filters' | 'options' | 'radius' | 'src'>
>;

const useBackgroundImageResponsiveValues = (props: UseBackgroundImageResponsiveValuesProps) => {
	const {
		filters: filtersProp = __DEFAULT_BACKGROUND_IMAGE_FILTERS__,
		options: optionsProp = __DEFAULT_BACKGROUND_IMAGE_OPTIONS__,
		radius: radiusProp = __DEFAULT_RADIUS__,
		src: srcProp = __DEFAULT_BACKGROUND_IMAGE_SRC__
	} = props;

	const filters = useGetResponsiveValue<BackgroundImageFilters>(filtersProp);
	const options = useGetResponsiveValue<BackgroundImageOptions>(optionsProp);
	const radius = useGetResponsiveValue<ThemeRadius>(radiusProp);
	const src = useGetResponsiveValue<string>(srcProp);

	const {
		blur: blurProp = __DEFAULT_BACKGROUND_IMAGE_BLUR__,
		brightness: brightnessProp = __DEFAULT_BACKGROUND_IMAGE_BRIGHTNESS__,
		contrast: contrastProp = __DEFAULT_BACKGROUND_IMAGE_CONTRAST__,
		grayscale: grayscaleProp = __DEFAULT_BACKGROUND_IMAGE_GRAYSCALE__,
		hueRotate: hueRotateProp = __DEFAULT_BACKGROUND_IMAGE_HUE_ROTATE__,
		invert: invertProp = __DEFAULT_BACKGROUND_IMAGE_INVERT__,
		saturate: saturateProp = __DEFAULT_BACKGROUND_IMAGE_SATURATE__,
		sepia: sepiaProp = __DEFAULT_BACKGROUND_IMAGE_SEPIA__
	} = filters;
	const {
		attachment: attachmentProp = __DEFAULT_BACKGROUND_IMAGE_ATTACHMENT__,
		blendMode: blendModeProp = __DEFAULT_BACKGROUND_IMAGE_BLEND_MODE__,
		clip: clipProp = __DEFAULT_BACKGROUND_IMAGE_CLIP__,
		origin: originProp = __DEFAULT_BACKGROUND_IMAGE_ORIGIN__,
		position: positionProp = __DEFAULT_BACKGROUND_IMAGE_POSITION__,
		repeat: repeatProp = __DEFAULT_BACKGROUND_IMAGE_REPEAT__,
		size: sizeProp = __DEFAULT_BACKGROUND_IMAGE_SIZE__
	} = options;

	const blur = useGetResponsiveValue<ThemeBlurClass>(blurProp);
	const brightness = useGetResponsiveValue<BrightnessClass>(brightnessProp);
	const contrast = useGetResponsiveValue<ContrastClass>(contrastProp);
	const grayscale = useGetResponsiveValue<GrayscaleClass>(grayscaleProp);
	const hueRotate = useGetResponsiveValue<HueRotateClass>(hueRotateProp);
	const invert = useGetResponsiveValue<InvertClass>(invertProp);
	const saturate = useGetResponsiveValue<SaturateClass>(saturateProp);
	const sepia = useGetResponsiveValue<SepiaClass>(sepiaProp);

	const attachment = useGetResponsiveValue<BackgroundAttachmentClass>(attachmentProp);
	const blendMode = useGetResponsiveValue<BackgroundBlendModeClass>(blendModeProp);
	const clip = useGetResponsiveValue<BackgroundClipClass>(clipProp);
	const origin = useGetResponsiveValue<BackgroundOriginClass>(originProp);
	const position = useGetResponsiveValue<BackgroundPositionClass>(positionProp);
	const repeat = useGetResponsiveValue<BackgroundRepeatClass>(repeatProp);
	const size = useGetResponsiveValue<BackgroundSizeClass>(sizeProp);

	return {
		filters: { blur, brightness, contrast, grayscale, hueRotate, invert, saturate, sepia },
		options: { attachment, blendMode, clip, origin, position, repeat, size },
		radius,
		src
	};
};

export default useBackgroundImageResponsiveValues;
