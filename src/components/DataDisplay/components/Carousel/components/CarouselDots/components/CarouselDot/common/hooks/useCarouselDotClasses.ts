import classNames from 'classnames';

import classes from '@common/classes';
import { __DEFAULT_COLOR__ } from '@common/constants';
import { useAppTheme, useGetColor } from '@common/hooks';
import type { ClassName, PolymorphicElementType } from '@common/types';

import { __DEFAULT_CAROUSEL_DOTS_SIZE__ } from '@components/DataDisplay/components/Carousel/components/CarouselDots/common/constants';

import type { CarouselDotProps } from '../types';

import useCarouselDotResponsiveValues from './useCarouselDotResponsiveValues';

type UseCarouselDotClassesProps<Element extends PolymorphicElementType> = Pick<
	CarouselDotProps<Element>,
	'color' | 'colorMode' | 'size'
> & { isVisible: boolean };
type UseCarouselDotClassesReturn = Record<'item' | 'scale100' | 'scale75' | 'scale50', ClassName>;

const useCarouselDotClasses = <Element extends PolymorphicElementType>(
	props: UseCarouselDotClassesProps<Element>
): UseCarouselDotClassesReturn => {
	const { colorMode: __DEFAULT_CAROUSEL_DOT_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_CAROUSEL_DOT_COLORMODE__,
		isVisible,
		size: sizeProp = __DEFAULT_CAROUSEL_DOTS_SIZE__
	} = props;

	const { size } = useCarouselDotResponsiveValues<Element>({ size: sizeProp });

	const colorClassName = useGetColor({
		color,
		colorMode,
		colorType: 'color',
		hueType: 'default',
		classType: 'bg'
	});
	const dividerClassName = useGetColor({
		color,
		colorMode,
		colorType: 'color',
		hueType: 'divider',
		classType: 'bg'
	});

	return {
		item: classNames(
			classes.sizing.width[size],
			classes.sizing.height[size],
			classes.interactivity.cursor[isVisible ? 'default' : 'pointer'],
			classes.interactivity.user_select.none,
			classes.interactivity.will_change.auto,
			classes.interactivity.pointer_events[isVisible ? 'none' : 'auto'],
			classes.borders.border_radius.full
		),
		scale100: classNames(colorClassName, classes.transforms.scale[100]),
		scale75: classNames(dividerClassName, classes.transforms.scale[75]),
		scale50: classNames(dividerClassName, classes.transforms.scale[50])
	};
};

export default useCarouselDotClasses;
