import type { MergeTypes, ResponsiveValueProps, ThemeAppAppearanceProps } from '@common/types';

import type { IconButtonDefaultElement, IconButtonElement, IconButtonProps, IconButtonRef } from '@components/Buttons';
import type { TooltipNonResponsiveValueProps } from '@components/Overlay';

export type CloseIconButtonDefaultElement = IconButtonDefaultElement;
export type CloseIconButtonElement = IconButtonElement;

export type CloseIconButtonNonResponsiveValueProps = {
	/**
	 * If true, the tooltip will be allowed to pop-up on hover of the button
	 *
	 * @default true
	 */
	hasTooltip?: boolean;
} & Pick<TooltipNonResponsiveValueProps, 'label' | 'placement'>;
export type CloseIconButtonResponsiveValueProps = ResponsiveValueProps<CloseIconButtonNonResponsiveValueProps>;

export type CloseIconButtonUniqueProps = ThemeAppAppearanceProps & CloseIconButtonResponsiveValueProps;

export type CloseIconButtonProps<Element extends CloseIconButtonElement> = MergeTypes<
	IconButtonProps<Element>,
	CloseIconButtonUniqueProps
>;

export type CloseIconButtonRef<Element extends CloseIconButtonElement> = IconButtonRef<Element>;
