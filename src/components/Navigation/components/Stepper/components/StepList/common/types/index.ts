import type { ElementType, ReactNode } from 'react';

import type { PolymorphicDefaultElement } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { StepperProps } from '@components/Navigation';

export type StepListRenderProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	StepperProps<Element>,
	'color' | 'colorMode'
> & {
	w?: number;
	h?: number;
};

type StepListOtherProps<Element extends ElementType = PolymorphicDefaultElement> = {
	renderLeft?: (props: StepListRenderProps<Element>) => ReactNode;
	renderRight?: (props: StepListRenderProps<Element>) => ReactNode;
};

export type StepListProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element, StepListOtherProps<Element>>,
	keyof BoxOtherProps
>;

export type StepListRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
