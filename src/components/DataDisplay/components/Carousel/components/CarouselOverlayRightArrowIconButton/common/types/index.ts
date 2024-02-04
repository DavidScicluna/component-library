/* eslint-disable max-len */
import type {
	CarouselOverlayArrowIconButtonDefaultElement,
	CarouselOverlayArrowIconButtonElement,
	CarouselOverlayArrowIconButtonProps,
	CarouselOverlayArrowIconButtonRef
} from '@components/DataDisplay';

export type CarouselOverlayRightArrowIconButtonDefaultElement = CarouselOverlayArrowIconButtonDefaultElement;
export type CarouselOverlayRightArrowIconButtonElement = CarouselOverlayArrowIconButtonElement;

export type CarouselOverlayRightArrowIconButtonProps<Element extends CarouselOverlayRightArrowIconButtonElement> = Omit<
	CarouselOverlayArrowIconButtonProps<Element>,
	'direction'
>;

export type CarouselOverlayRightArrowIconButtonRef<Element extends CarouselOverlayRightArrowIconButtonElement> =
	CarouselOverlayArrowIconButtonRef<Element>;
