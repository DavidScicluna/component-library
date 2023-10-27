import type { ElementType } from 'react';

import type { ResponsiveValue } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { FormsCommonProps, FormsCommonSize } from '@components/Forms';
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

type FormControlOtherProps<Element extends ElementType> = Pick<FormsCommonProps, PickedFormsCommonProps> &
	Pick<StackProps<Element>, PickedStackProps>;

export type FormControlProps<Element extends ElementType> = BoxProps<Element> & FormControlOtherProps<Element>;

export type FormControlRef<Element extends ElementType> = BoxRef<Element>;

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

export type FormControlContext<Element extends ElementType> = {
	hasFormControl?: ResponsiveValue<boolean>;
} & Pick<FormControlProps<Element>, PickedFormControlProps>;
