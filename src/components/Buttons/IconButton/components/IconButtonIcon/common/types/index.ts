import type { BoxOtherProps } from '@components/Box';
import type { IconDefaultElement, IconElement, IconProps, IconRef } from '@components/DataDisplay';

export type IconButtonIconDefaultElement = IconDefaultElement;
export type IconButtonIconElement = IconElement;

type IconOmittedProps = keyof BoxOtherProps | 'variant';

export type IconButtonIconProps<Element extends IconButtonIconElement = IconButtonIconDefaultElement> = Omit<
	IconProps<Element>,
	IconOmittedProps
>;

export type IconButtonIconRef<Element extends IconButtonIconElement = IconButtonIconDefaultElement> = IconRef<Element>;
