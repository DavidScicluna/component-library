import type { BoxOtherProps } from '@components/Box';
import type { IconDefaultElement, IconElement, IconProps, IconRef } from '@components/DataDisplay';

export type ButtonIconDefaultElement = IconDefaultElement;
export type ButtonIconElement = IconElement;

type OmittedIconProps = keyof BoxOtherProps | 'variant';

export type ButtonIconProps<Element extends ButtonIconElement> = Omit<IconProps<Element>, OmittedIconProps>;

export type ButtonIconRef<Element extends ButtonIconElement> = IconRef<Element>;
