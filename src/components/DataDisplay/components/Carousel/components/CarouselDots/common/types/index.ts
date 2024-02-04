import type {
	PolymorphicElementType,
	ResponsiveValue,
	ScaleClass,
	ThemeAppearanceProps,
	ThemeSpacing
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { CarouselItemType } from '@components/DataDisplay';

export type CarouselDot = {
	item: CarouselItemType;
	scale: ScaleClass;
};
export type CarouselDots = Array<CarouselDot>;

type CarouselDotsOtherProps = ThemeAppearanceProps & {
	size?: ResponsiveValue<ThemeSpacing>;
	spacing?: ResponsiveValue<ThemeSpacing>;
};

export type CarouselDotsProps<Element extends PolymorphicElementType> = Omit<
	BoxProps<Element, CarouselDotsOtherProps>,
	'children'
>;

export type CarouselDotsRef<Element extends PolymorphicElementType> = BoxRef<Element>;
