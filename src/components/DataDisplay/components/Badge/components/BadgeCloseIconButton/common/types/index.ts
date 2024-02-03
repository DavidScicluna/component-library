import type { PolymorphicDefaultElement } from '@common/types';

import type { IconButtonDefaultElement, IconButtonElement, IconButtonProps, IconButtonRef } from '@components/Buttons';
import type { TooltipProps } from '@components/Overlay';

export type BadgeCloseIconButtonDefaultElement = IconButtonDefaultElement;
export type BadgeCloseIconButtonElement = IconButtonElement;

type BadgeCloseIconButtonOtherProps = Pick<TooltipProps<PolymorphicDefaultElement>, 'label' | 'placement'> & {
	/**
	 * If true, the tooltip will be allowed to pop-up on hover of the button
	 *
	 * @default true
	 */
	hasTooltip?: boolean;
};

export type BadgeCloseIconButtonProps<Element extends BadgeCloseIconButtonElement> = BadgeCloseIconButtonOtherProps &
	Omit<IconButtonProps<Element>, 'variant'>;

export type BadgeCloseIconButtonRef<Element extends BadgeCloseIconButtonElement> = IconButtonRef<Element>;
