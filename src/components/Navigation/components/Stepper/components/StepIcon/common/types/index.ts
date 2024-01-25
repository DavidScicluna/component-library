import type { BoxOtherProps } from '@components/Box';
import type { IconDefaultElement, IconElement, IconProps, IconRef } from '@components/DataDisplay';

export type StepIconDefaultElement = IconDefaultElement;
export type StepIconElement = IconElement;

type OmittedIconProps = keyof BoxOtherProps | 'variant';

export type StepIconProps<Element extends StepIconElement> = Omit<IconProps<Element>, OmittedIconProps>;

export type StepIconRef<Element extends StepIconElement> = IconRef<Element>;
