import type { TextDefaultElement, TextElement, TextProps, TextRef } from '@components/Typography';

export type AlertLabelDefaultElement = TextDefaultElement;
export type AlertLabelElement = TextElement;

export type AlertLabelProps<Element extends AlertLabelElement> = Partial<TextProps<Element>>;

export type AlertLabelRef<Element extends AlertLabelElement> = TextRef<Element>;
