import type { PolymorphicDefaultElement } from '@common/types';

import type {
	IconButtonDefaultElement,
	IconButtonElement,
	IconButtonProps,
	IconButtonRef
} from '@components/Buttons/components/IconButton';
import type { HorizontalScrollArrowDirection } from '@components/DataDisplay/components/HorizontalScroll';
import type { TooltipProps } from '@components/Overlay/components/Tooltip';

export type HorizontalScrollArrowIconButtonDefaultElement = IconButtonDefaultElement;
export type HorizontalScrollArrowIconButtonElement = IconButtonElement;

type HorizontalScrollArrowIconButtonOtherProps = Pick<
	TooltipProps<PolymorphicDefaultElement>,
	'label' | 'placement'
> & {
	/**
	 * If true, the tooltip will be allowed to pop-up on hover of the button
	 *
	 * @default true
	 */
	hasTooltip?: boolean;
	/**
	 * The direction in which to scroll to either left or right
	 */
	direction: HorizontalScrollArrowDirection;
};

export type HorizontalScrollArrowIconButtonProps<
	Element extends HorizontalScrollArrowIconButtonElement = HorizontalScrollArrowIconButtonDefaultElement
> = IconButtonProps<Element> & HorizontalScrollArrowIconButtonOtherProps;

export type HorizontalScrollArrowIconButtonRef<
	Element extends HorizontalScrollArrowIconButtonElement = HorizontalScrollArrowIconButtonDefaultElement
> = IconButtonRef<Element>;
