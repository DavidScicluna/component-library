import type { TextDefaultElement, TextElement, TextProps, TextRef } from '@components/Typography';

export type CardSubtitleDefaultElement = TextDefaultElement;
export type CardSubtitleElement = TextElement;

export type CardSubtitleProps<Element extends CardSubtitleElement = CardSubtitleDefaultElement> = Partial<
	TextProps<Element>
>;

export type CardSubtitleRef<Element extends CardSubtitleElement = CardSubtitleDefaultElement> = TextRef<Element>;
