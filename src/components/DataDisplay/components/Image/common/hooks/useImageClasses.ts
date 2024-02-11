import classes from '@common/classes';
import { __DEFAULT_COLOR__, __DEFAULT_RADIUS__ } from '@common/constants';
import { useAppTheme, useGetClass, useGetColor } from '@common/hooks';
import type { ClassName, PolymorphicElementType } from '@common/types';

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

import useImageResponsiveValues from './useImageResponsiveValues';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseImageClassesProps<Element extends PolymorphicElementType> = Pick<
	ImageProps<Element>,
	'color' | 'colorMode' | 'filters' | 'options' | 'radius'
>;
type UseImageClassesReturn = Record<'container' | 'image' | 'fallback' | 'thumbnail', ClassName>;

const useImageClasses = <Element extends PolymorphicElementType>(
	props: UseImageClassesProps<Element>
): UseImageClassesReturn => {
	const { colorMode: __DEFAULT_IMAGE_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_IMAGE_COLORMODE__,
		filters: filtersProp = __DEFAULT_IMAGE_FILTERS__,
		options: optionsProp = __DEFAULT_IMAGE_OPTIONS__,
		radius: radiusProp = __DEFAULT_RADIUS__
	} = props;

	const { filters, options, radius } = useImageResponsiveValues<Element>({
		filters: filtersProp,
		options: optionsProp,
		radius: radiusProp
	});

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

	const radiusClassName = useGetClass((classes) => classes.borders.border_radius[radius]);

	const blurClassName = useGetClass((classes) => classes.filters.blur[blur]);
	const brightnessClassName = useGetClass((classes) => classes.filters.brightness[brightness]);
	const contrastClassName = useGetClass((classes) => classes.filters.contrast[contrast]);
	const grayscaleClassName = useGetClass((classes) => classes.filters.grayscale[grayscale]);
	const hueRotateClassName = useGetClass((classes) => classes.filters.hue_rotate[hueRotate]);
	const invertClassName = useGetClass((classes) => classes.filters.invert[invert]);
	const saturateClassName = useGetClass((classes) => classes.filters.saturate[saturate]);
	const sepiaClassName = useGetClass((classes) => classes.filters.sepia[sepia]);

	const fitClassName = useGetClass((classes) => classes.layout.object_fit[fit]);
	const positionClassName = useGetClass((classes) => classes.layout.object_position[position]);

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
