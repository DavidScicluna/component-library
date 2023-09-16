import type {
	HorizontalScrollAPIContext,
	HorizontalScrollArrowIconButtonDefaultElement,
	HorizontalScrollArrowIconButtonElement,
	HorizontalScrollArrowIconButtonProps,
	HorizontalScrollArrowIconButtonRef
} from '@components/DataDisplay/components/HorizontalScroll';

export type HorizontalScrollLeftArrowIconButtonDefaultElement = HorizontalScrollArrowIconButtonDefaultElement;
export type HorizontalScrollLeftArrowIconButtonElement = HorizontalScrollArrowIconButtonElement;

export type HorizontalScrollLeftArrowIconButtonScrollAmount = 'single' | 'multiple';

type HorizontalScrollLeftArrowIconButtonOtherProps = {
	scroll?: HorizontalScrollAPIContext;
	scrollAmount?: HorizontalScrollLeftArrowIconButtonScrollAmount;
};

export type HorizontalScrollLeftArrowIconButtonProps<
	Element extends HorizontalScrollLeftArrowIconButtonElement = HorizontalScrollLeftArrowIconButtonDefaultElement
> = Omit<HorizontalScrollArrowIconButtonProps<Element>, 'direction'> & HorizontalScrollLeftArrowIconButtonOtherProps;

export type HorizontalScrollLeftArrowIconButtonRef<
	Element extends HorizontalScrollLeftArrowIconButtonElement = HorizontalScrollLeftArrowIconButtonDefaultElement
> = HorizontalScrollArrowIconButtonRef<Element>;
