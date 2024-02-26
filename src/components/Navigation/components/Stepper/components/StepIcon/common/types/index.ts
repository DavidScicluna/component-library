import type { IconDefaultElement, IconElement, IconProps, IconRef } from '@components/DataDisplay';

export type StepIconDefaultElement = IconDefaultElement;
export type StepIconElement = IconElement;

export type StepIconProps<Element extends StepIconElement> = IconProps<Element>;

export type StepIconRef<Element extends StepIconElement> = IconRef<Element>;
