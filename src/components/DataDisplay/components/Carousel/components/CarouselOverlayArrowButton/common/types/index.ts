import type { ResponsiveValue } from '@common/types';

import type {
	CarouselArrowButtonDefaultElement,
	CarouselArrowButtonElement,
	CarouselArrowButtonProps,
	CarouselArrowButtonRef,
	CarouselDefaultElement,
	CarouselProps
} from '@components/DataDisplay';

export type CarouselOverlayArrowButtonDefaultElement = CarouselArrowButtonDefaultElement;
export type CarouselOverlayArrowButtonElement = CarouselArrowButtonElement;

type CarouselOverlayArrowButtonOtherProps = {
	/**
	 * If true, overlay button will be visible
	 *
	 * @default true
	 */
	isVisible?: ResponsiveValue<boolean>;
} & Pick<CarouselProps<CarouselDefaultElement>, 'renderLeftLinearGradient' | 'renderRightLinearGradient'>;

export type CarouselOverlayArrowButtonProps<Element extends CarouselOverlayArrowButtonElement> =
	CarouselArrowButtonProps<Element> & CarouselOverlayArrowButtonOtherProps;

export type CarouselOverlayArrowButtonRef<Element extends CarouselOverlayArrowButtonElement> =
	CarouselArrowButtonRef<Element>;
