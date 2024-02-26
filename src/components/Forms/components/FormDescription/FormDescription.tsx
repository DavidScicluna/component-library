import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import { useGetColor } from '@common/hooks';

import { useFormControlContext, useFormControlFontSize } from '@components/Forms/components/FormControl/common/hooks';
import type { TextProps } from '@components/Typography';
import { Text } from '@components/Typography';

import {
	DEFAULT_FORM_DESCRIPTION_ALIGN,
	DEFAULT_FORM_DESCRIPTION_AS,
	DEFAULT_FORM_DESCRIPTION_LINE_CLAMP,
	DEFAULT_FORM_DESCRIPTION_LINE_HEIGHT
} from './common/constants';
import { KEYS_FORM_DESCRIPTION_CLASS } from './common/keys';
import type { FormDescriptionElement, FormDescriptionProps, FormDescriptionRef } from './common/types';
import { getFormDescriptionID } from './common/utils';

const FormDescription = forwardRef(function FormDescription<Element extends FormDescriptionElement>(
	props: FormDescriptionProps<Element>,
	ref: FormDescriptionRef<Element>
): JSX.Element {
	const { colorMode, id, size } = useFormControlContext();

	const DEFAULT_FORM_DESCRIPTION_COLOR = useGetColor({
		color: 'gray',
		colorMode,
		colorType: 'default',
		hueType: 'text.secondary'
	});
	const DEFAULT_FORM_DESCRIPTION_FONT_SIZE = useFormControlFontSize({ size });

	const {
		children,
		as = DEFAULT_FORM_DESCRIPTION_AS,
		className = DEFAULT_CLASSNAME,
		align = DEFAULT_FORM_DESCRIPTION_ALIGN,
		color = DEFAULT_FORM_DESCRIPTION_COLOR,
		fontSize = DEFAULT_FORM_DESCRIPTION_FONT_SIZE.description,
		lineClamp = DEFAULT_FORM_DESCRIPTION_LINE_CLAMP,
		lineHeight = DEFAULT_FORM_DESCRIPTION_LINE_HEIGHT,
		...rest
	} = props;

	return (
		<Text
			{...(rest as TextProps<Element>)}
			as={as}
			ref={ref}
			className={classNames(KEYS_FORM_DESCRIPTION_CLASS, { [className]: !!className })}
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
