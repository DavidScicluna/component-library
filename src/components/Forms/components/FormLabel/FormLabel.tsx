import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';

import { Box } from '@components/Box';
import { useFormControlContext, useFormControlFontSize } from '@components/Forms/components/FormControl/common/hooks';
import type { TextProps } from '@components/Typography';
import { Text } from '@components/Typography';

import {
	__DEFAULT_FORM_LABEL_ALIGN__,
	__DEFAULT_FORM_LABEL_AS__,
	__DEFAULT_FORM_LABEL_FONT_WEIGHT__,
	__DEFAULT_FORM_LABEL_LINE_CLAMP__,
	__DEFAULT_FORM_LABEL_LINE_HEIGHT__,
	__DEFAULT_FORM_LABEL_TEXT_TRANSFORM__
} from './common/constants';
import { __KEYS_FORM_LABEL_CLASS__ } from './common/keys';
import type { FormLabelElement, FormLabelProps, FormLabelRef } from './common/types';
import { getFormLabelID } from './common/utils';

const FormLabel = forwardRef(function FormLabel<Element extends FormLabelElement>(
	props: FormLabelProps<Element>,
	ref: FormLabelRef<Element>
): JSX.Element {
	const { colorMode, id, isError, isRequired, isWarning, isSuccess, size } = useFormControlContext();

	const __DEFAULT_FORM_LABEL_COLOR__ = useGetColor({
		color: 'gray',
		colorMode,
		colorType: 'default',
		hueType: 'text.primary'
	});
	const __DEFAULT_FORM_LABEL_FONT_SIZE__ = useFormControlFontSize({ size });

	const requiredColor = useGetColor({
		color: isError ? 'red' : isWarning ? 'yellow' : isSuccess ? 'green' : 'red',
		colorMode,
		colorType: 'color',
		hueType: 'color'
	});

	const {
		children,
		as = __DEFAULT_FORM_LABEL_AS__,
		className = __DEFAULT_CLASSNAME__,
		align = __DEFAULT_FORM_LABEL_ALIGN__,
		color = __DEFAULT_FORM_LABEL_COLOR__,
		fontSize = __DEFAULT_FORM_LABEL_FONT_SIZE__.label,
		fontWeight = __DEFAULT_FORM_LABEL_FONT_WEIGHT__,
		lineClamp = __DEFAULT_FORM_LABEL_LINE_CLAMP__,
		lineHeight = __DEFAULT_FORM_LABEL_LINE_HEIGHT__,
		textTransform = __DEFAULT_FORM_LABEL_TEXT_TRANSFORM__,
		...rest
	} = props;

	return (
		<Text
			{...(rest as TextProps<Element>)}
			as={as}
			ref={ref}
			className={classNames(__KEYS_FORM_LABEL_CLASS__, { [className]: !!className })}
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
