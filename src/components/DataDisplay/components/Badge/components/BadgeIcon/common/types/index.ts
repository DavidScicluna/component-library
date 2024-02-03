import type { BoxOtherProps } from '@components/Box';
import type { IconDefaultElement, IconElement, IconProps, IconRef } from '@components/DataDisplay';

export type BadgeIconDefaultElement = IconDefaultElement;
export type BadgeIconElement = IconElement;

type OmittedIconProps = keyof BoxOtherProps | 'variant';

export type BadgeIconProps<Element extends BadgeIconElement> = Omit<IconProps<Element>, OmittedIconProps>;

export type BadgeIconRef<Element extends BadgeIconElement> = IconRef<Element>;
