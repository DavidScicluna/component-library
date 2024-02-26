import type { IconDefaultElement, IconElement, IconProps, IconRef } from '@components/DataDisplay';

export type ButtonIconDefaultElement = IconDefaultElement;
export type ButtonIconElement = IconElement;

export type ButtonIconProps<Element extends ButtonIconElement> = IconProps<Element>;

export type ButtonIconRef<Element extends ButtonIconElement> = IconRef<Element>;
