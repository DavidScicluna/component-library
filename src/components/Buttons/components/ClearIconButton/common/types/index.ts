import type { PolymorphicDefaultElement } from '@common/types';

import type {
	IconButtonDefaultElement,
	IconButtonElement,
	IconButtonProps,
	IconButtonRef
} from '@components/Buttons/components/IconButton';
import type { TooltipProps } from '@components/Overlay/components/Tooltip';

export type ClearIconButtonDefaultElement = IconButtonDefaultElement;
export type ClearIconButtonElement = IconButtonElement;

type ClearIconButtonOtherProps = Pick<TooltipProps<PolymorphicDefaultElement>, 'label' | 'placement'> & {
	/**
	 * If true, the tooltip will be allowed to pop-up on hover of the button
	 *
	 * @default true
	 */
	hasTooltip?: boolean;
};

export type ClearIconButtonProps<Element extends ClearIconButtonElement = ClearIconButtonDefaultElement> =
	IconButtonProps<Element> & ClearIconButtonOtherProps;

export type ClearIconButtonRef<Element extends ClearIconButtonElement = ClearIconButtonDefaultElement> =
	IconButtonRef<Element>;
