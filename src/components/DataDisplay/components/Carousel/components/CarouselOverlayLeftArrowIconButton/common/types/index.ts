/* eslint-disable max-len */
import type {
	CarouselOverlayArrowIconButtonDefaultElement,
	CarouselOverlayArrowIconButtonElement,
	CarouselOverlayArrowIconButtonProps,
	CarouselOverlayArrowIconButtonRef
} from '@components/DataDisplay/components/Carousel';

export type CarouselOverlayLeftArrowIconButtonDefaultElement = CarouselOverlayArrowIconButtonDefaultElement;
export type CarouselOverlayLeftArrowIconButtonElement = CarouselOverlayArrowIconButtonElement;

export type CarouselOverlayLeftArrowIconButtonProps<
	Element extends CarouselOverlayLeftArrowIconButtonElement = CarouselOverlayLeftArrowIconButtonDefaultElement
> = Omit<CarouselOverlayArrowIconButtonProps<Element>, 'direction'>;

export type CarouselOverlayLeftArrowIconButtonRef<
	Element extends CarouselOverlayLeftArrowIconButtonElement = CarouselOverlayLeftArrowIconButtonDefaultElement
> = CarouselOverlayArrowIconButtonRef<Element>;
