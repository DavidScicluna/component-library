import type { TextDefaultElement, TextElement, TextProps, TextRef } from '@components/Typography';

export type StepTitleDefaultElement = TextDefaultElement;
export type StepTitleElement = TextElement;

export type StepTitleProps<Element extends StepTitleElement = StepTitleDefaultElement> = Partial<TextProps<Element>>;

export type StepTitleRef<Element extends StepTitleElement = StepTitleDefaultElement> = TextRef<Element>;
