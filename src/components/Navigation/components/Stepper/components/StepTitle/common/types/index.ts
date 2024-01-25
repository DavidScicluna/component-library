import type { TextDefaultElement, TextElement, TextProps, TextRef } from '@components/Typography';

export type StepTitleDefaultElement = TextDefaultElement;
export type StepTitleElement = TextElement;

export type StepTitleProps<Element extends StepTitleElement> = Partial<TextProps<Element>>;

export type StepTitleRef<Element extends StepTitleElement> = TextRef<Element>;
