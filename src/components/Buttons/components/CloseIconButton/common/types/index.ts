import type { PolymorphicDefaultElement, ThemeAppAppearanceProps } from '@common/types';

import type { IconButtonDefaultElement, IconButtonElement, IconButtonProps, IconButtonRef } from '@components/Buttons';
import type { TooltipProps } from '@components/Overlay';

export type CloseIconButtonDefaultElement = IconButtonDefaultElement;
export type CloseIconButtonElement = IconButtonElement;

type CloseIconButtonOtherProps = ThemeAppAppearanceProps & {
	/**
	 * If true, the tooltip will be allowed to pop-up on hover of the button
	 *
	 * @default true
	 */
	hasTooltip?: boolean;
} & Pick<TooltipProps<PolymorphicDefaultElement>, 'label' | 'placement'>;

export type CloseIconButtonProps<Element extends CloseIconButtonElement> = IconButtonProps<Element> &
	CloseIconButtonOtherProps;

export type CloseIconButtonRef<Element extends CloseIconButtonElement> = IconButtonRef<Element>;
