import { useGetResponsiveValue } from '@common/hooks';

import type { TextNonResponsiveValueProps, TextResponsiveValueProps } from '../types';

type UseTextResponsiveValuesProps = Partial<TextResponsiveValueProps>;
type UseTextResponsiveValuesReturn = TextNonResponsiveValueProps;

const useTextResponsiveValues = (props: UseTextResponsiveValuesProps): UseTextResponsiveValuesReturn => {
	const {
		align: alignProp,
		decoration: decorationProp,
		fontSize: fontSizeProp,
		fontWeight: fontWeightProp,
		letterSpacing: letterSpacingProp,
		lineClamp: lineClampProp,
		lineHeight: lineHeightProp,
		textTransform: textTransformProp,
		isItalic: isItalicProp,
		isOverflown: isOverflownProp,
		whiteSpace: whiteSpaceProp,
		wordBreak: wordBreakProp,
		userSelect: userSelectProp
	} = props;

	const align = useGetResponsiveValue<TextNonResponsiveValueProps['align']>(alignProp);
	const decoration = useGetResponsiveValue<TextNonResponsiveValueProps['decoration']>(decorationProp);
	const fontSize = useGetResponsiveValue<TextNonResponsiveValueProps['fontSize']>(fontSizeProp);
	const fontWeight = useGetResponsiveValue<TextNonResponsiveValueProps['fontWeight']>(fontWeightProp);
	const letterSpacing = useGetResponsiveValue<TextNonResponsiveValueProps['letterSpacing']>(letterSpacingProp);
	const lineClamp = useGetResponsiveValue<TextNonResponsiveValueProps['lineClamp']>(lineClampProp);
	const lineHeight = useGetResponsiveValue<TextNonResponsiveValueProps['lineHeight']>(lineHeightProp);
	const textTransform = useGetResponsiveValue<TextNonResponsiveValueProps['textTransform']>(textTransformProp);

	const isItalic = useGetResponsiveValue<TextNonResponsiveValueProps['isItalic']>(isItalicProp);
	const isOverflown = useGetResponsiveValue<TextNonResponsiveValueProps['isOverflown']>(isOverflownProp);

	const whiteSpace = useGetResponsiveValue<TextNonResponsiveValueProps['whiteSpace']>(whiteSpaceProp);
	const wordBreak = useGetResponsiveValue<TextNonResponsiveValueProps['wordBreak']>(wordBreakProp);
	const userSelect = useGetResponsiveValue<TextNonResponsiveValueProps['userSelect']>(userSelectProp);

	return {
		align,
		decoration,
		fontSize,
		fontWeight,
		letterSpacing,
		lineClamp,
		lineHeight,
		textTransform,
		isItalic,
		isOverflown,
		whiteSpace,
		wordBreak,
		userSelect
	};
};

export default useTextResponsiveValues;
