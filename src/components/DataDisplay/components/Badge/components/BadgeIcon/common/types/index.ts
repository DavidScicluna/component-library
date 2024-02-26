import type { IconDefaultElement, IconElement, IconProps, IconRef } from '@components/DataDisplay';

export type BadgeIconDefaultElement = IconDefaultElement;
export type BadgeIconElement = IconElement;

export type BadgeIconProps<Element extends BadgeIconElement> = IconProps<Element>;

export type BadgeIconRef<Element extends BadgeIconElement> = IconRef<Element>;
