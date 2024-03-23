import type { ReactNode } from 'react';

import type { PolymorphicElementType, ResponsiveValueProps, ThemeAppAppearanceProps } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { IconButtonDefaultElement, IconButtonProps } from '@components/Buttons';
import type {
	FormsCommonSize,
	FormsCommonVariant,
	FormsNonResponsiveValueProps,
	FormsResponsiveValueProps
} from '@components/Forms/common/types';

export type PasswordInputDefaultElement = 'input';
export type PasswordInputElement = Extract<PolymorphicElementType, 'input'>;

// export type PasswordInputAutoComplete = 'on' | 'password' | 'off';

export type PasswordInputSize = FormsCommonSize;

export type PasswordInputVariant = FormsCommonVariant;

export type PasswordInputRenderToggleProps = Pick<
	IconButtonProps<IconButtonDefaultElement>,
	'color' | 'colorMode' | 'isCompact' | 'onClick' | 'size' | 'variant'
> & { isVisible: boolean };
export type PasswordInputRenderProps = ThemeAppAppearanceProps & { w?: number; h?: number };

export type PasswordInputNonResponsiveValueProps = FormsNonResponsiveValueProps;
export type PasswordInputResponsiveValueProps = FormsResponsiveValueProps &
	ResponsiveValueProps<PasswordInputNonResponsiveValueProps>;

export type PasswordInputUniqueProps = ThemeAppAppearanceProps & {
	// autoComplete?: PasswordInputAutoComplete;
	renderToggle?: (props: PasswordInputRenderToggleProps) => ReactNode;
	renderLeft?: (props: PasswordInputRenderProps) => ReactNode;
	renderRight?: (props: PasswordInputRenderProps) => ReactNode;
} & PasswordInputResponsiveValueProps;

export type PasswordInputProps<Element extends PasswordInputElement> = Omit<
	BoxProps<Element, PasswordInputUniqueProps>,
	'children'
>;

export type PasswordInputRef<Element extends PasswordInputElement> = BoxRef<Element>;
