import type { TextDefaultElement, TextElement, TextProps, TextRef } from '@components/Typography';

export type ModalTitleDefaultElement = TextDefaultElement;
export type ModalTitleElement = TextElement;

export type ModalTitleProps<Element extends ModalTitleElement = ModalTitleDefaultElement> = Partial<TextProps<Element>>;

export type ModalTitleRef<Element extends ModalTitleElement = ModalTitleDefaultElement> = TextRef<Element>;
