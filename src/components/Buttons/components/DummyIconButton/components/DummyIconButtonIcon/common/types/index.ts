import type { BoxOtherProps } from '@components/Box';
import type { IconDefaultElement, IconElement, IconProps, IconRef } from '@components/DataDisplay';

export type DummyIconButtonIconDefaultElement = IconDefaultElement;
export type DummyIconButtonIconElement = IconElement;

type OmittedIconProps = keyof BoxOtherProps | 'variant';

export type DummyIconButtonIconProps<Element extends DummyIconButtonIconElement> = Omit<
	IconProps<Element>,
	OmittedIconProps
>;

export type DummyIconButtonIconRef<Element extends DummyIconButtonIconElement> = IconRef<Element>;
