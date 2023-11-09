import type { ElementType } from 'react';

import type { BoxOtherProps } from '@components/Box';
import type { HeadlineProps, HeadlineRef } from '@components/DataDisplay';

export type StepHeadlineProps<Element extends ElementType> = Omit<HeadlineProps<Element>, keyof BoxOtherProps>;

export type StepHeadlineRef<Element extends ElementType> = HeadlineRef<Element>;
