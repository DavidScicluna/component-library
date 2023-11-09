import type { ElementType } from 'react';

import type { PolymorphicDefaultElement, ThemeAppearanceProps } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { CarouselDotsProps, CarouselDotType } from '@components/DataDisplay';

type CarouselDotOtherProps = ThemeAppearanceProps &
	CarouselDotType &
	Pick<CarouselDotsProps<PolymorphicDefaultElement>, 'size'>;

export type CarouselDotProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element>,
	'children'
> &
	CarouselDotOtherProps;

export type CarouselDotRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
