import type { PolymorphicDefaultElement } from '@common/types';

import type {
	IconButtonDefaultElement,
	IconButtonElement,
	IconButtonProps,
	IconButtonRef
} from '@components/Buttons/components/IconButton';
import type { TooltipProps } from '@components/Overlay/components/Tooltip';

export type DeleteIconButtonDefaultElement = IconButtonDefaultElement;
export type DeleteIconButtonElement = IconButtonElement;

type DeleteIconButtonOtherProps = Pick<TooltipProps<PolymorphicDefaultElement>, 'label' | 'placement'> & {
	/**
	 * If true, the tooltip will be allowed to pop-up on hover of the button
	 *
	 * @default true
	 */
	hasTooltip?: boolean;
};

export type DeleteIconButtonProps<Element extends DeleteIconButtonElement = DeleteIconButtonDefaultElement> =
	IconButtonProps<Element> & DeleteIconButtonOtherProps;

export type DeleteIconButtonRef<Element extends DeleteIconButtonElement = DeleteIconButtonDefaultElement> =
	IconButtonRef<Element>;
