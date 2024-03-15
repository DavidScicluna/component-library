import type { MergeTypes, PolymorphicDefaultElement, ResponsiveValue, ThemeAppAppearanceProps } from '@common/types';

import type { IconButtonDefaultElement, IconButtonElement, IconButtonProps, IconButtonRef } from '@components/Buttons';
import type { TooltipProps } from '@components/Overlay';

export type ClearIconButtonDefaultElement = IconButtonDefaultElement;
export type ClearIconButtonElement = IconButtonElement;

type ClearIconButtonOtherProps = ThemeAppAppearanceProps & {
	/**
	 * If true, the tooltip will be allowed to pop-up on hover of the button
	 *
	 * @default true
	 */
	hasTooltip?: ResponsiveValue<boolean>;
} & Pick<TooltipProps<PolymorphicDefaultElement>, 'label' | 'placement'>;

export type ClearIconButtonProps<Element extends ClearIconButtonElement> = MergeTypes<
	IconButtonProps<Element>,
	ClearIconButtonOtherProps
>;

export type ClearIconButtonRef<Element extends ClearIconButtonElement> = IconButtonRef<Element>;
