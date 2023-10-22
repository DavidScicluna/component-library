import type { ElementType, ReactNode } from 'react';

import type { ThemeAppAppearanceProps } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { GridProps } from '@components/Layout';

export type FormHeaderRenderProps = ThemeAppAppearanceProps & { w?: number; h?: number };

type FormHeaderOtherProps<Element extends ElementType> = Pick<GridProps<Element>, 'spacing'> & {
	renderLeft?: (props: FormHeaderRenderProps) => ReactNode;
	renderRight?: (props: FormHeaderRenderProps) => ReactNode;
	renderLabel: () => ReactNode;
	renderDescription?: () => ReactNode;
	renderActions?: () => ReactNode;
};

export type FormHeaderProps<Element extends ElementType> = Omit<
	BoxProps<Element, FormHeaderOtherProps<Element>>,
	'children' | 'w' | 'h'
>;

export type FormHeaderRef<Element extends ElementType> = BoxRef<Element>;
