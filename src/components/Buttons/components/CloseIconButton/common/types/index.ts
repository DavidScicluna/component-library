import type { PolymorphicDefaultElement } from '@common/types';

import type { IconButtonDefaultElement, IconButtonElement, IconButtonProps, IconButtonRef } from '@components/Buttons';
import type { TooltipProps } from '@components/Overlay';

export type CloseIconButtonDefaultElement = IconButtonDefaultElement;
export type CloseIconButtonElement = IconButtonElement;

type CloseIconButtonOtherProps = Pick<TooltipProps<PolymorphicDefaultElement>, 'label' | 'placement'> & {
	/**
	 * If true, the tooltip will be allowed to pop-up on hover of the button
	 *
	 * @default true
	 */
	hasTooltip?: boolean;
};

export type CloseIconButtonProps<Element extends CloseIconButtonElement = CloseIconButtonDefaultElement> =
	IconButtonProps<Element> & CloseIconButtonOtherProps;

export type CloseIconButtonRef<Element extends CloseIconButtonElement = CloseIconButtonDefaultElement> =
	IconButtonRef<Element>;
