import type { TextDefaultElement, TextElement, TextProps, TextRef } from '@components/Typography';

export type MessageSubtitleDefaultElement = TextDefaultElement;
export type MessageSubtitleElement = TextElement;

export type MessageSubtitleProps<Element extends MessageSubtitleElement> = Partial<TextProps<Element>>;

export type MessageSubtitleRef<Element extends MessageSubtitleElement> = TextRef<Element>;
