import type {
	CarouselArrowButtonDefaultElement,
	CarouselArrowButtonElement,
	CarouselArrowButtonProps,
	CarouselArrowButtonRef
} from '@components/DataDisplay';

export type CarouselLeftArrowButtonDefaultElement = CarouselArrowButtonDefaultElement;
export type CarouselLeftArrowButtonElement = CarouselArrowButtonElement;

export type CarouselLeftArrowButtonProps<
	Element extends CarouselLeftArrowButtonElement = CarouselLeftArrowButtonDefaultElement
> = Omit<CarouselArrowButtonProps<Element>, 'direction'>;

export type CarouselLeftArrowButtonRef<
	Element extends CarouselLeftArrowButtonElement = CarouselLeftArrowButtonDefaultElement
> = CarouselArrowButtonRef<Element>;
