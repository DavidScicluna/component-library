import type {
	PolymorphicDefaultElement,
	PolymorphicMouseEvent,
	ResponsiveValue,
	ThemeAppAppearanceProps
} from '@common/types';

import type { IconButtonDefaultElement, IconButtonElement, IconButtonProps, IconButtonRef } from '@components/Buttons';
import type { CarouselArrowDirection } from '@components/DataDisplay';
import type { TooltipProps } from '@components/Overlay';

export type CarouselArrowIconButtonDefaultElement = IconButtonDefaultElement;
export type CarouselArrowIconButtonElement = IconButtonElement;

export type CarouselArrowIconButtonMouseEvent<Element extends CarouselArrowIconButtonElement> =
	PolymorphicMouseEvent<Element>;

type CarouselArrowIconButtonOtherProps = ThemeAppAppearanceProps & {
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
} & Pick<TooltipProps<PolymorphicDefaultElement>, 'label' | 'placement'>;

export type CarouselArrowIconButtonProps<Element extends CarouselArrowIconButtonElement> = IconButtonProps<Element> &
	CarouselArrowIconButtonOtherProps;

export type CarouselArrowIconButtonRef<Element extends CarouselArrowIconButtonElement> = IconButtonRef<Element>;
