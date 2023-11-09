import type {
	CarouselArrowIconButtonDefaultElement,
	CarouselArrowIconButtonElement,
	CarouselArrowIconButtonProps,
	CarouselArrowIconButtonRef
} from '@components/DataDisplay';

export type CarouselLeftArrowIconButtonDefaultElement = CarouselArrowIconButtonDefaultElement;
export type CarouselLeftArrowIconButtonElement = CarouselArrowIconButtonElement;

export type CarouselLeftArrowIconButtonProps<
	Element extends CarouselLeftArrowIconButtonElement = CarouselLeftArrowIconButtonDefaultElement
> = Omit<CarouselArrowIconButtonProps<Element>, 'direction'>;

export type CarouselLeftArrowIconButtonRef<
	Element extends CarouselLeftArrowIconButtonElement = CarouselLeftArrowIconButtonDefaultElement
> = CarouselArrowIconButtonRef<Element>;
