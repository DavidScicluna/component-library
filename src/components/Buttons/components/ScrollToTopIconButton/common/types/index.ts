import type { MergeTypes, ResponsiveValueProps, ThemeAppAppearanceProps } from '@common/types';

import type { IconButtonDefaultElement, IconButtonElement, IconButtonProps, IconButtonRef } from '@components/Buttons';
import type { TooltipNonResponsiveValueProps } from '@components/Overlay';

export type ScrollToTopIconButtonDefaultElement = IconButtonDefaultElement;
export type ScrollToTopIconButtonElement = IconButtonElement;

export type ScrollToTopIconButtonNonResponsiveValueProps = {
	/**
	 * If true, the tooltip will be allowed to pop-up on hover of the button
	 *
	 * @default true
	 */
	hasTooltip?: boolean;
} & Pick<TooltipNonResponsiveValueProps, 'label' | 'placement'>;
export type ScrollToTopIconButtonResponsiveValueProps =
	ResponsiveValueProps<ScrollToTopIconButtonNonResponsiveValueProps>;

export type ScrollToTopIconButtonUniqueProps = ThemeAppAppearanceProps & ScrollToTopIconButtonResponsiveValueProps;

export type ScrollToTopIconButtonProps<Element extends ScrollToTopIconButtonElement> = MergeTypes<
	IconButtonProps<Element>,
	ScrollToTopIconButtonUniqueProps
>;

export type ScrollToTopIconButtonRef<Element extends ScrollToTopIconButtonElement> = IconButtonRef<Element>;
