import type { ResponsiveValue } from '@common/types';

import type {
	CarouselArrowButtonDefaultElement,
	CarouselArrowButtonElement,
	CarouselArrowButtonProps,
	CarouselArrowButtonRef,
	CarouselProps
} from '@components/DataDisplay/components/Carousel';

export type CarouselOverlayArrowButtonDefaultElement = CarouselArrowButtonDefaultElement;
export type CarouselOverlayArrowButtonElement = CarouselArrowButtonElement;

type CarouselOverlayArrowButtonOtherProps<
	Element extends CarouselOverlayArrowButtonElement = CarouselOverlayArrowButtonDefaultElement
> = {
	/**
	 * If true, overlay button will be visible
	 *
	 * @default true
	 */
	isVisible?: ResponsiveValue<boolean>;
} & Pick<CarouselProps<Element>, 'renderLeftLinearGradient' | 'renderRightLinearGradient'>;

export type CarouselOverlayArrowButtonProps<
	Element extends CarouselOverlayArrowButtonElement = CarouselOverlayArrowButtonDefaultElement
> = CarouselArrowButtonProps<Element> & CarouselOverlayArrowButtonOtherProps;

export type CarouselOverlayArrowButtonRef<
	Element extends CarouselOverlayArrowButtonElement = CarouselOverlayArrowButtonDefaultElement
> = CarouselArrowButtonRef<Element>;
