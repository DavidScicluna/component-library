import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';

import { useFormControlContext, useFormControlFontSize } from '@components/Forms/components/FormControl/common/hooks';
import type { TextProps } from '@components/Typography';
import { Text } from '@components/Typography';

import {
	__DEFAULT_FORM_DESCRIPTION_ALIGN__,
	__DEFAULT_FORM_DESCRIPTION_AS__,
	__DEFAULT_FORM_DESCRIPTION_LINE_CLAMP__,
	__DEFAULT_FORM_DESCRIPTION_LINE_HEIGHT__
} from './common/constants';
import { __KEYS_FORM_DESCRIPTION_CLASS__ } from './common/keys';
import type { FormDescriptionElement, FormDescriptionProps, FormDescriptionRef } from './common/types';
import { getFormDescriptionID } from './common/utils';

const FormDescription = forwardRef(function FormDescription<Element extends FormDescriptionElement>(
	props: FormDescriptionProps<Element>,
	ref: FormDescriptionRef<Element>
): JSX.Element {
	const { colorMode, id, size } = useFormControlContext();

	const __DEFAULT_FORM_DESCRIPTION_COLOR__ = useGetColor({
		color: 'gray',
		colorMode,
		colorType: 'default',
		hueType: 'text.secondary'
	});
	const __DEFAULT_FORM_DESCRIPTION_FONT_SIZE__ = useFormControlFontSize({ size });

	const {
		children,
		as = __DEFAULT_FORM_DESCRIPTION_AS__,
		className = __DEFAULT_CLASSNAME__,
		align = __DEFAULT_FORM_DESCRIPTION_ALIGN__,
		color = __DEFAULT_FORM_DESCRIPTION_COLOR__,
		fontSize = __DEFAULT_FORM_DESCRIPTION_FONT_SIZE__.description,
		lineClamp = __DEFAULT_FORM_DESCRIPTION_LINE_CLAMP__,
		lineHeight = __DEFAULT_FORM_DESCRIPTION_LINE_HEIGHT__,
		...rest
	} = props;

	return (
		<Text
			{...(rest as TextProps<Element>)}
			as={as}
			ref={ref}
			className={classNames(__KEYS_FORM_DESCRIPTION_CLASS__, { [className]: !!className })}
			aria-description={children}
			id={getFormDescriptionID(id)}
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

// FormDescription.displayName = 'FormDescription';

export default FormDescription;
