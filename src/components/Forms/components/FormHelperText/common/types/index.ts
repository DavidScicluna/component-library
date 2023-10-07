import type { PickFrom } from '@common/types';

import type { TextElement, TextProps, TextRef } from '@components/Typography';

export type FormHelperTextDefaultElement = 'label';
export type FormHelperTextElement = PickFrom<TextElement, 'label'>;

export type FormHelperTextProps<Element extends FormHelperTextElement = FormHelperTextDefaultElement> = Partial<
	TextProps<Element>
>;

export type FormHelperTextRef<Element extends FormHelperTextElement = FormHelperTextDefaultElement> = TextRef<Element>;
