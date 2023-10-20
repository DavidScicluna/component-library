import type { ElementType } from 'react';

import type { ResponsiveValue, ScaleClass, ThemeAppearanceProps, ThemeSpacing } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { CarouselItem } from '@components/DataDisplay';

export type CarouselDot = {
	item: CarouselItem;
	scale: ScaleClass;
};
export type CarouselDots = Array<CarouselDot>;

type CarouselDotsOtherProps = ThemeAppearanceProps & {
	size?: ResponsiveValue<ThemeSpacing>;
	spacing?: ResponsiveValue<ThemeSpacing>;
};

export type CarouselDotsProps<Element extends ElementType> = Omit<
	BoxProps<Element, CarouselDotsOtherProps>,
	'children'
>;

export type CarouselDotsRef<Element extends ElementType> = BoxRef<Element>;
