import type { MergeTypes, ResponsiveValueProps, ThemeAppAppearanceProps } from '@common/types';

import type { IconButtonDefaultElement, IconButtonElement, IconButtonProps, IconButtonRef } from '@components/Buttons';
import type { TooltipNonResponsiveValueProps } from '@components/Overlay';

export type DeleteIconButtonDefaultElement = IconButtonDefaultElement;
export type DeleteIconButtonElement = IconButtonElement;

export type DeleteIconButtonNonResponsiveValueProps = {
	/**
	 * If true, the tooltip will be allowed to pop-up on hover of the button
	 *
	 * @default true
	 */
	hasTooltip?: boolean;
} & Pick<TooltipNonResponsiveValueProps, 'label' | 'placement'>;
export type DeleteIconButtonResponsiveValueProps = ResponsiveValueProps<DeleteIconButtonNonResponsiveValueProps>;

export type DeleteIconButtonUniqueProps = ThemeAppAppearanceProps & DeleteIconButtonResponsiveValueProps;

export type DeleteIconButtonProps<Element extends DeleteIconButtonElement> = MergeTypes<
	IconButtonProps<Element>,
	DeleteIconButtonUniqueProps
>;

export type DeleteIconButtonRef<Element extends DeleteIconButtonElement> = IconButtonRef<Element>;
