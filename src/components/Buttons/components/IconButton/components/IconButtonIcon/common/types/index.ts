import type { BoxOtherProps } from '@components/Box';
import type { IconDefaultElement, IconElement, IconProps, IconRef } from '@components/DataDisplay';

export type IconButtonIconDefaultElement = IconDefaultElement;
export type IconButtonIconElement = IconElement;

type OmittedIconProps = keyof BoxOtherProps | 'variant';

export type IconButtonIconProps<Element extends IconButtonIconElement> = Omit<IconProps<Element>, OmittedIconProps>;

export type IconButtonIconRef<Element extends IconButtonIconElement> = IconRef<Element>;
