import type { PolymorphicElementType } from '@common/types';

import type { BoxOtherProps } from '@components/Box';
import type { ProgressProps, ProgressRef } from '@components/Feedback';

export type StepProgressProps<Element extends PolymorphicElementType> = Omit<
	ProgressProps<Element>,
	keyof BoxOtherProps
>;

export type StepProgressRef<Element extends PolymorphicElementType> = ProgressRef<Element>;
