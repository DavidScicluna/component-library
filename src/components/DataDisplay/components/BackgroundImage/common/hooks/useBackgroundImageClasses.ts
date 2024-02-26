import classNames from 'classnames';

import classes from '@common/classes';
import { DEFAULT_RADIUS } from '@common/constants';
import { useGetClass } from '@common/hooks';
import type { ClassName, PolymorphicElementType } from '@common/types';

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
	DEFAULT_BACKGROUND_IMAGE_SIZE
} from '../constants';
import type { BackgroundImageProps } from '../types';

import useBackgroundImageResponsiveValues from './useBackgroundImageResponsiveValues';

type UseBackgroundImageClassesProps<Element extends PolymorphicElementType> = Pick<
	BackgroundImageProps<Element>,
	'filters' | 'options' | 'radius'
>;
type UseBackgroundImageClassesReturn = Record<'container' | 'image', ClassName>;

const useBackgroundImageClasses = <Element extends PolymorphicElementType>(
	props: UseBackgroundImageClassesProps<Element>
): UseBackgroundImageClassesReturn => {
	const {
		filters: filtersProp = DEFAULT_BACKGROUND_IMAGE_FILTERS,
		options: optionsProp = DEFAULT_BACKGROUND_IMAGE_OPTIONS,
		radius: radiusProp = DEFAULT_RADIUS
	} = props;

	const { filters, options, radius } = useBackgroundImageResponsiveValues<Element>({
		filters: filtersProp,
		options: optionsProp,
		radius: radiusProp
	});

	const {
		blur = DEFAULT_BACKGROUND_IMAGE_BLUR,
		brightness = DEFAULT_BACKGROUND_IMAGE_BRIGHTNESS,
		contrast = DEFAULT_BACKGROUND_IMAGE_CONTRAST,
		grayscale = DEFAULT_BACKGROUND_IMAGE_GRAYSCALE,
		hueRotate = DEFAULT_BACKGROUND_IMAGE_HUE_ROTATE,
		invert = DEFAULT_BACKGROUND_IMAGE_INVERT,
		saturate = DEFAULT_BACKGROUND_IMAGE_SATURATE,
		sepia = DEFAULT_BACKGROUND_IMAGE_SEPIA
	} = filters;
	const {
		attachment = DEFAULT_BACKGROUND_IMAGE_ATTACHMENT,
		blendMode = DEFAULT_BACKGROUND_IMAGE_BLEND_MODE,
		clip = DEFAULT_BACKGROUND_IMAGE_CLIP,
		origin = DEFAULT_BACKGROUND_IMAGE_ORIGIN,
		position = DEFAULT_BACKGROUND_IMAGE_POSITION,
		repeat = DEFAULT_BACKGROUND_IMAGE_REPEAT,
		size = DEFAULT_BACKGROUND_IMAGE_SIZE
	} = options;

	const radiusClassName = useGetClass((classes) => classes.borders.border_radius[radius]);

	const blurClassName = useGetClass((classes) => classes.filters.blur[blur]);
	const brightnessClassName = useGetClass((classes) => classes.filters.brightness[brightness]);
	const contrastClassName = useGetClass((classes) => classes.filters.contrast[contrast]);
	const grayscaleClassName = useGetClass((classes) => classes.filters.grayscale[grayscale]);
	const hueRotateClassName = useGetClass((classes) => classes.filters.hue_rotate[hueRotate]);
	const invertClassName = useGetClass((classes) => classes.filters.invert[invert]);
	const saturateClassName = useGetClass((classes) => classes.filters.saturate[saturate]);
	const sepiaClassName = useGetClass((classes) => classes.filters.sepia[sepia]);

	const attachmentClassName = useGetClass((classes) => classes.backgrounds.background_attachment[attachment]);
	const blendModeClassName = useGetClass((classes) => classes.effects.background_blend_mode[blendMode]);
	const clipClassName = useGetClass((classes) => classes.backgrounds.background_clip[clip]);
	const originClassName = useGetClass((classes) => classes.backgrounds.background_origin[origin]);
	const positionClassName = useGetClass((classes) => classes.backgrounds.background_position[position]);
	const repeatClassName = useGetClass((classes) => classes.backgrounds.background_repeat[repeat]);
	const sizeClassName = useGetClass((classes) => classes.backgrounds.background_size[size]);

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
