import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { FormsCommonProps, FormsCommonSize } from '@components/Forms/common/types';
import type { StackProps } from '@components/Layout';

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

type FormControlOtherProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Pick<
	FormsCommonProps,
	PickedFormsCommonProps
> &
	Pick<StackProps<Element>, PickedStackProps>;

export type FormControlProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxProps<
	Element,
	FormControlOtherProps<Element>
>;

export type FormControlRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxRef<Element>;

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

export type FormControlContext = Pick<FormControlProps, PickedFormControlProps> & {
	hasFormControl?: boolean;
};
