import type {
	HorizontalScrollAPIContext,
	HorizontalScrollArrowIconButtonDefaultElement,
	HorizontalScrollArrowIconButtonElement,
	HorizontalScrollArrowIconButtonProps,
	HorizontalScrollArrowIconButtonRef
} from '@components/DataDisplay/components/HorizontalScroll';

export type HorizontalScrollRightArrowIconButtonDefaultElement = HorizontalScrollArrowIconButtonDefaultElement;
export type HorizontalScrollRightArrowIconButtonElement = HorizontalScrollArrowIconButtonElement;

export type HorizontalScrollRightArrowIconButtonScrollAmount = 'single' | 'multiple';

type HorizontalScrollRightArrowIconButtonOtherProps = {
	scroll?: HorizontalScrollAPIContext;
	scrollAmount?: HorizontalScrollRightArrowIconButtonScrollAmount;
};

export type HorizontalScrollRightArrowIconButtonProps<
	Element extends HorizontalScrollRightArrowIconButtonElement = HorizontalScrollRightArrowIconButtonDefaultElement
> = Omit<HorizontalScrollArrowIconButtonProps<Element>, 'direction'> & HorizontalScrollRightArrowIconButtonOtherProps;

export type HorizontalScrollRightArrowIconButtonRef<
	Element extends HorizontalScrollRightArrowIconButtonElement = HorizontalScrollRightArrowIconButtonDefaultElement
> = HorizontalScrollArrowIconButtonRef<Element>;
