import type { ReactNode } from 'react';

import type { PolymorphicElementType, ThemeAppAppearanceProps } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type {
	FormsCommonSize,
	FormsCommonVariant,
	FormsNonResponsiveValueProps,
	FormsResponsiveValueProps
} from '@components/Forms/common/types';

export type EmailInputDefaultElement = 'input';
export type EmailInputElement = Extract<PolymorphicElementType, 'input'>;

// export type EmailInputAutoComplete = 'on' | 'password' | 'off';

export type EmailInputSize = FormsCommonSize;

export type EmailInputVariant = FormsCommonVariant;

export type EmailInputRenderProps = ThemeAppAppearanceProps & { w?: number; h?: number };

export type EmailInputNonResponsiveValueProps = FormsNonResponsiveValueProps;
export type EmailInputResponsiveValueProps = FormsResponsiveValueProps;

export type EmailInputUniqueProps = ThemeAppAppearanceProps & {
	// autoComplete?: EmailInputAutoComplete;
	renderLeft?: (props: EmailInputRenderProps) => ReactNode;
	renderRight?: (props: EmailInputRenderProps) => ReactNode;
} & EmailInputResponsiveValueProps;

export type EmailInputProps<Element extends EmailInputElement> = Omit<
	BoxProps<Element, EmailInputUniqueProps>,
	'children'
>;

export type EmailInputRef<Element extends EmailInputElement> = BoxRef<Element>;
