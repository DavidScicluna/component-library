import type { IconDefaultElement, IconElement, IconProps, IconRef } from '@components/DataDisplay';

export type AlertIconDefaultElement = IconDefaultElement;
export type AlertIconElement = IconElement;

export type AlertIconProps<Element extends AlertIconElement = AlertIconDefaultElement> = IconProps<Element>;

export type AlertIconRef<Element extends AlertIconElement = AlertIconDefaultElement> = IconRef<Element>;
