import { createContext, forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';

import { VStack } from '@components/Layout';
import {
	DEFAULT_STACK_ALIGN_ITEMS,
	DEFAULT_STACK_JUSTIFY_CONTENT
} from '@components/Layout/components/Stacks/Stack/common/constants';

import {
	DEFAULT_FORM_CONTROL_AS,
	DEFAULT_FORM_CONTROL_HAS_FORM_CONTROL,
	DEFAULT_FORM_CONTROL_ID,
	DEFAULT_FORM_CONTROL_IS_DISABLED,
	DEFAULT_FORM_CONTROL_IS_ERROR,
	DEFAULT_FORM_CONTROL_IS_FOCUSED,
	DEFAULT_FORM_CONTROL_IS_READONLY,
	DEFAULT_FORM_CONTROL_IS_REQUIRED,
	DEFAULT_FORM_CONTROL_IS_SUCCESS,
	DEFAULT_FORM_CONTROL_IS_WARNING,
	DEFAULT_FORM_CONTROL_SIZE,
	DEFAULT_FORM_CONTROL_SPACING
} from './common/constants';
import { useFormControlResponsiveValues } from './common/hooks';
import { KEYS_FORM_CONTROL_CLASS } from './common/keys';
import type {
	FormControlContext as FormControlContextType,
	FormControlDefaultElement,
	FormControlElement,
	FormControlProps,
	FormControlRef
} from './common/types';

export const FormControlContext = createContext<FormControlContextType<FormControlDefaultElement>>({
	id: DEFAULT_FORM_CONTROL_ID,
	hasFormControl: DEFAULT_FORM_CONTROL_HAS_FORM_CONTROL,
	isDisabled: DEFAULT_FORM_CONTROL_IS_DISABLED,
	isError: DEFAULT_FORM_CONTROL_IS_ERROR,
	isFocused: DEFAULT_FORM_CONTROL_IS_FOCUSED,
	isReadOnly: DEFAULT_FORM_CONTROL_IS_READONLY,
	isRequired: DEFAULT_FORM_CONTROL_IS_REQUIRED,
	isSuccess: DEFAULT_FORM_CONTROL_IS_SUCCESS,
	isWarning: DEFAULT_FORM_CONTROL_IS_WARNING,
	size: DEFAULT_FORM_CONTROL_SIZE,
	spacing: DEFAULT_FORM_CONTROL_SPACING
});

const FormControl = forwardRef(function FormControl<Element extends FormControlElement>(
	props: FormControlProps<Element>,
	ref: FormControlRef<Element>
): JSX.Element {
	const {
		children,
		as = DEFAULT_FORM_CONTROL_AS,
		id = DEFAULT_FORM_CONTROL_ID,
		className = DEFAULT_CLASSNAME,
		color,
		colorMode,
		alignItems: alignItemsProp = DEFAULT_STACK_ALIGN_ITEMS,
		justifyContent: justifyContentProp = DEFAULT_STACK_JUSTIFY_CONTENT,
		isDisabled: isDisabledProp = DEFAULT_FORM_CONTROL_IS_DISABLED,
		isError: isErrorProp = DEFAULT_FORM_CONTROL_IS_ERROR,
		isFocused: isFocusedProp = DEFAULT_FORM_CONTROL_IS_FOCUSED,
		isReadOnly: isReadOnlyProp = DEFAULT_FORM_CONTROL_IS_READONLY,
		isRequired: isRequiredProp = DEFAULT_FORM_CONTROL_IS_REQUIRED,
		isSuccess: isSuccessProp = DEFAULT_FORM_CONTROL_IS_SUCCESS,
		isWarning: isWarningProp = DEFAULT_FORM_CONTROL_IS_WARNING,
		size: sizeProp = DEFAULT_FORM_CONTROL_SIZE,
		spacing: spacingProp = DEFAULT_FORM_CONTROL_SPACING,
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
				hasFormControl: DEFAULT_FORM_CONTROL_HAS_FORM_CONTROL,
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
				{...rest}
				as={as}
				ref={ref}
				className={classNames(KEYS_FORM_CONTROL_CLASS, { [className]: !!className })}
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
