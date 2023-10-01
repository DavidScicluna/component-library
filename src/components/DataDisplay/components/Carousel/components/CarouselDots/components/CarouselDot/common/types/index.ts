import type { ElementType } from 'react';

import type { PolymorphicDefaultElement, ThemeAppearanceProps } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box/common/types';
import type { CarouselDotsProps, CarouselDotType } from '@components/DataDisplay/components/Carousel';

type CarouselDotOtherProps = ThemeAppearanceProps &
	CarouselDotType &
	Pick<CarouselDotsProps<PolymorphicDefaultElement>, 'size'>;

export type CarouselDotProps<Element extends ElementType> = Omit<BoxProps<Element, CarouselDotOtherProps>, 'children'>;

export type CarouselDotRef<Element extends ElementType> = BoxRef<Element>;
