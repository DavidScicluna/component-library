import type { PolymorphicDefaultElement, PolymorphicMouseEvent } from '@common/types';

import type {
	IconButtonDefaultElement,
	IconButtonElement,
	IconButtonProps,
	IconButtonRef
} from '@components/Buttons/IconButton';
import type { TooltipProps } from '@components/Overlay/components/Tooltip';

export type ScrollToTopIconButtonMouseEvent<Element extends IconButtonElement = IconButtonDefaultElement> =
	PolymorphicMouseEvent<Element>;

export type ScrollToTopIconButtonDefaultElement = IconButtonDefaultElement;
export type ScrollToTopIconButtonElement = IconButtonElement;

type ScrollToTopIconButtonOtherProps = Pick<TooltipProps<PolymorphicDefaultElement>, 'label' | 'placement'> & {
	/**
	 * If true, the tooltip will be allowed to pop-up on hover of the button
	 *
	 * @default true
	 */
	hasTooltip?: boolean;
};

export type ScrollToTopIconButtonProps<
	Element extends ScrollToTopIconButtonElement = ScrollToTopIconButtonDefaultElement
> = IconButtonProps<Element> & ScrollToTopIconButtonOtherProps;

export type ScrollToTopIconButtonRef<
	Element extends ScrollToTopIconButtonElement = ScrollToTopIconButtonDefaultElement
> = IconButtonRef<Element>;
