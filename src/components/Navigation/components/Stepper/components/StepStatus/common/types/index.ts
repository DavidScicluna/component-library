import type { TextDefaultElement, TextElement, TextProps, TextRef } from '@components/Typography';

export type StepStatusDefaultElement = TextDefaultElement;
export type StepStatusElement = TextElement;

type OmittedTextProps = 'children' | 'color';

export type StepStatusProps<Element extends StepStatusElement> = Omit<Partial<TextProps<Element>>, OmittedTextProps>;

export type StepStatusRef<Element extends StepStatusElement> = TextRef<Element>;
