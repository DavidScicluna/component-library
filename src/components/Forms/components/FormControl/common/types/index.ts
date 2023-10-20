import type { ElementType } from 'react';

import type { ResponsiveValue, ThemeAppAppearanceProps } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { StackProps } from '@components/Layout';

export type FormControlSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type FormControlOtherProps<Element extends ElementType> = ThemeAppAppearanceProps & {
	/**
	 * If true, the form will be disabled
	 *
	 * @default false
	 */
	isDisabled?: ResponsiveValue<boolean>;
	/**
	 * If true, the form will be invalid
	 *
	 * @default false
	 */
	isError?: ResponsiveValue<boolean>;
	/**
	 * If true, the form will be focused & will have the success styling
	 *
	 * @default false
	 */
	isFocused?: ResponsiveValue<boolean>;
	/**
	 * If true, the form will be readonly
	 *
	 * @default false
	 */
	isReadOnly?: ResponsiveValue<boolean>;
	/**
	 * If true, the form will be required
	 *
	 * @default false
	 */
	isRequired?: ResponsiveValue<boolean>;
	/**
	 * If true, the form will have the success styling
	 *
	 * @default false
	 */
	isSuccess?: ResponsiveValue<boolean>;
	/**
	 * If true, the form will have the warning styling
	 *
	 * @default false
	 */
	isWarning?: ResponsiveValue<boolean>;
	/**
	 * The size of the form
	 *
	 * @default 'md'
	 */
	size?: ResponsiveValue<FormControlSize>;
} & Pick<StackProps<Element>, 'alignItems' | 'justifyContent' | 'spacing'>;

export type FormControlProps<Element extends ElementType> = BoxProps<Element, FormControlOtherProps<Element>>;

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
