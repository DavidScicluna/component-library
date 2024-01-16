import type { ReactNode } from 'react';

import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { StepperProps } from '@components/Navigation';

export type StepListRenderProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Pick<
	StepperProps<Element>,
	'color' | 'colorMode'
> & {
	w?: number;
	h?: number;
};

type StepListOtherProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = {
	renderLeft?: (props: StepListRenderProps<Element>) => ReactNode;
	renderRight?: (props: StepListRenderProps<Element>) => ReactNode;
};

export type StepListProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element, StepListOtherProps<Element>>,
	keyof BoxOtherProps
>;

export type StepListRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxRef<Element>;
