import type { ReactNode } from 'react';

import type { PolymorphicElementType } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { StepperDefaultElement, StepperProps } from '@components/Navigation';

export type StepListRenderProps = Pick<StepperProps<StepperDefaultElement>, 'color' | 'colorMode'> & {
	w?: number;
	h?: number;
};

type StepListOtherProps = {
	renderLeft?: (props: StepListRenderProps) => ReactNode;
	renderRight?: (props: StepListRenderProps) => ReactNode;
};

export type StepListProps<Element extends PolymorphicElementType> = BoxProps<Element, StepListOtherProps>;

export type StepListRef<Element extends PolymorphicElementType> = BoxRef<Element>;
