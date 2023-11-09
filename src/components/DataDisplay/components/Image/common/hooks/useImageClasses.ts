import type { ElementType } from 'react';

import classes from '@common/classes';
import { __DEFAULT_COLOR__, __DEFAULT_RADIUS__ } from '@common/constants';
import { useAppTheme, useGetClass, useGetColor } from '@common/hooks';
import type {
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
import type { ObjectFitClass, ObjectPositionClass } from '@common/types/classes';

import {
	__DEFAULT_IMAGE_BLUR__,
	__DEFAULT_IMAGE_BRIGHTNESS__,
	__DEFAULT_IMAGE_CONTRAST__,
	__DEFAULT_IMAGE_FILTERS__,
	__DEFAULT_IMAGE_FIT__,
	__DEFAULT_IMAGE_GRAYSCALE__,
	__DEFAULT_IMAGE_HUE_ROTATE__,
	__DEFAULT_IMAGE_INVERT__,
	__DEFAULT_IMAGE_OPTIONS__,
	__DEFAULT_IMAGE_POSITION__,
	__DEFAULT_IMAGE_SATURATE__,
	__DEFAULT_IMAGE_SEPIA__
} from '../constants';
import type { ImageProps } from '../types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseImageClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	ImageProps<Element>,
	'color' | 'colorMode' | 'filters' | 'options' | 'radius'
>;
type UseImageClassesReturn = Record<'container' | 'image' | 'fallback' | 'thumbnail', ClassName>;

const useImageClasses = <Element extends ElementType = PolymorphicDefaultElement>(
	props: UseImageClassesProps<Element>
): UseImageClassesReturn => {
	const { colorMode: __DEFAULT_IMAGE_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_IMAGE_COLORMODE__,
		filters = __DEFAULT_IMAGE_FILTERS__,
		options = __DEFAULT_IMAGE_OPTIONS__,
		radius = __DEFAULT_RADIUS__
	} = props;
	const {
		blur = __DEFAULT_IMAGE_BLUR__,
		brightness = __DEFAULT_IMAGE_BRIGHTNESS__,
		contrast = __DEFAULT_IMAGE_CONTRAST__,
		grayscale = __DEFAULT_IMAGE_GRAYSCALE__,
		hueRotate = __DEFAULT_IMAGE_HUE_ROTATE__,
		invert = __DEFAULT_IMAGE_INVERT__,
		saturate = __DEFAULT_IMAGE_SATURATE__,
		sepia = __DEFAULT_IMAGE_SEPIA__
	} = filters;
	const { fit = __DEFAULT_IMAGE_FIT__, position = __DEFAULT_IMAGE_POSITION__ } = options;

	const radiusClassName = useGetClass<ThemeRadius>(radius, ['borders', 'border_radius']);

	const blurClassName = useGetClass<ThemeBlurClass>(blur, ['filters', 'blur']);
	const brightnessClassName = useGetClass<BrightnessClass>(brightness, ['filters', 'brightness']);
	const contrastClassName = useGetClass<ContrastClass>(contrast, ['filters', 'contrast']);
	const grayscaleClassName = useGetClass<GrayscaleClass>(grayscale, ['filters', 'grayscale']);
	const hueRotateClassName = useGetClass<HueRotateClass>(hueRotate, ['filters', 'hue_rotate']);
	const invertClassName = useGetClass<InvertClass>(invert, ['filters', 'invert']);
	const saturateClassName = useGetClass<SaturateClass>(saturate, ['filters', 'saturate']);
	const sepiaClassName = useGetClass<SepiaClass>(sepia, ['filters', 'sepia']);

	const fitClassName = useGetClass<ObjectFitClass>(fit, ['layout', 'object_fit']);
	const positionClassName = useGetClass<ObjectPositionClass>(position, ['layout', 'object_position']);

	const fallbackClassName = useGetColor({
		color,
		colorMode,
		colorType: 'color',
		hueType: 'divider',
		classType: 'bg'
	});

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
			fitClassName,
			positionClassName,
			radiusClassName
		),
		fallback: classNames(fallbackClassName),
		thumbnail: classNames(classes.filters.blur.md)
	};
};

export default useImageClasses;
