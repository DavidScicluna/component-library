import type { PickFrom } from '@common/types';

import type { TextElement, TextProps, TextRef } from '@components/Typography';

export type FormLabelDefaultElement = 'label';
export type FormLabelElement = PickFrom<TextElement, 'label'>;

export type FormLabelProps<Element extends FormLabelElement = FormLabelDefaultElement> = Partial<TextProps<Element>>;

export type FormLabelRef<Element extends FormLabelElement = FormLabelDefaultElement> = TextRef<Element>;