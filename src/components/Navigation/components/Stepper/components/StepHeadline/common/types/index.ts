import type { PolymorphicElementType } from '@common/types';

import type { BoxOtherProps } from '@components/Box';
import type { HeadlineProps, HeadlineRef } from '@components/DataDisplay';

export type StepHeadlineProps<Element extends PolymorphicElementType> = Omit<
	HeadlineProps<Element>,
	keyof BoxOtherProps
>;

export type StepHeadlineRef<Element extends PolymorphicElementType> = HeadlineRef<Element>;
