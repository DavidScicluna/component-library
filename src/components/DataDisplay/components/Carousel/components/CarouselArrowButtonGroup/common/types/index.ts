import type { ElementType } from 'react';

import type { DeepRequired } from 'utility-types';

import type { ButtonGroupProps, ButtonGroupRef } from '@components/Buttons/components/ButtonGroup';
import type { CarouselProps } from '@components/DataDisplay/components/Carousel';

type CarouselArrowButtonGroupOtherProps<Element extends ElementType> = DeepRequired<
	Pick<CarouselProps<Element>, 'renderLeftAction' | 'renderRightAction'>
>;

export type CarouselArrowButtonGroupProps<Element extends ElementType> = ButtonGroupProps<Element> &
	CarouselArrowButtonGroupOtherProps<Element>;

export type CarouselArrowButtonGroupRef<Element extends ElementType> = ButtonGroupRef<Element>;
