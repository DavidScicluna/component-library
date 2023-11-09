import type { TextDefaultElement, TextElement, TextProps, TextRef } from '@components/Typography';

export type ProgressLabelDefaultElement = TextDefaultElement;
export type ProgressLabelElement = TextElement;

export type ProgressLabelProps<Element extends ProgressLabelElement = ProgressLabelDefaultElement> = Partial<
	TextProps<Element>
>;

export type ProgressLabelRef<Element extends ProgressLabelElement = ProgressLabelDefaultElement> = TextRef<Element>;
