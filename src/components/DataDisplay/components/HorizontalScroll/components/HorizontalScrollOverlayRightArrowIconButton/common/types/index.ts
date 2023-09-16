/* eslint-disable max-len */
import type {
	HorizontalScrollAPIContext,
	HorizontalScrollOverlayArrowIconButtonDefaultElement,
	HorizontalScrollOverlayArrowIconButtonElement,
	HorizontalScrollOverlayArrowIconButtonProps,
	HorizontalScrollOverlayArrowIconButtonRef
} from '@components/DataDisplay/components/HorizontalScroll';

export type HorizontalScrollOverlayRightArrowIconButtonDefaultElement =
	HorizontalScrollOverlayArrowIconButtonDefaultElement;
export type HorizontalScrollOverlayRightArrowIconButtonElement = HorizontalScrollOverlayArrowIconButtonElement;

export type HorizontalScrollOverlayRightArrowIconButtonScrollAmount = 'single' | 'multiple';

type HorizontalScrollOverlayRightArrowIconButtonOtherProps = {
	scroll?: HorizontalScrollAPIContext;
	scrollAmount?: HorizontalScrollOverlayRightArrowIconButtonScrollAmount;
};

export type HorizontalScrollOverlayRightArrowIconButtonProps<
	Element extends HorizontalScrollOverlayRightArrowIconButtonElement = HorizontalScrollOverlayRightArrowIconButtonDefaultElement
> = Omit<HorizontalScrollOverlayArrowIconButtonProps<Element>, 'direction'> &
	HorizontalScrollOverlayRightArrowIconButtonOtherProps;

export type HorizontalScrollOverlayRightArrowIconButtonRef<
	Element extends HorizontalScrollOverlayRightArrowIconButtonElement = HorizontalScrollOverlayRightArrowIconButtonDefaultElement
> = HorizontalScrollOverlayArrowIconButtonRef<Element>;
