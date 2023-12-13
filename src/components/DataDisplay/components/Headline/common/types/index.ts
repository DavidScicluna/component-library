import type { ElementType, ReactNode } from 'react';

import type { PolymorphicDefaultElement, ResponsiveValue, ThemeAppAppearanceProps, ThemeSpacing } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { TextProps } from '@components/Typography';

export type HeadlineRenderProps = { w: string; h: string };

type HeadlineOtherProps = ThemeAppAppearanceProps & {
	renderLeft?: (props: HeadlineRenderProps) => ReactNode;
	renderRight?: (props: HeadlineRenderProps) => ReactNode;
	renderCaption?: (props: TextProps) => ReactNode;
	renderTitle: (props: TextProps) => ReactNode;
	renderSubtitle?: (props: TextProps) => ReactNode;
	/**
	 *  The spacing between the children of the container
	 *
	 * @default 0.5
	 */
	spacing?: ResponsiveValue<ThemeSpacing>;
};

export type HeadlineProps<Element extends ElementType = PolymorphicDefaultElement> = BoxProps<
	Element,
	HeadlineOtherProps
>;

export type HeadlineRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
