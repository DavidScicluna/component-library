import type { PickFrom } from '@common/types';

import type { TextElement, TextProps, TextRef } from '@components/Typography';

export type FormDescriptionDefaultElement = 'p';
export type FormDescriptionElement = PickFrom<TextElement, 'p'>;

export type FormDescriptionProps<Element extends FormDescriptionElement> = Partial<TextProps<Element>>;

export type FormDescriptionRef<Element extends FormDescriptionElement> = TextRef<Element>;
