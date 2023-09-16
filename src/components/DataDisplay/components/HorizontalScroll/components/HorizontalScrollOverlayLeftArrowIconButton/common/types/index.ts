/* eslint-disable max-len */
import type {
	HorizontalScrollAPIContext,
	HorizontalScrollOverlayArrowIconButtonDefaultElement,
	HorizontalScrollOverlayArrowIconButtonElement,
	HorizontalScrollOverlayArrowIconButtonProps,
	HorizontalScrollOverlayArrowIconButtonRef
} from '@components/DataDisplay/components/HorizontalScroll';

export type HorizontalScrollOverlayLeftArrowIconButtonDefaultElement =
	HorizontalScrollOverlayArrowIconButtonDefaultElement;
export type HorizontalScrollOverlayLeftArrowIconButtonElement = HorizontalScrollOverlayArrowIconButtonElement;

export type HorizontalScrollOverlayLeftArrowIconButtonScrollAmount = 'single' | 'multiple';

type HorizontalScrollOverlayLeftArrowIconButtonOtherProps = {
	scroll?: HorizontalScrollAPIContext;
	scrollAmount?: HorizontalScrollOverlayLeftArrowIconButtonScrollAmount;
};

export type HorizontalScrollOverlayLeftArrowIconButtonProps<
	Element extends HorizontalScrollOverlayLeftArrowIconButtonElement = HorizontalScrollOverlayLeftArrowIconButtonDefaultElement
> = Omit<HorizontalScrollOverlayArrowIconButtonProps<Element>, 'direction'> &
	HorizontalScrollOverlayLeftArrowIconButtonOtherProps;

export type HorizontalScrollOverlayLeftArrowIconButtonRef<
	Element extends HorizontalScrollOverlayLeftArrowIconButtonElement = HorizontalScrollOverlayLeftArrowIconButtonDefaultElement
> = HorizontalScrollOverlayArrowIconButtonRef<Element>;
