import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import { useGetColor } from '@common/hooks';

import { useFormControlContext, useFormControlFontSize } from '@components/Forms/components/FormControl/common/hooks';
import { Text } from '@components/Typography';

import {
	DEFAULT_FORM_HELPER_TEXT_ALIGN,
	DEFAULT_FORM_HELPER_TEXT_AS,
	DEFAULT_FORM_HELPER_TEXT_LINE_CLAMP,
	DEFAULT_FORM_HELPER_TEXT_LINE_HEIGHT
} from './common/constants';
import { KEYS_FORM_HELPER_TEXT_CLASS } from './common/keys';
import type { FormHelperTextElement, FormHelperTextProps, FormHelperTextRef } from './common/types';

const FormHelperText = forwardRef(function FormHelperText<Element extends FormHelperTextElement>(
	props: FormHelperTextProps<Element>,
	ref: FormHelperTextRef<Element>
): JSX.Element {
	const { colorMode, isError, isWarning, isSuccess, size } = useFormControlContext();

	const DEFAULT_FORM_HELPER_TEXT_COLOR = useGetColor({
		color: isError ? 'red' : isWarning ? 'yellow' : isSuccess ? 'green' : 'gray',
		colorMode,
		colorType: isError || isWarning || isSuccess ? 'color' : 'default',
		hueType: isError || isWarning || isSuccess ? 'color' : 'text.secondary'
	});
	const DEFAULT_FORM_HELPER_TEXT_FONT_SIZE = useFormControlFontSize({ size });

	const {
		children,
		as = DEFAULT_FORM_HELPER_TEXT_AS,
		className = DEFAULT_CLASSNAME,
		align = DEFAULT_FORM_HELPER_TEXT_ALIGN,
		color = DEFAULT_FORM_HELPER_TEXT_COLOR,
		fontSize = DEFAULT_FORM_HELPER_TEXT_FONT_SIZE.helper,
		lineClamp = DEFAULT_FORM_HELPER_TEXT_LINE_CLAMP,
		lineHeight = DEFAULT_FORM_HELPER_TEXT_LINE_HEIGHT,
		...rest
	} = props;

	return (
		<Text
			{...rest}
			as={as}
			ref={ref}
			className={classNames(KEYS_FORM_HELPER_TEXT_CLASS, { [className]: !!className })}
			aria-errormessage={typeof children === 'string' ? children : ''}
			align={align}
			color={color}
			fontSize={fontSize}
			lineClamp={lineClamp}
			lineHeight={lineHeight}
		>
			{children}
		</Text>
	);
});

// FormHelperText.displayName = 'FormHelperText';

export default FormHelperText;
