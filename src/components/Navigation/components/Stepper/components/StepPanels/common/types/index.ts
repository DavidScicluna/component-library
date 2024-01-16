import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { StepperProps } from '@components/Navigation';

export type StepPanelsProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element>,
	keyof BoxOtherProps
>;

export type StepPanelProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxProps<
	Element,
	Pick<StepperProps<Element>, 'index'>
>;

export type StepPanelsRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxRef<Element>;
