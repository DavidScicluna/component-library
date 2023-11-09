import type { ResponsiveValue } from '@common/types';

import type {
	CarouselArrowIconButtonDefaultElement,
	CarouselArrowIconButtonElement,
	CarouselArrowIconButtonProps,
	CarouselArrowIconButtonRef,
	CarouselProps
} from '@components/DataDisplay';

export type CarouselOverlayArrowIconButtonDefaultElement = CarouselArrowIconButtonDefaultElement;
export type CarouselOverlayArrowIconButtonElement = CarouselArrowIconButtonElement;

type CarouselOverlayArrowIconButtonOtherProps<
	Element extends CarouselOverlayArrowIconButtonElement = CarouselOverlayArrowIconButtonDefaultElement
> = {
	/**
	 * If true, overlay button will be visible
	 *
	 * @default true
	 */
	isVisible?: ResponsiveValue<boolean>;
} & Pick<CarouselProps<Element>, 'renderLeftLinearGradient' | 'renderRightLinearGradient'>;

export type CarouselOverlayArrowIconButtonProps<
	Element extends CarouselOverlayArrowIconButtonElement = CarouselOverlayArrowIconButtonDefaultElement
> = CarouselArrowIconButtonProps<Element> & CarouselOverlayArrowIconButtonOtherProps;

export type CarouselOverlayArrowIconButtonRef<
	Element extends CarouselOverlayArrowIconButtonElement = CarouselOverlayArrowIconButtonDefaultElement
> = CarouselArrowIconButtonRef<Element>;
