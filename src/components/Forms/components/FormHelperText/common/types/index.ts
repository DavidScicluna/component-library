import type { PickFrom } from '@common/types';

import type { TextElement, TextProps, TextRef } from '@components/Typography';

export type FormHelperTextDefaultElement = 'p';
export type FormHelperTextElement = PickFrom<TextElement, 'p'>;

export type FormHelperTextProps<Element extends FormHelperTextElement> = Partial<TextProps<Element>>;

export type FormHelperTextRef<Element extends FormHelperTextElement> = TextRef<Element>;
