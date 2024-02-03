import type { TextDefaultElement, TextElement, TextProps, TextRef } from '@components/Typography';

export type CardSubtitleDefaultElement = TextDefaultElement;
export type CardSubtitleElement = TextElement;

export type CardSubtitleProps<Element extends CardSubtitleElement> = Partial<TextProps<Element>>;

export type CardSubtitleRef<Element extends CardSubtitleElement> = TextRef<Element>;
