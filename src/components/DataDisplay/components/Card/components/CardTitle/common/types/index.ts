import type { TextDefaultElement, TextElement, TextProps, TextRef } from '@components/Typography';

export type CardTitleDefaultElement = TextDefaultElement;
export type CardTitleElement = TextElement;

export type CardTitleProps<Element extends CardTitleElement> = Partial<TextProps<Element>>;

export type CardTitleRef<Element extends CardTitleElement> = TextRef<Element>;
