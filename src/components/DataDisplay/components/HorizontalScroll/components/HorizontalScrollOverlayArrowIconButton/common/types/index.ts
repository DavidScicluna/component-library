import type {
	HorizontalScrollArrowIconButtonDefaultElement,
	HorizontalScrollArrowIconButtonElement,
	HorizontalScrollArrowIconButtonProps,
	HorizontalScrollArrowIconButtonRef
} from '@components/DataDisplay/components/HorizontalScroll';

export type HorizontalScrollOverlayArrowIconButtonDefaultElement = HorizontalScrollArrowIconButtonDefaultElement;
export type HorizontalScrollOverlayArrowIconButtonElement = HorizontalScrollArrowIconButtonElement;

type HorizontalScrollOverlayArrowIconButtonOtherProps = {
	/**
	 * If true, overlay button will be visible
	 *
	 * @default true
	 */
	isVisible?: boolean;
};

export type HorizontalScrollOverlayArrowIconButtonProps<
	Element extends HorizontalScrollOverlayArrowIconButtonElement = HorizontalScrollOverlayArrowIconButtonDefaultElement
> = HorizontalScrollArrowIconButtonProps<Element> & HorizontalScrollOverlayArrowIconButtonOtherProps;

export type HorizontalScrollOverlayArrowIconButtonRef<
	Element extends HorizontalScrollOverlayArrowIconButtonElement = HorizontalScrollOverlayArrowIconButtonDefaultElement
> = HorizontalScrollArrowIconButtonRef<Element>;
