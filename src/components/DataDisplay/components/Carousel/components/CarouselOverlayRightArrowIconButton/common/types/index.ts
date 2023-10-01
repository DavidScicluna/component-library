/* eslint-disable max-len */
import type {
	CarouselOverlayArrowIconButtonDefaultElement,
	CarouselOverlayArrowIconButtonElement,
	CarouselOverlayArrowIconButtonProps,
	CarouselOverlayArrowIconButtonRef
} from '@components/DataDisplay/components/Carousel';

export type CarouselOverlayRightArrowIconButtonDefaultElement = CarouselOverlayArrowIconButtonDefaultElement;
export type CarouselOverlayRightArrowIconButtonElement = CarouselOverlayArrowIconButtonElement;

export type CarouselOverlayRightArrowIconButtonProps<
	Element extends CarouselOverlayRightArrowIconButtonElement = CarouselOverlayRightArrowIconButtonDefaultElement
> = Omit<CarouselOverlayArrowIconButtonProps<Element>, 'direction'>;

export type CarouselOverlayRightArrowIconButtonRef<
	Element extends CarouselOverlayRightArrowIconButtonElement = CarouselOverlayRightArrowIconButtonDefaultElement
> = CarouselOverlayArrowIconButtonRef<Element>;
