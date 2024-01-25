import type { ThemeAppAppearanceProps } from '@common/types';

import type { BoxOtherProps } from '@components/Box';
import type { IconDefaultElement, IconElement, IconProps, IconRef } from '@components/DataDisplay';

export type StepStatusIconDefaultElement = IconDefaultElement;
export type StepStatusIconElement = IconElement;

type OmittedIconProps = keyof BoxOtherProps | keyof ThemeAppAppearanceProps | 'icon' | 'category';

export type StepStatusIconProps<Element extends StepStatusIconElement> = Omit<IconProps<Element>, OmittedIconProps>;

export type StepStatusIconRef<Element extends StepStatusIconElement> = IconRef<Element>;
