import { DEFAULT_RADIUS } from '@common/constants';
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
	PolymorphicElementType,
	SaturateClass,
	SepiaClass,
	ThemeBlurClass,
	ThemeRadius
} from '@common/types';

import {
	DEFAULT_BACKGROUND_IMAGE_ATTACHMENT,
	DEFAULT_BACKGROUND_IMAGE_BLEND_MODE,
	DEFAULT_BACKGROUND_IMAGE_BLUR,
	DEFAULT_BACKGROUND_IMAGE_BRIGHTNESS,
	DEFAULT_BACKGROUND_IMAGE_CLIP,
	DEFAULT_BACKGROUND_IMAGE_CONTRAST,
	DEFAULT_BACKGROUND_IMAGE_FILTERS,
	DEFAULT_BACKGROUND_IMAGE_GRAYSCALE,
	DEFAULT_BACKGROUND_IMAGE_HUE_ROTATE,
	DEFAULT_BACKGROUND_IMAGE_INVERT,
	DEFAULT_BACKGROUND_IMAGE_OPTIONS,
	DEFAULT_BACKGROUND_IMAGE_ORIGIN,
	DEFAULT_BACKGROUND_IMAGE_POSITION,
	DEFAULT_BACKGROUND_IMAGE_REPEAT,
	DEFAULT_BACKGROUND_IMAGE_SATURATE,
	DEFAULT_BACKGROUND_IMAGE_SEPIA,
	DEFAULT_BACKGROUND_IMAGE_SIZE,
	DEFAULT_BACKGROUND_IMAGE_SRC
} from '../constants';
import type { BackgroundImageFilters, BackgroundImageOptions, BackgroundImageProps } from '../types';

type UseBackgroundImageResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<BackgroundImageProps<Element>, 'filters' | 'options' | 'radius' | 'src'>
>;

const useBackgroundImageResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseBackgroundImageResponsiveValuesProps<Element>
) => {
	const {
		filters: filtersProp = DEFAULT_BACKGROUND_IMAGE_FILTERS,
		options: optionsProp = DEFAULT_BACKGROUND_IMAGE_OPTIONS,
		radius: radiusProp = DEFAULT_RADIUS,
		src: srcProp = DEFAULT_BACKGROUND_IMAGE_SRC
	} = props;

	const filters = useGetResponsiveValue<BackgroundImageFilters>(filtersProp);
	const options = useGetResponsiveValue<BackgroundImageOptions>(optionsProp);
	const radius = useGetResponsiveValue<ThemeRadius>(radiusProp);
	const src = useGetResponsiveValue<string>(srcProp);

	const {
		blur: blurProp = DEFAULT_BACKGROUND_IMAGE_BLUR,
		brightness: brightnessProp = DEFAULT_BACKGROUND_IMAGE_BRIGHTNESS,
		contrast: contrastProp = DEFAULT_BACKGROUND_IMAGE_CONTRAST,
		grayscale: grayscaleProp = DEFAULT_BACKGROUND_IMAGE_GRAYSCALE,
		hueRotate: hueRotateProp = DEFAULT_BACKGROUND_IMAGE_HUE_ROTATE,
		invert: invertProp = DEFAULT_BACKGROUND_IMAGE_INVERT,
		saturate: saturateProp = DEFAULT_BACKGROUND_IMAGE_SATURATE,
		sepia: sepiaProp = DEFAULT_BACKGROUND_IMAGE_SEPIA
	} = filters;
	const {
		attachment: attachmentProp = DEFAULT_BACKGROUND_IMAGE_ATTACHMENT,
		blendMode: blendModeProp = DEFAULT_BACKGROUND_IMAGE_BLEND_MODE,
		clip: clipProp = DEFAULT_BACKGROUND_IMAGE_CLIP,
		origin: originProp = DEFAULT_BACKGROUND_IMAGE_ORIGIN,
		position: positionProp = DEFAULT_BACKGROUND_IMAGE_POSITION,
		repeat: repeatProp = DEFAULT_BACKGROUND_IMAGE_REPEAT,
		size: sizeProp = DEFAULT_BACKGROUND_IMAGE_SIZE
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
