import type { PolymorphicDefaultElement, ThemeAppAppearanceProps } from '@common/types';

import type { IconButtonDefaultElement, IconButtonElement, IconButtonProps, IconButtonRef } from '@components/Buttons';
import type { TooltipProps } from '@components/Overlay';

export type DeleteIconButtonDefaultElement = IconButtonDefaultElement;
export type DeleteIconButtonElement = IconButtonElement;

type DeleteIconButtonOtherProps = ThemeAppAppearanceProps & {
	/**
	 * If true, the tooltip will be allowed to pop-up on hover of the button
	 *
	 * @default true
	 */
	hasTooltip?: boolean;
} & Pick<TooltipProps<PolymorphicDefaultElement>, 'label' | 'placement'>;

export type DeleteIconButtonProps<Element extends DeleteIconButtonElement> = IconButtonProps<Element> &
	DeleteIconButtonOtherProps;

export type DeleteIconButtonRef<Element extends DeleteIconButtonElement> = IconButtonRef<Element>;
