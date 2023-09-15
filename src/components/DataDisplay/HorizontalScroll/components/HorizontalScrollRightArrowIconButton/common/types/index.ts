import type {
	HorizontalScrollArrowIconButtonDefaultElement,
	HorizontalScrollArrowIconButtonElement,
	HorizontalScrollArrowIconButtonProps,
	HorizontalScrollArrowIconButtonRef
} from '@compontents/DataDisplay/HorizontalScroll';

import type { HorizontalScrollAPIContext } from '@components/DataDisplay/HorizontalScroll/common/types';

export type HorizontalScrollRightArrowIconButtonDefaultElement = HorizontalScrollArrowIconButtonDefaultElement;
export type HorizontalScrollRightArrowIconButtonElement = HorizontalScrollArrowIconButtonElement;

export type HorizontalScrollRightArrowIconButtonScrollAmount = 'single' | 'multiple';

type HorizontalScrollRightArrowIconButtonOtherProps = {
	scroll: HorizontalScrollAPIContext;
	scrollAmount?: HorizontalScrollRightArrowIconButtonScrollAmount;
};

export type HorizontalScrollRightArrowIconButtonProps<
	Element extends HorizontalScrollRightArrowIconButtonElement = HorizontalScrollRightArrowIconButtonDefaultElement
> = HorizontalScrollArrowIconButtonProps<Element> & HorizontalScrollRightArrowIconButtonOtherProps;

export type HorizontalScrollRightArrowIconButtonRef<
	Element extends HorizontalScrollRightArrowIconButtonElement = HorizontalScrollRightArrowIconButtonDefaultElement
> = HorizontalScrollArrowIconButtonRef<Element>;
