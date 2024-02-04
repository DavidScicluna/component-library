import type {
	CarouselArrowButtonDefaultElement,
	CarouselArrowButtonElement,
	CarouselArrowButtonProps,
	CarouselArrowButtonRef
} from '@components/DataDisplay';

export type CarouselRightArrowButtonDefaultElement = CarouselArrowButtonDefaultElement;
export type CarouselRightArrowButtonElement = CarouselArrowButtonElement;

export type CarouselRightArrowButtonProps<Element extends CarouselRightArrowButtonElement> = Omit<
	CarouselArrowButtonProps<Element>,
	'direction'
>;

export type CarouselRightArrowButtonRef<Element extends CarouselRightArrowButtonElement> =
	CarouselArrowButtonRef<Element>;
