import type { StepStatus } from '@components/Navigation';
import type { TextDefaultElement, TextElement, TextProps, TextRef } from '@components/Typography';

export type StepStatusDefaultElement = TextDefaultElement;
export type StepStatusElement = TextElement;

type StepStatusOtherProps = { index: number; status: StepStatus };

type OmittedTextProps = 'children' | 'color';

export type StepStatusProps<Element extends StepStatusElement = StepStatusDefaultElement> = Omit<
	Partial<TextProps<Element>>,
	OmittedTextProps
> &
	StepStatusOtherProps;

export type StepStatusRef<Element extends StepStatusElement = StepStatusDefaultElement> = TextRef<Element>;
