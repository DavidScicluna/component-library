import type { TextDefaultElement, TextElement, TextProps, TextRef } from '@components/Typography';

export type ConfirmModalSubtitleDefaultElement = TextDefaultElement;
export type ConfirmModalSubtitleElement = TextElement;

export type ConfirmModalSubtitleProps<Element extends ConfirmModalSubtitleElement> = Partial<TextProps<Element>>;

export type ConfirmModalSubtitleRef<Element extends ConfirmModalSubtitleElement> = TextRef<Element>;
