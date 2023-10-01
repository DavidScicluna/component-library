import type {
	CarouselArrowButtonDefaultElement,
	CarouselArrowButtonElement,
	CarouselArrowButtonProps,
	CarouselArrowButtonRef
} from '@components/DataDisplay/components/Carousel';

export type CarouselRightArrowButtonDefaultElement = CarouselArrowButtonDefaultElement;
export type CarouselRightArrowButtonElement = CarouselArrowButtonElement;

export type CarouselRightArrowButtonProps<
	Element extends CarouselRightArrowButtonElement = CarouselRightArrowButtonDefaultElement
> = Omit<CarouselArrowButtonProps<Element>, 'direction'>;

export type CarouselRightArrowButtonRef<
	Element extends CarouselRightArrowButtonElement = CarouselRightArrowButtonDefaultElement
> = CarouselArrowButtonRef<Element>;
