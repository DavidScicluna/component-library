import type { CommonAppThemeProps } from '@common/types/theme';

import type { IconDefaultElement, IconElement, IconProps, IconRef } from '@components/DataDisplay';

export type ConfirmModalIconDefaultElement = IconDefaultElement;
export type ConfirmModalIconElement = IconElement;

export type ConfirmModalIconProps<Element extends ConfirmModalIconElement = ConfirmModalIconDefaultElement> = Omit<
	IconProps<Element>,
	keyof CommonAppThemeProps
>;

export type ConfirmModalIconRef<Element extends ConfirmModalIconElement = ConfirmModalIconDefaultElement> =
	IconRef<Element>;
