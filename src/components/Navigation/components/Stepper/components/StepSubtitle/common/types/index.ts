import type { TextDefaultElement, TextElement, TextProps, TextRef } from '@components/Typography';

export type StepSubtitleDefaultElement = TextDefaultElement;
export type StepSubtitleElement = TextElement;

export type StepSubtitleProps<Element extends StepSubtitleElement> = Partial<TextProps<Element>>;

export type StepSubtitleRef<Element extends StepSubtitleElement> = TextRef<Element>;
