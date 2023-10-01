/* eslint-disable max-len */
import type {
	CarouselOverlayArrowButtonDefaultElement,
	CarouselOverlayArrowButtonElement,
	CarouselOverlayArrowButtonProps,
	CarouselOverlayArrowButtonRef
} from '@components/DataDisplay/components/Carousel';

export type CarouselOverlayRightArrowButtonDefaultElement = CarouselOverlayArrowButtonDefaultElement;
export type CarouselOverlayRightArrowButtonElement = CarouselOverlayArrowButtonElement;

export type CarouselOverlayRightArrowButtonProps<
	Element extends CarouselOverlayRightArrowButtonElement = CarouselOverlayRightArrowButtonDefaultElement
> = Omit<CarouselOverlayArrowButtonProps<Element>, 'direction'>;

export type CarouselOverlayRightArrowButtonRef<
	Element extends CarouselOverlayRightArrowButtonElement = CarouselOverlayRightArrowButtonDefaultElement
> = CarouselOverlayArrowButtonRef<Element>;
