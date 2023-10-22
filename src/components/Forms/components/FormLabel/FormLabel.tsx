import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';

import { Box } from '@components/Box';
import { Text } from '@components/Typography';

import { hooks as form_control_hooks } from '../FormControl';

import { __KEYS_FORM_LABEL_CLASS__ } from './common/keys';
import type { FormLabelDefaultElement, FormLabelElement, FormLabelProps, FormLabelRef } from './common/types';
import { getFormLabelID } from './common/utils';

const { useFormControlContext, useFormControlFontSize } = form_control_hooks;

const FormLabel = forwardRef(function FormLabel<Element extends FormLabelElement = FormLabelDefaultElement>(
	props: FormLabelProps<Element>,
	ref: FormLabelRef<Element>
): ReactElement {
	const { colorMode, id, isError, isRequired, isWarning, isSuccess, size } = useFormControlContext();

	const __DEFAULT_FORM_LABEL_COLOR__ = useGetColor({
		color: 'gray',
		colorMode,
		colorType: 'default',
		hueType: 'text.primary',
		classType: 'text'
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
		className = __DEFAULT_CLASSNAME__,
		align = 'left',
		color = __DEFAULT_FORM_LABEL_COLOR__,
		fontSize = __DEFAULT_FORM_LABEL_FONT_SIZE__.label,
		fontWeight = 'semibold',
		lineClamp = 1,
		lineHeight = 'tight',
		textTransform = 'capitalize',
		...rest
	} = props;

	return (
		<Text<Element>
			{...rest}
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

FormLabel.displayName = 'FormLabel';

export default FormLabel;
