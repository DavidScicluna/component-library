import classNames from 'classnames';

import classes from '@common/classes';
import { DEFAULT_COLOR, DEFAULT_RADIUS } from '@common/constants';
import { useAppTheme, useGetClass, useGetColor } from '@common/hooks';
import type { ClassName, PolymorphicElementType } from '@common/types';

import {
	DEFAULT_IMAGE_BLUR,
	DEFAULT_IMAGE_BRIGHTNESS,
	DEFAULT_IMAGE_CONTRAST,
	DEFAULT_IMAGE_FILTERS,
	DEFAULT_IMAGE_FIT,
	DEFAULT_IMAGE_GRAYSCALE,
	DEFAULT_IMAGE_HUE_ROTATE,
	DEFAULT_IMAGE_INVERT,
	DEFAULT_IMAGE_OPTIONS,
	DEFAULT_IMAGE_POSITION,
	DEFAULT_IMAGE_SATURATE,
	DEFAULT_IMAGE_SEPIA
} from '../constants';
import type { ImageProps } from '../types';

import useImageResponsiveValues from './useImageResponsiveValues';

type UseImageClassesProps<Element extends PolymorphicElementType> = Pick<
	ImageProps<Element>,
	'color' | 'colorMode' | 'filters' | 'options' | 'radius'
>;
type UseImageClassesReturn = Record<'container' | 'image' | 'fallback' | 'thumbnail', ClassName>;

const useImageClasses = <Element extends PolymorphicElementType>(
	props: UseImageClassesProps<Element>
): UseImageClassesReturn => {
	const { colorMode: DEFAULT_IMAGE_COLORMODE } = useAppTheme();

	const {
		color = DEFAULT_COLOR,
		colorMode = DEFAULT_IMAGE_COLORMODE,
		filters: filtersProp = DEFAULT_IMAGE_FILTERS,
		options: optionsProp = DEFAULT_IMAGE_OPTIONS,
		radius: radiusProp = DEFAULT_RADIUS
	} = props;

	const { filters, options, radius } = useImageResponsiveValues<Element>({
		filters: filtersProp,
		options: optionsProp,
		radius: radiusProp
	});

	const {
		blur = DEFAULT_IMAGE_BLUR,
		brightness = DEFAULT_IMAGE_BRIGHTNESS,
		contrast = DEFAULT_IMAGE_CONTRAST,
		grayscale = DEFAULT_IMAGE_GRAYSCALE,
		hueRotate = DEFAULT_IMAGE_HUE_ROTATE,
		invert = DEFAULT_IMAGE_INVERT,
		saturate = DEFAULT_IMAGE_SATURATE,
		sepia = DEFAULT_IMAGE_SEPIA
	} = filters;
	const { fit = DEFAULT_IMAGE_FIT, position = DEFAULT_IMAGE_POSITION } = options;

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
