import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultProps
} from '@common/types';

import { useFormControlContext, useFormControlFontSize } from '@components/Forms/components/FormControl/common/hooks';
import { Text } from '@components/Typography';

import {
	__DEFAULT_FORM_HELPER_TEXT_ALIGN__,
	__DEFAULT_FORM_HELPER_TEXT_LINE_CLAMP__,
	__DEFAULT_FORM_HELPER_TEXT_LINE_HEIGHT__
} from './common/constants';
import { __KEYS_FORM_HELPER_TEXT_CLASS__ } from './common/keys';
import type {
	FormHelperTextDefaultElement,
	FormHelperTextElement,
	FormHelperTextProps,
	FormHelperTextRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const FormHelperText: PolymorphicComponentWithRef = forwardRef(function FormHelperText<
	Element extends FormHelperTextElement = FormHelperTextDefaultElement
>(props: FormHelperTextProps<Element>, ref: FormHelperTextRef<Element>): ReactElement {
	const { colorMode, isError, isWarning, isSuccess, size } = useFormControlContext();

	const __DEFAULT_FORM_HELPER_TEXT_COLOR__ = useGetColor({
		color: isError ? 'red' : isWarning ? 'yellow' : isSuccess ? 'green' : 'gray',
		colorMode,
		colorType: isError || isWarning || isSuccess ? 'color' : 'default',
		hueType: isError || isWarning || isSuccess ? 'color' : 'text.secondary'
	});
	const __DEFAULT_FORM_HELPER_TEXT_FONT_SIZE__ = useFormControlFontSize({ size });

	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		align = __DEFAULT_FORM_HELPER_TEXT_ALIGN__,
		color = __DEFAULT_FORM_HELPER_TEXT_COLOR__,
		fontSize = __DEFAULT_FORM_HELPER_TEXT_FONT_SIZE__.helper,
		lineClamp = __DEFAULT_FORM_HELPER_TEXT_LINE_CLAMP__,
		lineHeight = __DEFAULT_FORM_HELPER_TEXT_LINE_HEIGHT__,
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

export default <Element extends FormHelperTextElement = FormHelperTextDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <FormHelperText<Element> {...props} />;
