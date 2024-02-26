import type { PolymorphicElementType } from '@common/types';

import type { HeadlineProps, HeadlineRef } from '@components/DataDisplay';

export type StepHeadlineProps<Element extends PolymorphicElementType> = HeadlineProps<Element>;

export type StepHeadlineRef<Element extends PolymorphicElementType> = HeadlineRef<Element>;
