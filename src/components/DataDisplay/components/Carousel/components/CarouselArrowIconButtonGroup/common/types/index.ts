import type { ElementType } from 'react';

import type { DeepRequired } from 'utility-types';

import type { IconButtonGroupProps, IconButtonGroupRef } from '@components/Buttons/components/IconButtonGroup';
import type { CarouselProps } from '@components/DataDisplay/components/Carousel';

type CarouselArrowIconButtonGroupOtherProps<Element extends ElementType> = DeepRequired<
	Pick<CarouselProps<Element>, 'renderLeftAction' | 'renderRightAction'>
>;

export type CarouselArrowIconButtonGroupProps<Element extends ElementType> = IconButtonGroupProps<Element> &
	CarouselArrowIconButtonGroupOtherProps<Element>;

export type CarouselArrowIconButtonGroupRef<Element extends ElementType> = IconButtonGroupRef<Element>;
