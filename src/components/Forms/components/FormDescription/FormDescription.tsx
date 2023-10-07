import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';

import { Text } from '@components/Typography';

import { hooks, utils } from '../FormControl';

import { __KEYS_FORM_DESCRIPTION_CLASS__ } from './common/keys';
import type {
	FormDescriptionDefaultElement,
	FormDescriptionElement,
	FormDescriptionProps,
	FormDescriptionRef
} from './common/types';

const { getFormControlFontSize } = utils;
const { useFormControlContext } = hooks;

const FormDescription = forwardRef(function FormDescription<
	Element extends FormDescriptionElement = FormDescriptionDefaultElement
>(props: FormDescriptionProps<Element>, ref: FormDescriptionRef<Element>): ReactElement {
	const { colorMode, size } = useFormControlContext();

	const __DEFAULT_FORM_DESCRIPTION_COLOR__ = useGetColor({
		color: 'gray',
		colorMode,
		colorType: 'default',
		hueType: 'text.secondary',
		classType: 'text'
	});

	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		align = 'left',
		color = __DEFAULT_FORM_DESCRIPTION_COLOR__,
		fontSize = getFormControlFontSize(size).description,
		lineClamp = 'none',
		lineHeight = 'tight',
		...rest
	} = props;

	return (
		<Text<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_FORM_DESCRIPTION_CLASS__, { [className]: !!className })}
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

FormDescription.displayName = 'FormDescription';

export default FormDescription;
