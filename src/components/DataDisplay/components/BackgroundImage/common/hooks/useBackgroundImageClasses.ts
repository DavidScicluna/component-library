import classNames from 'classnames';

import classes from '@common/classes';
import { __DEFAULT_RADIUS__ } from '@common/constants';
import { useGetClass } from '@common/hooks';
import type { ClassName, PolymorphicElementType } from '@common/types';

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
		filters: filtersProp = __DEFAULT_BACKGROUND_IMAGE_FILTERS__,
		options: optionsProp = __DEFAULT_BACKGROUND_IMAGE_OPTIONS__,
		radius: radiusProp = __DEFAULT_RADIUS__
	} = props;

	const { filters, options, radius } = useBackgroundImageResponsiveValues<Element>({
		filters: filtersProp,
		options: optionsProp,
		radius: radiusProp
	});

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
