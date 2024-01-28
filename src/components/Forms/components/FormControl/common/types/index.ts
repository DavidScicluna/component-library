import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { FormsCommonProps, FormsCommonSize } from '@components/Forms/common/types';
import type { StackProps } from '@components/Layout';

export type FormControlDefaultElement = PolymorphicDefaultElement;
export type FormControlElement = Extract<PolymorphicElementType, 'div'>;

export type FormControlSize = FormsCommonSize;

type PickedFormsCommonProps =
	| 'color'
	| 'colorMode'
	| 'isDisabled'
	| 'isError'
	| 'isFocused'
	| 'isReadOnly'
	| 'isRequired'
	| 'isSuccess'
	| 'isWarning'
	| 'size';

type PickedStackProps = 'alignItems' | 'justifyContent' | 'spacing';

type FormControlOtherProps<Element extends FormControlElement> = Pick<FormsCommonProps, PickedFormsCommonProps> &
	Pick<StackProps<Element>, PickedStackProps>;

export type FormControlProps<Element extends FormControlElement> = BoxProps<Element, FormControlOtherProps<Element>>;

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
