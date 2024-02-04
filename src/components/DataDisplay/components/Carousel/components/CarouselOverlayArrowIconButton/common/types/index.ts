import type { ResponsiveValue } from '@common/types';

import type {
	CarouselArrowIconButtonDefaultElement,
	CarouselArrowIconButtonElement,
	CarouselArrowIconButtonProps,
	CarouselArrowIconButtonRef,
	CarouselDefaultElement,
	CarouselProps
} from '@components/DataDisplay';

export type CarouselOverlayArrowIconButtonDefaultElement = CarouselArrowIconButtonDefaultElement;
export type CarouselOverlayArrowIconButtonElement = CarouselArrowIconButtonElement;

type CarouselOverlayArrowIconButtonOtherProps = {
	/**
	 * If true, overlay button will be visible
	 *
	 * @default true
	 */
	isVisible?: ResponsiveValue<boolean>;
} & Pick<CarouselProps<CarouselDefaultElement>, 'renderLeftLinearGradient' | 'renderRightLinearGradient'>;

export type CarouselOverlayArrowIconButtonProps<Element extends CarouselOverlayArrowIconButtonElement> =
	CarouselArrowIconButtonProps<Element> & CarouselOverlayArrowIconButtonOtherProps;

export type CarouselOverlayArrowIconButtonRef<Element extends CarouselOverlayArrowIconButtonElement> =
	CarouselArrowIconButtonRef<Element>;
