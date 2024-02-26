import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import { useGetColor } from '@common/hooks';

import { Box } from '@components/Box';
import { useFormControlContext, useFormControlFontSize } from '@components/Forms/components/FormControl/common/hooks';
import type { TextProps } from '@components/Typography';
import { Text } from '@components/Typography';

import {
	DEFAULT_FORM_LABEL_ALIGN,
	DEFAULT_FORM_LABEL_AS,
	DEFAULT_FORM_LABEL_FONT_WEIGHT,
	DEFAULT_FORM_LABEL_LINE_CLAMP,
	DEFAULT_FORM_LABEL_LINE_HEIGHT,
	DEFAULT_FORM_LABEL_TEXT_TRANSFORM
} from './common/constants';
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
		align = DEFAULT_FORM_LABEL_ALIGN,
		color = DEFAULT_FORM_LABEL_COLOR,
		fontSize = DEFAULT_FORM_LABEL_FONT_SIZE.label,
		fontWeight = DEFAULT_FORM_LABEL_FONT_WEIGHT,
		lineClamp = DEFAULT_FORM_LABEL_LINE_CLAMP,
		lineHeight = DEFAULT_FORM_LABEL_LINE_HEIGHT,
		textTransform = DEFAULT_FORM_LABEL_TEXT_TRANSFORM,
		...rest
	} = props;

	return (
		<Text
			{...(rest as TextProps<Element>)}
			as={as}
			ref={ref}
			className={classNames(KEYS_FORM_LABEL_CLASS, { [className]: !!className })}
			aria-braillelabel={children}
			aria-label={children}
			id={getFormLabelID(id)}
			align={align}
			color={color}
			fontSize={fontSize}
			fontWeight={fontWeight}
			lineClamp={lineClamp}
			lineHeight={lineHeight}
			textTransform={textTransform}
		>
			{children}

			{isRequired ? (
				<Box as='span' sx={{ color: requiredColor }}>
					{' *'}
				</Box>
			) : null}
		</Text>
	);
});

// FormLabel.displayName = 'FormLabel';

export default FormLabel;
