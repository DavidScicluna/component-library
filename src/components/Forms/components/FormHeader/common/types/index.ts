import type { ReactNode } from 'react';

import type { PolymorphicDefaultElement, PolymorphicElementType, ThemeAppAppearanceProps } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { GridProps } from '@components/Layout';

export type FormHeaderRenderProps = ThemeAppAppearanceProps & { w?: number; h?: number };

type FormHeaderOtherProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = {
	renderLeft?: (props: FormHeaderRenderProps) => ReactNode;
	renderRight?: (props: FormHeaderRenderProps) => ReactNode;
	renderLabel: () => ReactNode;
	renderDescription?: () => ReactNode;
	renderActions?: () => ReactNode;
} & Pick<GridProps<Element>, 'alignItems' | 'alignContent' | 'justifyItems' | 'justifyContent' | 'spacing'>;

export type FormHeaderProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element, FormHeaderOtherProps<Element>>,
	'children' | 'w' | 'h'
>;

export type FormHeaderRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxRef<Element>;
