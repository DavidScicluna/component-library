import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';

import { Text } from '@components/Typography';

import { hooks, utils } from '../FormControl';

import { __KEYS_FORM_HELPER_TEXT_CLASS__ } from './common/keys';
import type {
	FormHelperTextDefaultElement,
	FormHelperTextElement,
	FormHelperTextProps,
	FormHelperTextRef
} from './common/types';

const { getFormControlFontSize } = utils;
const { useFormControlContext } = hooks;

const FormHelperText = forwardRef(function FormHelperText<
	Element extends FormHelperTextElement = FormHelperTextDefaultElement
>(props: FormHelperTextProps<Element>, ref: FormHelperTextRef<Element>): ReactElement {
	const { colorMode, isError, isWarning, isSuccess, size } = useFormControlContext();

	const __DEFAULT_FORM_HELPER_TEXT_COLOR__ = useGetColor({
		color: isError ? 'red' : isWarning ? 'yellow' : isSuccess ? 'green' : 'gray',
		colorMode,
		colorType: isError || isWarning || isSuccess ? 'color' : 'default',
		hueType: isError || isWarning || isSuccess ? 'color' : 'text.secondary',
		classType: 'text'
	});

	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		align = 'left',
		color = __DEFAULT_FORM_HELPER_TEXT_COLOR__,
		fontSize = getFormControlFontSize(size).helper,
		lineClamp = 'none',
		lineHeight = 'tight',
		...rest
	} = props;

	return (
		<Text<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_FORM_HELPER_TEXT_CLASS__, { [className]: !!className })}
			aria-errormessage={children}
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

FormHelperText.displayName = 'FormHelperText';

export default FormHelperText;
