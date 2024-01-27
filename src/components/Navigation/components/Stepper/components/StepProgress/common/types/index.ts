import type { BoxOtherProps } from '@components/Box';
import type { ProgressProps, ProgressRef } from '@components/Feedback';
import type { ProgressDefaultElement, ProgressElement } from '@components/Feedback/components/Progress/common/types';

export type StepProgressDefaultElement = ProgressDefaultElement;
export type StepProgressElement = ProgressElement;

export type StepProgressProps<Element extends ProgressElement> = Omit<ProgressProps<Element>, keyof BoxOtherProps>;

export type StepProgressRef<Element extends ProgressElement> = ProgressRef<Element>;
