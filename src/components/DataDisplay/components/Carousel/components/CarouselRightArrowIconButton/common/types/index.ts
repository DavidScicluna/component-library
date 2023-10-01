import type {
	CarouselArrowIconButtonDefaultElement,
	CarouselArrowIconButtonElement,
	CarouselArrowIconButtonProps,
	CarouselArrowIconButtonRef
} from '@components/DataDisplay/components/Carousel';

export type CarouselRightArrowIconButtonDefaultElement = CarouselArrowIconButtonDefaultElement;
export type CarouselRightArrowIconButtonElement = CarouselArrowIconButtonElement;

export type CarouselRightArrowIconButtonProps<
	Element extends CarouselRightArrowIconButtonElement = CarouselRightArrowIconButtonDefaultElement
> = Omit<CarouselArrowIconButtonProps<Element>, 'direction'>;

export type CarouselRightArrowIconButtonRef<
	Element extends CarouselRightArrowIconButtonElement = CarouselRightArrowIconButtonDefaultElement
> = CarouselArrowIconButtonRef<Element>;
