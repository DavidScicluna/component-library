import type { ReactNode } from 'react';

import type {
	PolymorphicChangeEvent,
	PolymorphicElementType,
	PolymorphicFocusEvent,
	PolymorphicMouseEvent
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { IconButtonDefaultElement, IconButtonProps } from '@components/Buttons';
import type { FormsCommonProps, FormsCommonSize, FormsCommonVariant } from '@components/Forms/common/types';

export type PasswordInputDefaultElement = 'input';
export type PasswordInputElement = Extract<PolymorphicElementType, 'input'>;

export type PasswordInputMouseEvent<Element extends PasswordInputElement> = PolymorphicMouseEvent<Element>;
export type PasswordInputChangeEvent<Element extends PasswordInputElement> = PolymorphicChangeEvent<Element>;
export type PasswordInputFocusEvent<Element extends PasswordInputElement> = PolymorphicFocusEvent<Element>;

// export type PasswordInputAutoComplete = 'on' | 'password' | 'off';

export type PasswordInputSize = FormsCommonSize;

export type PasswordInputVariant = FormsCommonVariant;

export type PasswordInputRenderToggleProps = Pick<
	IconButtonProps<IconButtonDefaultElement>,
	'color' | 'colorMode' | 'isCompact' | 'onClick' | 'size' | 'variant'
> & { isVisible: boolean };
export type PasswordInputRenderProps<Element extends PasswordInputElement> = Pick<
	PasswordInputOtherProps<Element>,
	'color' | 'colorMode'
> & { w?: number; h?: number };

type PickedFormsCommonProps =
	| 'color'
	| 'colorMode'
	| 'isCompact'
	| 'isDisabled'
	| 'isFullWidth'
	| 'isError'
	| 'isFocused'
	| 'isOutlined'
	| 'isReadOnly'
	| 'isRequired'
	| 'isSuccess'
	| 'isWarning'
	| 'size'
	| 'variant';

type PasswordInputOtherProps<Element extends PasswordInputElement> = {
	// autoComplete?: PasswordInputAutoComplete;
	renderToggle?: (props: PasswordInputRenderToggleProps) => ReactNode;
	renderLeft?: (props: PasswordInputRenderProps<Element>) => ReactNode;
	renderRight?: (props: PasswordInputRenderProps<Element>) => ReactNode;
} & Pick<FormsCommonProps, PickedFormsCommonProps>;

export type PasswordInputProps<Element extends PasswordInputElement> = Omit<
	BoxProps<Element, PasswordInputOtherProps<Element>>,
	'children'
>;

export type PasswordInputRef<Element extends PasswordInputElement> = BoxRef<Element>;
