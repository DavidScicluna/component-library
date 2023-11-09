import type { TextDefaultElement, TextElement, TextProps, TextRef } from '@components/Typography';

export type ModalSubtitleDefaultElement = TextDefaultElement;
export type ModalSubtitleElement = TextElement;

export type ModalSubtitleProps<Element extends ModalSubtitleElement = ModalSubtitleDefaultElement> = Partial<
	TextProps<Element>
>;

export type ModalSubtitleRef<Element extends ModalSubtitleElement = ModalSubtitleDefaultElement> = TextRef<Element>;
