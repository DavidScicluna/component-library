import type { BoxOtherProps } from '@components/Box';
import type { IconDefaultElement, IconElement, IconProps, IconRef } from '@components/DataDisplay';

export type TabIconDefaultElement = IconDefaultElement;
export type TabIconElement = IconElement;

type OmittedIconProps = keyof BoxOtherProps | 'variant';

export type TabIconProps<Element extends TabIconElement> = Omit<IconProps<Element>, OmittedIconProps>;

export type TabIconRef<Element extends TabIconElement> = IconRef<Element>;
