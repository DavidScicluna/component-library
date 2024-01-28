import type { IconDefaultElement, IconElement, IconProps, IconRef } from '@components/DataDisplay';

export type MessageIconDefaultElement = IconDefaultElement;
export type MessageIconElement = IconElement;

export type MessageIconProps<Element extends MessageIconElement> = IconProps<Element>;

export type MessageIconRef<Element extends MessageIconElement> = IconRef<Element>;
