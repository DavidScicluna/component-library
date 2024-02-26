import type { ProgressProps, ProgressRef } from '@components/Feedback';
import type { ProgressDefaultElement, ProgressElement } from '@components/Feedback/components/Progress/common/types';

export type StepProgressDefaultElement = ProgressDefaultElement;
export type StepProgressElement = ProgressElement;

export type StepProgressProps<Element extends ProgressElement> = ProgressProps<Element>;

export type StepProgressRef<Element extends ProgressElement> = ProgressRef<Element>;
