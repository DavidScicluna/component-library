import { useGetResponsiveValue } from '@common/hooks';

import type { FormLabelNonResponsiveValueProps, FormLabelResponsiveValueProps } from '../types';

type UseFormLabelResponsiveValuesProps = Partial<FormLabelResponsiveValueProps>;
type UseFormLabelResponsiveValuesReturn = FormLabelNonResponsiveValueProps;

const useFormLabelResponsiveValues = (props: UseFormLabelResponsiveValuesProps): UseFormLabelResponsiveValuesReturn => {
	const {
		align: alignProp,
		fontSize: fontSizeProp,
		fontWeight: fontWeightProp,
		lineClamp: lineClampProp,
		lineHeight: lineHeightProp,
		textTransform: textTransformProp
	} = props;

	const align = useGetResponsiveValue<FormLabelNonResponsiveValueProps['align']>(alignProp);
	const fontSize = useGetResponsiveValue<FormLabelNonResponsiveValueProps['fontSize']>(fontSizeProp);
	const fontWeight = useGetResponsiveValue<FormLabelNonResponsiveValueProps['fontWeight']>(fontWeightProp);
	const lineClamp = useGetResponsiveValue<FormLabelNonResponsiveValueProps['lineClamp']>(lineClampProp);
	const lineHeight = useGetResponsiveValue<FormLabelNonResponsiveValueProps['lineHeight']>(lineHeightProp);
	const textTransform = useGetResponsiveValue<FormLabelNonResponsiveValueProps['textTransform']>(textTransformProp);

	return { align, fontSize, fontWeight, lineClamp, lineHeight, textTransform };
};

export default useFormLabelResponsiveValues;
