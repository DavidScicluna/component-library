import type {
	PolymorphicDefaultElement,
	PolymorphicElementType,
	ResponsiveValueProps,
	ThemeAppAppearanceProps
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type {
	FormsCommonSize,
	FormsNonResponsiveValueProps,
	FormsResponsiveValueProps
} from '@components/Forms/common/types';
import type { StackUniqueProps } from '@components/Layout';

export type FormControlDefaultElement = PolymorphicDefaultElement;
export type FormControlElement = Extract<PolymorphicElementType, 'div'>;

export type FormControlSize = FormsCommonSize;

type PickedFormsProps =
	| 'isDisabled'
	| 'isError'
	| 'isFocused'
	| 'isReadOnly'
	| 'isRequired'
	| 'isSuccess'
	| 'isWarning'
	| 'size';

export type FormControlNonResponsiveValueProps = Pick<FormsNonResponsiveValueProps, PickedFormsProps>;

export type FormControlResponsiveValueProps = Pick<FormsResponsiveValueProps, PickedFormsProps> &
	ResponsiveValueProps<FormControlNonResponsiveValueProps>;

export type FormControlUniqueProps = ThemeAppAppearanceProps & FormControlResponsiveValueProps & StackUniqueProps;

export type FormControlProps<Element extends FormControlElement> = BoxProps<Element, FormControlUniqueProps>;

export type FormControlRef<Element extends FormControlElement> = BoxRef<Element>;

type PickedFormControlProps =
	| 'color'
	| 'colorMode'
	| 'id'
	| 'isDisabled'
	| 'isError'
	| 'isFocused'
	| 'isReadOnly'
	| 'isRequired'
	| 'isSuccess'
	| 'isWarning'
	| 'size'
	| 'spacing';

export type FormControlContext<Element extends FormControlElement> = Pick<
	FormControlProps<Element>,
	PickedFormControlProps
> & { hasFormControl?: boolean };
