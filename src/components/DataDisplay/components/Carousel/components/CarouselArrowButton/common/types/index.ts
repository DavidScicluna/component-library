import type { PolymorphicMouseEvent, ResponsiveValue } from '@common/types';

import type {
	ButtonDefaultElement,
	ButtonElement,
	ButtonProps,
	ButtonRef
} from '@components/Buttons/components/Button';
import type { CarouselArrowDirection } from '@components/DataDisplay/components/Carousel';

export type CarouselArrowButtonMouseEvent<
	Element extends CarouselArrowButtonElement = CarouselArrowButtonDefaultElement
> = PolymorphicMouseEvent<Element>;

export type CarouselArrowButtonDefaultElement = ButtonDefaultElement;
export type CarouselArrowButtonElement = ButtonElement;

type CarouselArrowButtonOtherProps = {
	/**
	 * If true, the tooltip will be render an icon on the side of the text
	 *
	 * @default true
	 */
	hasIcon?: ResponsiveValue<boolean>;
	/**
	 * The direction in which to scroll to either left or right
	 */
	direction: ResponsiveValue<CarouselArrowDirection>;
};

export type CarouselArrowButtonProps<Element extends CarouselArrowButtonElement = CarouselArrowButtonDefaultElement> =
	ButtonProps<Element> & CarouselArrowButtonOtherProps;

export type CarouselArrowButtonRef<Element extends CarouselArrowButtonElement = CarouselArrowButtonDefaultElement> =
	ButtonRef<Element>;
