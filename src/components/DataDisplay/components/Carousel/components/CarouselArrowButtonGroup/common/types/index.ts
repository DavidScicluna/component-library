import type { DeepRequired } from 'utility-types';

import type {
	ButtonGroupDefaultElement,
	ButtonGroupElement,
	ButtonGroupProps,
	ButtonGroupRef
} from '@components/Buttons';
import type { CarouselDefaultElement, CarouselProps } from '@components/DataDisplay';

export type CarouselArrowButtonGroupDefaultElement = ButtonGroupDefaultElement;
export type CarouselArrowButtonGroupElement = ButtonGroupElement;

type CarouselArrowButtonGroupOtherProps = DeepRequired<
	Pick<CarouselProps<CarouselDefaultElement>, 'renderLeftAction' | 'renderRightAction'>
>;

export type CarouselArrowButtonGroupProps<Element extends CarouselArrowButtonGroupElement> = ButtonGroupProps<Element> &
	CarouselArrowButtonGroupOtherProps;

export type CarouselArrowButtonGroupRef<Element extends CarouselArrowButtonGroupElement> = ButtonGroupRef<Element>;
