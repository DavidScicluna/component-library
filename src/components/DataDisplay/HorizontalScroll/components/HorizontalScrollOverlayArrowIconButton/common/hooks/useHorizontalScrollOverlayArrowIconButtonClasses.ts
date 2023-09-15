import classNames from 'classnames';

import { __DEFAULT_COLOR__ } from '@common/constants';
import { useGetClass, useGetColor } from '@common/hooks';
import type { ClassName, GradientFromMiddleToClass } from '@common/types';

import { useHorizontalScrollContext } from '@components/DataDisplay/HorizontalScroll/common/hooks';
import type { LinearGradientDirection } from '@components/Overlay/components/LinearGradient';

import type {
	HorizontalScrollOverlayArrowIconButtonDefaultElement,
	HorizontalScrollOverlayArrowIconButtonElement,
	HorizontalScrollOverlayArrowIconButtonProps
} from '../types';

type UseHorizontalScrollOverlayArrowIconButtonClassesProps<
	Element extends HorizontalScrollOverlayArrowIconButtonElement = HorizontalScrollOverlayArrowIconButtonDefaultElement
> = Pick<HorizontalScrollOverlayArrowIconButtonProps<Element>, 'color' | 'colorMode' | 'direction'>;
type UseHorizontalScrollOverlayArrowIconButtonClassesReturn = ClassName;

const useHorizontalScrollOverlayArrowIconButtonClasses = <
	Element extends HorizontalScrollOverlayArrowIconButtonElement = HorizontalScrollOverlayArrowIconButtonDefaultElement
>(
	props: UseHorizontalScrollOverlayArrowIconButtonClassesProps<Element>
): UseHorizontalScrollOverlayArrowIconButtonClassesReturn => {
	const { colorMode: __DEFAULT_HORIZONTAL_SCROLL_OVERLAY_ARROW_ICON_BUTTON_COLORMODE__ } =
		useHorizontalScrollContext();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_HORIZONTAL_SCROLL_OVERLAY_ARROW_ICON_BUTTON_COLORMODE__,
		direction
	} = props;

	const gradientClassName = useGetClass<LinearGradientDirection>(direction === 'left' ? 'r' : 'l', [
		'backgrounds',
		'gradient'
	]);

	const fromPosClassName = useGetClass<GradientFromMiddleToClass>(0, ['backgrounds', 'gradient']);
	const fromColorClassName = useGetColor({
		color,
		colorMode,
		colorType: 'color',
		classType: 'gradient_from_color',
		hueType: 'background'
	});

	const toPosClassName = useGetClass<GradientFromMiddleToClass>(100, ['backgrounds', 'gradient']);
	const toColorClassName = useGetColor({
		color: 'transparent',
		colorMode,
		colorType: 'color',
		classType: 'gradient_to_color',
		hueType: 'background'
	});

	return classNames(gradientClassName, fromPosClassName, fromColorClassName, toPosClassName, toColorClassName);
};

export default useHorizontalScrollOverlayArrowIconButtonClasses;
