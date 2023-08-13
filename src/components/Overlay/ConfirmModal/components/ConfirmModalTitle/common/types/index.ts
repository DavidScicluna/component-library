import type { TextDefaultElement, TextElement, TextProps, TextRef } from '@components/Typography';

export type ConfirmModalTitleDefaultElement = TextDefaultElement;
export type ConfirmModalTitleElement = TextElement;

export type ConfirmModalTitleProps<Element extends ConfirmModalTitleElement = ConfirmModalTitleDefaultElement> =
	Partial<TextProps<Element>>;

export type ConfirmModalTitleRef<Element extends ConfirmModalTitleElement = ConfirmModalTitleDefaultElement> =
	TextRef<Element>;
