import type { BoxOtherProps } from '@components/Box';
import type { IconDefaultElement, IconElement, IconProps, IconRef } from '@components/DataDisplay';

export type DummyTabIconDefaultElement = IconDefaultElement;
export type DummyTabIconElement = IconElement;

type OmittedIconProps = keyof BoxOtherProps | 'variant';

export type DummyTabIconProps<Element extends DummyTabIconElement = DummyTabIconDefaultElement> = Omit<
	IconProps<Element>,
	OmittedIconProps
>;

export type DummyTabIconRef<Element extends DummyTabIconElement = DummyTabIconDefaultElement> = IconRef<Element>;
