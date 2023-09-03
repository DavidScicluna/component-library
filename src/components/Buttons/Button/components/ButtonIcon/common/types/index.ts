import type { BoxOtherProps } from '@components/Box';
import type { IconDefaultElement, IconElement, IconProps, IconRef } from '@components/DataDisplay';

export type ButtonIconDefaultElement = IconDefaultElement;
export type ButtonIconElement = IconElement;

type IconOmittedProps = keyof BoxOtherProps | 'variant';

export type ButtonIconProps<Element extends ButtonIconElement = ButtonIconDefaultElement> = Omit<
	IconProps<Element>,
	IconOmittedProps
>;

export type ButtonIconRef<Element extends ButtonIconElement = ButtonIconDefaultElement> = IconRef<Element>;
