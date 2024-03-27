import type {
	PickFrom,
	PolymorphicElementType,
	ResponsiveValueProps,
	TextAlignClass,
	TextLineClampClass,
	TextTransformClass,
	ThemeAppearanceProps,
	ThemeFontSize,
	ThemeFontWeight,
	ThemeLineHeight
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type FormLabelDefaultElement = 'label';
export type FormLabelElement = PickFrom<PolymorphicElementType, 'label'>;

export type FormLabelThemeAppearanceProps = Partial<
	Pick<ThemeAppearanceProps, 'colorMode'> & { color: ThemeAppearanceProps['color'] | string }
>;

export type FormLabelNonResponsiveValueProps = {
	align?: TextAlignClass;
	fontSize?: ThemeFontSize;
	fontWeight?: ThemeFontWeight;
	lineClamp?: TextLineClampClass;
	lineHeight?: ThemeLineHeight;
	textTransform?: TextTransformClass;
};
export type FormLabelResponsiveValueProps = ResponsiveValueProps<FormLabelNonResponsiveValueProps>;

export type FormLabelUniqueProps = FormLabelThemeAppearanceProps & FormLabelResponsiveValueProps;

export type FormLabelProps<Element extends FormLabelElement> = BoxProps<Element, FormLabelUniqueProps>;

export type FormLabelRef<Element extends FormLabelElement> = BoxRef<Element>;
