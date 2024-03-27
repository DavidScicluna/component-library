import { forwardRef } from 'react';

import classNames from 'classnames';
import { merge } from 'lodash-es';

import { DEFAULT_CLASSNAME, DEFAULT_POLYMORPHIC_SX } from '@common/constants';
import { useGetColor } from '@common/hooks';

import { Box } from '@components/Box';
import { useFormControlContext, useFormControlFontSize } from '@components/Forms/components/FormControl/common/hooks';

import {
	DEFAULT_FORM_LABEL_ALIGN,
	DEFAULT_FORM_LABEL_AS,
	DEFAULT_FORM_LABEL_FONT_WEIGHT,
	DEFAULT_FORM_LABEL_LINE_CLAMP,
	DEFAULT_FORM_LABEL_LINE_HEIGHT,
	DEFAULT_FORM_LABEL_TEXT_TRANSFORM
} from './common/constants';
import { useFormLabelClasses, useFormLabelResponsiveValues, useFormLabelStyles } from './common/hooks';
import { KEYS_FORM_LABEL_CLASS } from './common/keys';
import type { FormLabelElement, FormLabelProps, FormLabelRef } from './common/types';
import { getFormLabelID } from './common/utils';

const FormLabel = forwardRef(function FormLabel<Element extends FormLabelElement>(
	props: FormLabelProps<Element>,
	ref: FormLabelRef<Element>
): JSX.Element {
	const { colorMode, id, isError, isRequired, isWarning, isSuccess, size } = useFormControlContext();

	const DEFAULT_FORM_LABEL_COLOR = useGetColor({
		color: 'gray',
		colorMode,
		colorType: 'default',
		hueType: 'text.primary'
	});
	const DEFAULT_FORM_LABEL_FONT_SIZE = useFormControlFontSize({ size });

	const requiredColor = useGetColor({
		color: isError ? 'red' : isWarning ? 'yellow' : isSuccess ? 'green' : 'red',
		colorMode,
		colorType: 'color',
		hueType: 'color'
	});

	const {
		children,
		as = DEFAULT_FORM_LABEL_AS,
		className = DEFAULT_CLASSNAME,
		align: alignProp = DEFAULT_FORM_LABEL_ALIGN,
		color = DEFAULT_FORM_LABEL_COLOR,
		fontSize: fontSizeProp = DEFAULT_FORM_LABEL_FONT_SIZE.label,
		fontWeight: fontWeightProp = DEFAULT_FORM_LABEL_FONT_WEIGHT,
		lineClamp: lineClampProp = DEFAULT_FORM_LABEL_LINE_CLAMP,
		lineHeight: lineHeightProp = DEFAULT_FORM_LABEL_LINE_HEIGHT,
		textTransform: textTransformProp = DEFAULT_FORM_LABEL_TEXT_TRANSFORM,
		sx = DEFAULT_POLYMORPHIC_SX,
		...rest
	} = props;

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

	const classes = useFormLabelClasses({
		color,
		colorMode,
		align,
		fontSize,
		fontWeight,
		lineClamp,
		lineHeight,
		textTransform
	});
	const styles = useFormLabelStyles({ color });

	return (
		<Box
			{...rest}
			as={as}
			ref={ref}
			aria-braillelabel={typeof children === 'string' ? children : ''}
			aria-label={typeof children === 'string' ? children : ''}
			id={getFormLabelID(id)}
			className={classNames(KEYS_FORM_LABEL_CLASS, classes, { [className]: !!className })}
			sx={merge(styles, sx)}
		>
			{children}

			{isRequired ? (
				<Box as='span' sx={{ color: requiredColor }}>
					{' *'}
				</Box>
			) : null}
		</Box>
	);
});

// FormLabel.displayName = 'FormLabel';

export default FormLabel;
