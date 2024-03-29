import type { TextDefaultElement, TextElement, TextProps, TextRef } from '@components/Typography';

export type AlertDescriptionDefaultElement = TextDefaultElement;
export type AlertDescriptionElement = TextElement;

export type AlertDescriptionProps<Element extends AlertDescriptionElement> = Partial<TextProps<Element>>;

export type AlertDescriptionRef<Element extends AlertDescriptionElement> = TextRef<Element>;
