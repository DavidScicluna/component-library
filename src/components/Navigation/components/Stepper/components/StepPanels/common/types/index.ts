import type { ElementType } from 'react';

import type { PolymorphicDefaultElement } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { StepperProps } from '@components/Navigation';

export type StepPanelsProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element>,
	keyof BoxOtherProps
>;

export type StepPanelProps<Element extends ElementType = PolymorphicDefaultElement> = BoxProps<
	Element,
	Pick<StepperProps<Element>, 'index'>
>;

export type StepPanelsRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
