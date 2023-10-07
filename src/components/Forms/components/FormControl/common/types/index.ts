import type { ElementType } from 'react';

import type { ResponsiveValue, ThemeAppAppearanceProps } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box/common/types';
import type { StackProps } from '@components/Layout';

export type FormControlSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type FormControlOtherProps<Element extends ElementType> = ThemeAppAppearanceProps & {
	isDisabled?: ResponsiveValue<boolean>;
	isError?: ResponsiveValue<boolean>;
	isFocused?: ResponsiveValue<boolean>;
	isReadOnly?: ResponsiveValue<boolean>;
	isRequired?: ResponsiveValue<boolean>;
	isSuccess?: ResponsiveValue<boolean>;
	isWarning?: ResponsiveValue<boolean>;
	size?: ResponsiveValue<FormControlSize>;
} & Pick<StackProps<Element>, 'alignItems' | 'justifyContent' | 'spacing'>;

export type FormControlProps<Element extends ElementType> = BoxProps<Element, FormControlOtherProps<Element>>;

export type FormControlRef<Element extends ElementType> = BoxRef<Element>;

type PickedFormControlProps =
	| 'color'
	| 'colorMode'
	| 'isDisabled'
	| 'isError'
	| 'isFocused'
	| 'isReadOnly'
	| 'isRequired'
	| 'isSuccess'
	| 'isWarning'
	| 'size'
	| 'spacing';

export type FormControlContext<Element extends ElementType> = Pick<FormControlProps<Element>, PickedFormControlProps>;
