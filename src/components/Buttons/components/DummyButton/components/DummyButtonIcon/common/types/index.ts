import type { BoxOtherProps } from '@components/Box';
import type { IconDefaultElement, IconElement, IconProps, IconRef } from '@components/DataDisplay';

export type DummyButtonIconDefaultElement = IconDefaultElement;
export type DummyButtonIconElement = IconElement;

type OmittedIconProps = keyof BoxOtherProps | 'variant';

export type DummyButtonIconProps<Element extends DummyButtonIconElement> = Omit<IconProps<Element>, OmittedIconProps>;

export type DummyButtonIconRef<Element extends DummyButtonIconElement> = IconRef<Element>;
