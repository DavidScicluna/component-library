import type { MergeTypes, ResponsiveValueProps, ThemeAppAppearanceProps } from '@common/types';

import type { IconButtonDefaultElement, IconButtonElement, IconButtonProps, IconButtonRef } from '@components/Buttons';
import type { TooltipNonResponsiveValueProps } from '@components/Overlay';

export type ClearIconButtonDefaultElement = IconButtonDefaultElement;
export type ClearIconButtonElement = IconButtonElement;

export type ClearIconButtonNonResponsiveValueProps = {
	/**
	 * If true, the tooltip will be allowed to pop-up on hover of the button
	 *
	 * @default true
	 */
	hasTooltip?: boolean;
} & Pick<TooltipNonResponsiveValueProps, 'label' | 'placement'>;
export type ClearIconButtonResponsiveValueProps = ResponsiveValueProps<ClearIconButtonNonResponsiveValueProps>;

export type ClearIconButtonUniqueProps = ThemeAppAppearanceProps & ClearIconButtonResponsiveValueProps;

export type ClearIconButtonProps<Element extends ClearIconButtonElement> = MergeTypes<
	IconButtonProps<Element>,
	ClearIconButtonUniqueProps
>;

export type ClearIconButtonRef<Element extends ClearIconButtonElement> = IconButtonRef<Element>;
