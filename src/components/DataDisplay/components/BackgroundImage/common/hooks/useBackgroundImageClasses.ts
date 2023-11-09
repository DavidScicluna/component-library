import type { ElementType } from 'react';

import classes from '@common/classes';
import { __DEFAULT_RADIUS__ } from '@common/constants';
import { useGetClass } from '@common/hooks';
import type {
	BackgroundAttachmentClass,
	BackgroundBlendModeClass,
	BackgroundClipClass,
	BackgroundOriginClass,
	BackgroundPositionClass,
	BackgroundRepeatClass,
	BackgroundSizeClass,
	BrightnessClass,
	ClassName,
	ContrastClass,
	GrayscaleClass,
	HueRotateClass,
	InvertClass,
	PolymorphicDefaultElement,
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
	__DEFAULT_BACKGROUND_IMAGE_SIZE__
} from '../constants';
import type { BackgroundImageProps } from '../types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseBackgroundImageClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	BackgroundImageProps<Element>,
	'filters' | 'options' | 'radius'
>;
type UseBackgroundImageClassesReturn = Record<'container' | 'image', ClassName>;

const useBackgroundImageClasses = <Element extends ElementType = PolymorphicDefaultElement>(
	props: UseBackgroundImageClassesProps<Element>
): UseBackgroundImageClassesReturn => {
	const {
		filters = __DEFAULT_BACKGROUND_IMAGE_FILTERS__,
		options = __DEFAULT_BACKGROUND_IMAGE_OPTIONS__,
		radius = __DEFAULT_RADIUS__
	} = props;
	const {
		blur = __DEFAULT_BACKGROUND_IMAGE_BLUR__,
		brightness = __DEFAULT_BACKGROUND_IMAGE_BRIGHTNESS__,
		contrast = __DEFAULT_BACKGROUND_IMAGE_CONTRAST__,
		grayscale = __DEFAULT_BACKGROUND_IMAGE_GRAYSCALE__,
		hueRotate = __DEFAULT_BACKGROUND_IMAGE_HUE_ROTATE__,
		invert = __DEFAULT_BACKGROUND_IMAGE_INVERT__,
		saturate = __DEFAULT_BACKGROUND_IMAGE_SATURATE__,
		sepia = __DEFAULT_BACKGROUND_IMAGE_SEPIA__
	} = filters;
	const {
		attachment = __DEFAULT_BACKGROUND_IMAGE_ATTACHMENT__,
		blendMode = __DEFAULT_BACKGROUND_IMAGE_BLEND_MODE__,
		clip = __DEFAULT_BACKGROUND_IMAGE_CLIP__,
		origin = __DEFAULT_BACKGROUND_IMAGE_ORIGIN__,
		position = __DEFAULT_BACKGROUND_IMAGE_POSITION__,
		repeat = __DEFAULT_BACKGROUND_IMAGE_REPEAT__,
		size = __DEFAULT_BACKGROUND_IMAGE_SIZE__
	} = options;

	const radiusClassName = useGetClass<ThemeRadius>(radius, ['borders', 'border_radius']);

	const blurClassName = useGetClass<ThemeBlurClass>(blur, ['filters', 'blur']);
	const brightnessClassName = useGetClass<BrightnessClass>(brightness, ['filters', 'brightness']);
	const contrastClassName = useGetClass<ContrastClass>(contrast, ['filters', 'contrast']);
	const grayscaleClassName = useGetClass<GrayscaleClass>(grayscale, ['filters', 'grayscale']);
	const hueRotateClassName = useGetClass<HueRotateClass>(hueRotate, ['filters', 'hue_rotate']);
	const invertClassName = useGetClass<InvertClass>(invert, ['filters', 'invert']);
	const saturateClassName = useGetClass<SaturateClass>(saturate, ['filters', 'saturate']);
	const sepiaClassName = useGetClass<SepiaClass>(sepia, ['filters', 'sepia']);

	const attachmentClassName = useGetClass<BackgroundAttachmentClass>(attachment, [
		'backgrounds',
		'background_attachment'
	]);
	const blendModeClassName = useGetClass<BackgroundBlendModeClass>(blendMode, ['effects', 'background_blend_mode']);
	const clipClassName = useGetClass<BackgroundClipClass>(clip, ['backgrounds', 'background_clip']);
	const originClassName = useGetClass<BackgroundOriginClass>(origin, ['backgrounds', 'background_origin']);
	const positionClassName = useGetClass<BackgroundPositionClass>(position, ['backgrounds', 'background_position']);
	const repeatClassName = useGetClass<BackgroundRepeatClass>(repeat, ['backgrounds', 'background_repeat']);
	const sizeClassName = useGetClass<BackgroundSizeClass>(size, ['backgrounds', 'background_size']);

	return {
		container: classNames(classes.layout.overflow.hidden, radiusClassName),
		image: classNames(
			blurClassName,
			brightnessClassName,
			contrastClassName,
			grayscaleClassName,
			hueRotateClassName,
			invertClassName,
			saturateClassName,
			sepiaClassName,
			attachmentClassName,
			blendModeClassName,
			clipClassName,
			originClassName,
			positionClassName,
			radiusClassName,
			repeatClassName,
			sizeClassName
		)
	};
};

export default useBackgroundImageClasses;
