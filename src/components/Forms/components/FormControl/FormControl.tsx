import type { ReactElement } from 'react';
import { createContext, forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import type { VStackProps } from '@components/Layout';
import { VStack } from '@components/Layout';
import {
	__DEFAULT_STACK_ALIGN_ITEMS__,
	__DEFAULT_STACK_JUSTIFY_CONTENT__
} from '@components/Layout/components/Stacks/Stack/common/constants';

import {
	__DEFAULT_FORM_CONTROL_AS__,
	__DEFAULT_FORM_CONTROL_HAS_FORM_CONTROL__,
	__DEFAULT_FORM_CONTROL_ID__,
	__DEFAULT_FORM_CONTROL_IS_DISABLED__,
	__DEFAULT_FORM_CONTROL_IS_ERROR__,
	__DEFAULT_FORM_CONTROL_IS_FOCUSED__,
	__DEFAULT_FORM_CONTROL_IS_READONLY__,
	__DEFAULT_FORM_CONTROL_IS_REQUIRED__,
	__DEFAULT_FORM_CONTROL_IS_SUCCESS__,
	__DEFAULT_FORM_CONTROL_IS_WARNING__,
	__DEFAULT_FORM_CONTROL_SIZE__,
	__DEFAULT_FORM_CONTROL_SPACING__
} from './common/constants';
import { useFormControlResponsiveValues } from './common/hooks';
import { __KEYS_FORM_CONTROL_CLASS__ } from './common/keys';
import type {
	FormControlContext as FormControlContextType,
	FormControlDefaultElement,
	FormControlElement,
	FormControlProps,
	FormControlRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

export const FormControlContext = createContext<FormControlContextType<FormControlDefaultElement>>({
	id: __DEFAULT_FORM_CONTROL_ID__,
	hasFormControl: __DEFAULT_FORM_CONTROL_HAS_FORM_CONTROL__,
	isDisabled: __DEFAULT_FORM_CONTROL_IS_DISABLED__,
	isError: __DEFAULT_FORM_CONTROL_IS_ERROR__,
	isFocused: __DEFAULT_FORM_CONTROL_IS_FOCUSED__,
	isReadOnly: __DEFAULT_FORM_CONTROL_IS_READONLY__,
	isRequired: __DEFAULT_FORM_CONTROL_IS_REQUIRED__,
	isSuccess: __DEFAULT_FORM_CONTROL_IS_SUCCESS__,
	isWarning: __DEFAULT_FORM_CONTROL_IS_WARNING__,
	size: __DEFAULT_FORM_CONTROL_SIZE__,
	spacing: __DEFAULT_FORM_CONTROL_SPACING__
});

const FormControl = forwardRef(function FormControl<Element extends FormControlElement>(
	props: FormControlProps<Element>,
	ref: FormControlRef<Element>
): ReactElement {
	const {
		children,
		as = __DEFAULT_FORM_CONTROL_AS__,
		id = __DEFAULT_FORM_CONTROL_ID__,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		alignItems: alignItemsProp = __DEFAULT_STACK_ALIGN_ITEMS__,
		justifyContent: justifyContentProp = __DEFAULT_STACK_JUSTIFY_CONTENT__,
		isDisabled: isDisabledProp = __DEFAULT_FORM_CONTROL_IS_DISABLED__,
		isError: isErrorProp = __DEFAULT_FORM_CONTROL_IS_ERROR__,
		isFocused: isFocusedProp = __DEFAULT_FORM_CONTROL_IS_FOCUSED__,
		isReadOnly: isReadOnlyProp = __DEFAULT_FORM_CONTROL_IS_READONLY__,
		isRequired: isRequiredProp = __DEFAULT_FORM_CONTROL_IS_REQUIRED__,
		isSuccess: isSuccessProp = __DEFAULT_FORM_CONTROL_IS_SUCCESS__,
		isWarning: isWarningProp = __DEFAULT_FORM_CONTROL_IS_WARNING__,
		size: sizeProp = __DEFAULT_FORM_CONTROL_SIZE__,
		spacing: spacingProp = __DEFAULT_FORM_CONTROL_SPACING__,
		...rest
	} = props;

	const {
		alignItems,
		justifyContent,
		isDisabled,
		isError,
		isFocused,
		isReadOnly,
		isRequired,
		isSuccess,
		isWarning,
		size,
		spacing
	} = useFormControlResponsiveValues<Element>({
		alignItems: alignItemsProp,
		justifyContent: justifyContentProp,
		isDisabled: isDisabledProp,
		isError: isErrorProp,
		isFocused: isFocusedProp,
		isReadOnly: isReadOnlyProp,
		isRequired: isRequiredProp,
		isSuccess: isSuccessProp,
		isWarning: isWarningProp,
		size: sizeProp,
		spacing: spacingProp
	});

	return (
		<FormControlContext.Provider
			value={{
				color,
				colorMode,
				id,
				hasFormControl: __DEFAULT_FORM_CONTROL_HAS_FORM_CONTROL__,
				isDisabled,
				isError,
				isFocused,
				isReadOnly,
				isRequired,
				isSuccess,
				isWarning,
				size,
				spacing
			}}
		>
			<VStack
				{...(rest as VStackProps<Element>)}
				as={as}
				ref={ref}
				className={classNames(__KEYS_FORM_CONTROL_CLASS__, { [className]: !!className })}
				alignItems={alignItems}
				justifyContent={justifyContent}
				spacing={spacing}
			>
				{children}
			</VStack>
		</FormControlContext.Provider>
	);
});

// FormControl.displayName = 'FormControl';

export default FormControl;
