import classNames from 'classnames';

import { DEFAULT_COLOR } from '@common/constants';
import { useAppTheme, useGetClass, useGetColor } from '@common/hooks';
import type { ClassName, ThemeColor } from '@common/types';
import { checkColorType } from '@common/utils';

import { useFormControlContext, useFormControlFontSize } from '@components/Forms';

import {
	DEFAULT_FORM_LABEL_ALIGN,
	DEFAULT_FORM_LABEL_FONT_WEIGHT,
	DEFAULT_FORM_LABEL_LINE_CLAMP,
	DEFAULT_FORM_LABEL_LINE_HEIGHT,
	DEFAULT_FORM_LABEL_TEXT_TRANSFORM
} from '../constants';
import type { FormLabelUniqueProps } from '../types';

import useFormLabelResponsiveValues from './useFormLabelResponsiveValues';

type PickedFormLabelUniqueProps =
	| 'color'
	| 'colorMode'
	| 'align'
	| 'fontSize'
	| 'fontWeight'
	| 'lineClamp'
	| 'lineHeight'
	| 'textTransform';

type UseFormLabelClassesProps = Pick<FormLabelUniqueProps, PickedFormLabelUniqueProps>;
type UseFormLabelClassesReturn = ClassName;

const useFormLabelClasses = (props: UseFormLabelClassesProps): UseFormLabelClassesReturn => {
	const { colorMode: DEFAULT_FORM_LABEL_COLORMODE } = useAppTheme();

	const { size } = useFormControlContext();

	const {
		color = DEFAULT_COLOR,
		colorMode = DEFAULT_FORM_LABEL_COLORMODE,
		align: alignProp,
		fontSize: fontSizeProp,
		fontWeight: fontWeightProp,
		lineClamp: lineClampProp,
		lineHeight: lineHeightProp,
		textTransform: textTransformProp
	} = props;

	const DEFAULT_FORM_LABEL_FONT_SIZE = useFormControlFontSize({ size });

	const {
		align = DEFAULT_FORM_LABEL_ALIGN,
		fontSize = DEFAULT_FORM_LABEL_FONT_SIZE.label,
		fontWeight = DEFAULT_FORM_LABEL_FONT_WEIGHT,
		lineClamp = DEFAULT_FORM_LABEL_LINE_CLAMP,
		lineHeight = DEFAULT_FORM_LABEL_LINE_HEIGHT,
		textTransform = DEFAULT_FORM_LABEL_TEXT_TRANSFORM
	} = useFormLabelResponsiveValues({
		align: alignProp,
		fontSize: fontSizeProp,
		fontWeight: fontWeightProp,
		lineClamp: lineClampProp,
		lineHeight: lineHeightProp,
		textTransform: textTransformProp
	});

	const formlabelColorClassName = useGetColor({
		color: checkColorType(color) === 'theme' ? (color as ThemeColor) : undefined,
		colorMode,
		colorType: color ? 'color' : 'default',
		classType: 'border',
		hueType: 'text.primary'
	});

	const alignClassName = useGetClass((classes) => classes.typography.align[align]);
	const fontSizeClassName = useGetClass((classes) => classes.typography.font_size[fontSize]);
	const fontWeightClassName = useGetClass((classes) => classes.typography.font_weight[fontWeight] as string);
	const letterSpacingClassName = useGetClass((classes) => classes.typography.letter_spacing.normal);
	const lineClampClassName = useGetClass((classes) => classes.typography.line_clamp[lineClamp]);
	const lineHeightClassName = useGetClass((classes) => classes.typography.line_height[lineHeight] as string);
	const textTransformClassName = useGetClass((classes) => classes.typography.transform[textTransform]);
	const whiteSpaceClassName = useGetClass((classes) => classes.typography.whiteSpace.normal);
	const wordBreakClassName = useGetClass((classes) => classes.typography.word_break.normal);
	const userSelectClassName = useGetClass((classes) => classes.interactivity.user_select.text);

	return classNames(
		alignClassName,
		fontSizeClassName,
		fontWeightClassName,
		letterSpacingClassName,
		lineClampClassName,
		lineHeightClassName,
		textTransformClassName,
		whiteSpaceClassName,
		wordBreakClassName,
		userSelectClassName,
		{
			[color]: checkColorType(color) === 'class',
			[formlabelColorClassName]: checkColorType(color) === 'theme'
		}
	);
};

export default useFormLabelClasses;
