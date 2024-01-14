import classes from '@common/classes';
import { __DEFAULT_COLOR__ } from '@common/constants';
import { useAppTheme, useGetColor, useGetResponsiveValue } from '@common/hooks';
import type { ClassName, ThemeSpacing } from '@common/types';

import { __DEFAULT_CAROUSEL_DOTS_SIZE__ } from '@components/DataDisplay/components/Carousel/components/CarouselDots/common/constants';

import type { CarouselDotProps } from '../types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseCarouselDotClassesProps = Pick<CarouselDotProps, 'color' | 'colorMode' | 'size'> & { isVisible: boolean };
type UseCarouselDotClassesReturn = Record<'item' | 'scale100' | 'scale75' | 'scale50', ClassName>;

const useCarouselDotClasses = (props: UseCarouselDotClassesProps): UseCarouselDotClassesReturn => {
	const { colorMode: __DEFAULT_CAROUSEL_DOT_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_CAROUSEL_DOT_COLORMODE__,
		isVisible,
		size: s = __DEFAULT_CAROUSEL_DOTS_SIZE__
	} = props;

	const size = useGetResponsiveValue<ThemeSpacing>(s);

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
