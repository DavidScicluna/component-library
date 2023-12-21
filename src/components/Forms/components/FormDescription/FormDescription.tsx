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
	__DEFAULT_FORM_DESCRIPTION_ALIGN__,
	__DEFAULT_FORM_DESCRIPTION_LINE_CLAMP__,
	__DEFAULT_FORM_DESCRIPTION_LINE_HEIGHT__
} from './common/constants';
import { __KEYS_FORM_DESCRIPTION_CLASS__ } from './common/keys';
import type {
	FormDescriptionDefaultElement,
	FormDescriptionElement,
	FormDescriptionProps,
	FormDescriptionRef
} from './common/types';
import { getFormDescriptionID } from './common/utils';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const FormDescription: PolymorphicComponentWithRef = forwardRef(function FormDescription<
	Element extends FormDescriptionElement = FormDescriptionDefaultElement
>(props: FormDescriptionProps<Element>, ref: FormDescriptionRef<Element>): ReactElement {
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
		className = __DEFAULT_CLASSNAME__,
		align = __DEFAULT_FORM_DESCRIPTION_ALIGN__,
		color = __DEFAULT_FORM_DESCRIPTION_COLOR__,
		fontSize = __DEFAULT_FORM_DESCRIPTION_FONT_SIZE__.description,
		lineClamp = __DEFAULT_FORM_DESCRIPTION_LINE_CLAMP__,
		lineHeight = __DEFAULT_FORM_DESCRIPTION_LINE_HEIGHT__,
		...rest
	} = props;

	return (
		<Text<Element>
			{...rest}
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

FormDescription.displayName = 'FormDescription';

export default <
	Element extends FormDescriptionElement = FormDescriptionDefaultElement,
	Props = PolymorphicDefaultProps
>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <FormDescription<Element> {...props} />;
