import type { ThemeAppAppearanceProps } from '@common/types';

import type { BoxOtherProps } from '@components/Box';
import type { IconDefaultElement, IconElement, IconProps, IconRef } from '@components/DataDisplay';
import type { StepStatus } from '@components/Navigation';

export type StepStatusIconDefaultElement = IconDefaultElement;
export type StepStatusIconElement = IconElement;

type StepStatusIconOtherProps = { index: number; status: StepStatus };

type OmittedIconProps = keyof BoxOtherProps | keyof ThemeAppAppearanceProps | 'icon' | 'category';

export type StepStatusIconProps<Element extends StepStatusIconElement = StepStatusIconDefaultElement> = Omit<
	IconProps<Element>,
	OmittedIconProps
> &
	StepStatusIconOtherProps;

export type StepStatusIconRef<Element extends StepStatusIconElement = StepStatusIconDefaultElement> = IconRef<Element>;
