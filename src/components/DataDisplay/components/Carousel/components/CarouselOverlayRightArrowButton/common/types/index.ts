/* eslint-disable max-len */
import type {
	CarouselOverlayArrowButtonDefaultElement,
	CarouselOverlayArrowButtonElement,
	CarouselOverlayArrowButtonProps,
	CarouselOverlayArrowButtonRef
} from '@components/DataDisplay';

export type CarouselOverlayRightArrowButtonDefaultElement = CarouselOverlayArrowButtonDefaultElement;
export type CarouselOverlayRightArrowButtonElement = CarouselOverlayArrowButtonElement;

export type CarouselOverlayRightArrowButtonProps<Element extends CarouselOverlayRightArrowButtonElement> = Omit<
	CarouselOverlayArrowButtonProps<Element>,
	'direction'
>;

export type CarouselOverlayRightArrowButtonRef<Element extends CarouselOverlayRightArrowButtonElement> =
	CarouselOverlayArrowButtonRef<Element>;
