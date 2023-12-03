import type { ElementType, ReactElement } from 'react';
import { createContext, forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type {
	AlignItemsClass,
	JustifyContentClass,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	ThemeSpacing
} from '@common/types';

import { VStack } from '@components/Layout';

import {
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
import { __KEYS_FORM_CONTROL_CLASS__ } from './common/keys';
import type {
	FormControlContext as FormControlContextType,
	FormControlProps,
	FormControlRef,
	FormControlSize
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const FormControlContext = createContext<FormControlContextType<any>>({
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

const FormControl: PolymorphicComponentWithRef = forwardRef(function FormControl<
	Element extends ElementType = PolymorphicDefaultElement
>(props: FormControlProps<Element>, ref: FormControlRef<Element>): ReactElement {
	const {
		children,
		id = __DEFAULT_FORM_CONTROL_ID__,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		alignItems: a = 'stretch',
		justifyContent: j = 'stretch',
		isDisabled: disabled = __DEFAULT_FORM_CONTROL_IS_DISABLED__,
		isError: error = __DEFAULT_FORM_CONTROL_IS_ERROR__,
		isFocused: focused = __DEFAULT_FORM_CONTROL_IS_FOCUSED__,
		isReadOnly: readOnly = __DEFAULT_FORM_CONTROL_IS_READONLY__,
		isRequired: required = __DEFAULT_FORM_CONTROL_IS_REQUIRED__,
		isSuccess: success = __DEFAULT_FORM_CONTROL_IS_SUCCESS__,
		isWarning: warning = __DEFAULT_FORM_CONTROL_IS_WARNING__,
		size: si = __DEFAULT_FORM_CONTROL_SIZE__,
		spacing: sp = __DEFAULT_FORM_CONTROL_SPACING__,
		...rest
	} = props;

	const alignItems = useGetResponsiveValue<AlignItemsClass>(a);
	const justifyContent = useGetResponsiveValue<JustifyContentClass>(j);

	const isDisabled = useGetResponsiveValue<boolean>(disabled);
	const isError = useGetResponsiveValue<boolean>(error);
	const isFocused = useGetResponsiveValue<boolean>(focused);
	const isReadOnly = useGetResponsiveValue<boolean>(readOnly);
	const isRequired = useGetResponsiveValue<boolean>(required);
	const isSuccess = useGetResponsiveValue<boolean>(success);
	const isWarning = useGetResponsiveValue<boolean>(warning);

	const size = useGetResponsiveValue<FormControlSize>(si);
	const spacing = useGetResponsiveValue<ThemeSpacing>(sp);

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
			<VStack<Element>
				{...rest}
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

FormControl.displayName = 'FormControl';

export default FormControl;
