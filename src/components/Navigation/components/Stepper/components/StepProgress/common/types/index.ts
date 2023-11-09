import type { ElementType } from 'react';

import type { BoxOtherProps } from '@components/Box';
import type { ProgressProps, ProgressRef } from '@components/Feedback';

export type StepProgressProps<Element extends ElementType> = Omit<ProgressProps<Element>, keyof BoxOtherProps>;

export type StepProgressRef<Element extends ElementType> = ProgressRef<Element>;
