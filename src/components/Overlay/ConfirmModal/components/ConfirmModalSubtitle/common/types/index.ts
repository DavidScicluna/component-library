import type { TextDefaultElement, TextElement, TextProps, TextRef } from '@components/Typography';

export type ConfirmModalSubtitleDefaultElement = TextDefaultElement;
export type ConfirmModalSubtitleElement = TextElement;

export type ConfirmModalSubtitleProps<
	Element extends ConfirmModalSubtitleElement = ConfirmModalSubtitleDefaultElement
> = Partial<TextProps<Element>>;

export type ConfirmModalSubtitleRef<Element extends ConfirmModalSubtitleElement = ConfirmModalSubtitleDefaultElement> =
	TextRef<Element>;
