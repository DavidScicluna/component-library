import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultProps
} from '@common/types';

import { Box } from '@components/Box';
import { useFormControlContext, useFormControlFontSize } from '@components/Forms/components/FormControl/common/hooks';
import { Text } from '@components/Typography';

import { __KEYS_FORM_LABEL_CLASS__ } from './common/keys';
import type { FormLabelDefaultElement, FormLabelElement, FormLabelProps, FormLabelRef } from './common/types';
import { getFormLabelID } from './common/utils';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const FormLabel: PolymorphicComponentWithRef = forwardRef(function FormLabel<
	Element extends FormLabelElement = FormLabelDefaultElement
>(props: FormLabelProps<Element>, ref: FormLabelRef<Element>): ReactElement {
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

export default <Element extends FormLabelElement = FormLabelDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <FormLabel<Element> {...props} />;
