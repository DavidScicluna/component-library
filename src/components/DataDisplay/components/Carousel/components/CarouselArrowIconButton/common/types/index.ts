import type { PolymorphicDefaultElement, PolymorphicMouseEvent, ResponsiveValue } from '@common/types';

import type { IconButtonDefaultElement, IconButtonElement, IconButtonProps, IconButtonRef } from '@components/Buttons';
import type { CarouselArrowDirection } from '@components/DataDisplay';
import type { TooltipProps } from '@components/Overlay/components/Tooltip';

export type CarouselArrowIconButtonMouseEvent<
	Element extends CarouselArrowIconButtonElement = CarouselArrowIconButtonDefaultElement
> = PolymorphicMouseEvent<Element>;

export type CarouselArrowIconButtonDefaultElement = IconButtonDefaultElement;
export type CarouselArrowIconButtonElement = IconButtonElement;

type CarouselArrowIconButtonOtherProps = Pick<TooltipProps<PolymorphicDefaultElement>, 'label' | 'placement'> & {
	/**
	 * If true, the tooltip will be allowed to pop-up on hover of the button
	 *
	 * @default true
	 */
	hasTooltip?: ResponsiveValue<boolean>;
	/**
	 * The direction in which to scroll to either left or right
	 */
	direction: ResponsiveValue<CarouselArrowDirection>;
};

export type CarouselArrowIconButtonProps<
	Element extends CarouselArrowIconButtonElement = CarouselArrowIconButtonDefaultElement
> = IconButtonProps<Element> & CarouselArrowIconButtonOtherProps;

export type CarouselArrowIconButtonRef<
	Element extends CarouselArrowIconButtonElement = CarouselArrowIconButtonDefaultElement
> = IconButtonRef<Element>;
