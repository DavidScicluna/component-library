import type {
	HorizontalScrollArrowIconButtonDefaultElement,
	HorizontalScrollArrowIconButtonElement,
	HorizontalScrollArrowIconButtonProps,
	HorizontalScrollArrowIconButtonRef
} from '@compontents/DataDisplay/HorizontalScroll';

import type { HorizontalScrollAPIContext } from '@components/DataDisplay/HorizontalScroll/common/types';

export type HorizontalScrollLeftArrowIconButtonDefaultElement = HorizontalScrollArrowIconButtonDefaultElement;
export type HorizontalScrollLeftArrowIconButtonElement = HorizontalScrollArrowIconButtonElement;

export type HorizontalScrollLeftArrowIconButtonScrollAmount = 'single' | 'multiple';

type HorizontalScrollLeftArrowIconButtonOtherProps = {
	scroll: HorizontalScrollAPIContext;
	scrollAmount?: HorizontalScrollLeftArrowIconButtonScrollAmount;
};

export type HorizontalScrollLeftArrowIconButtonProps<
	Element extends HorizontalScrollLeftArrowIconButtonElement = HorizontalScrollLeftArrowIconButtonDefaultElement
> = HorizontalScrollArrowIconButtonProps<Element> & HorizontalScrollLeftArrowIconButtonOtherProps;

export type HorizontalScrollLeftArrowIconButtonRef<
	Element extends HorizontalScrollLeftArrowIconButtonElement = HorizontalScrollLeftArrowIconButtonDefaultElement
> = HorizontalScrollArrowIconButtonRef<Element>;
