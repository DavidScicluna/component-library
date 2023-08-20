import type { TextDefaultElement, TextElement, TextProps, TextRef } from '@components/Typography';

export type MessageTitleDefaultElement = TextDefaultElement;
export type MessageTitleElement = TextElement;

export type MessageTitleProps<Element extends MessageTitleElement = MessageTitleDefaultElement> = Partial<
	TextProps<Element>
>;

export type MessageTitleRef<Element extends MessageTitleElement = MessageTitleDefaultElement> = TextRef<Element>;
