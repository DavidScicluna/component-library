import type { PolymorphicDefaultElement, ThemeAppAppearanceProps } from '@common/types';

import type { IconButtonDefaultElement, IconButtonElement, IconButtonProps, IconButtonRef } from '@components/Buttons';
import type { TooltipProps } from '@components/Overlay';

export type ScrollToTopIconButtonDefaultElement = IconButtonDefaultElement;
export type ScrollToTopIconButtonElement = IconButtonElement;

type ScrollToTopIconButtonOtherProps = ThemeAppAppearanceProps & {
	/**
	 * If true, the tooltip will be allowed to pop-up on hover of the button
	 *
	 * @default true
	 */
	hasTooltip?: boolean;
} & Pick<TooltipProps<PolymorphicDefaultElement>, 'label' | 'placement'>;

export type ScrollToTopIconButtonProps<Element extends ScrollToTopIconButtonElement> = IconButtonProps<Element> &
	ScrollToTopIconButtonOtherProps;

export type ScrollToTopIconButtonRef<Element extends ScrollToTopIconButtonElement> = IconButtonRef<Element>;
