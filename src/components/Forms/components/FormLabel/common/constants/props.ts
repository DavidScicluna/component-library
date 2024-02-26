import type {
	TextAlignClass,
	TextLineClampClass,
	TextTransformClass,
	ThemeFontWeight,
	ThemeLineHeight
} from '@common/types';

import type { FormLabelDefaultElement } from '../types';

export const DEFAULT_FORM_LABEL_AS: FormLabelDefaultElement = 'label';

export const DEFAULT_FORM_LABEL_ALIGN: TextAlignClass = 'left';
export const DEFAULT_FORM_LABEL_FONT_WEIGHT: ThemeFontWeight = 'semibold';
export const DEFAULT_FORM_LABEL_LINE_CLAMP: TextLineClampClass = 'none';
export const DEFAULT_FORM_LABEL_LINE_HEIGHT: ThemeLineHeight = 'tight';
export const DEFAULT_FORM_LABEL_TEXT_TRANSFORM: TextTransformClass = 'capitalize';
