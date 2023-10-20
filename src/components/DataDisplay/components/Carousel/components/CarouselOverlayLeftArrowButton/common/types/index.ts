/* eslint-disable max-len */
import type {
	CarouselOverlayArrowButtonDefaultElement,
	CarouselOverlayArrowButtonElement,
	CarouselOverlayArrowButtonProps,
	CarouselOverlayArrowButtonRef
} from '@components/DataDisplay';

export type CarouselOverlayLeftArrowButtonDefaultElement = CarouselOverlayArrowButtonDefaultElement;
export type CarouselOverlayLeftArrowButtonElement = CarouselOverlayArrowButtonElement;

export type CarouselOverlayLeftArrowButtonProps<
	Element extends CarouselOverlayLeftArrowButtonElement = CarouselOverlayLeftArrowButtonDefaultElement
> = Omit<CarouselOverlayArrowButtonProps<Element>, 'direction'>;

export type CarouselOverlayLeftArrowButtonRef<
	Element extends CarouselOverlayLeftArrowButtonElement = CarouselOverlayLeftArrowButtonDefaultElement
> = CarouselOverlayArrowButtonRef<Element>;
