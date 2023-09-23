import type { BoxOtherProps } from '@components/Box';
import type { IconDefaultElement, IconElement, IconProps, IconRef } from '@components/DataDisplay';

export type DummyBadgeIconDefaultElement = IconDefaultElement;
export type DummyBadgeIconElement = IconElement;

type OmittedIconProps = keyof BoxOtherProps | 'variant';

export type DummyBadgeIconProps<Element extends DummyBadgeIconElement = DummyBadgeIconDefaultElement> = Omit<
	IconProps<Element>,
	OmittedIconProps
>;

export type DummyBadgeIconRef<Element extends DummyBadgeIconElement = DummyBadgeIconDefaultElement> = IconRef<Element>;
