import type { PolymorphicDefaultElement, PolymorphicElementType, ThemeAppearanceProps } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { CarouselDotsProps, CarouselDotType } from '@components/DataDisplay';

type CarouselDotOtherProps = ThemeAppearanceProps &
	CarouselDotType &
	Pick<CarouselDotsProps<PolymorphicDefaultElement>, 'size'>;

export type CarouselDotProps<Element extends PolymorphicElementType> = Omit<
	BoxProps<Element, CarouselDotOtherProps>,
	'children'
>;

export type CarouselDotRef<Element extends PolymorphicElementType> = BoxRef<Element>;
