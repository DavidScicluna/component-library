/* eslint-disable max-len */
import type {
	CarouselOverlayArrowIconButtonDefaultElement,
	CarouselOverlayArrowIconButtonElement,
	CarouselOverlayArrowIconButtonProps,
	CarouselOverlayArrowIconButtonRef
} from '@components/DataDisplay';

export type CarouselOverlayLeftArrowIconButtonDefaultElement = CarouselOverlayArrowIconButtonDefaultElement;
export type CarouselOverlayLeftArrowIconButtonElement = CarouselOverlayArrowIconButtonElement;

export type CarouselOverlayLeftArrowIconButtonProps<Element extends CarouselOverlayLeftArrowIconButtonElement> = Omit<
	CarouselOverlayArrowIconButtonProps<Element>,
	'direction'
>;

export type CarouselOverlayLeftArrowIconButtonRef<Element extends CarouselOverlayLeftArrowIconButtonElement> =
	CarouselOverlayArrowIconButtonRef<Element>;
