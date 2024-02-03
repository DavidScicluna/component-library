import type { ReactNode } from 'react';

import type { PolymorphicElementType, ResponsiveValue, ThemeAppAppearanceProps, ThemeSpacing } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { TextDefaultElement, TextProps } from '@components/Typography';

export type HeadlineRenderProps = { w: string; h: string };

type HeadlineOtherProps = ThemeAppAppearanceProps & {
	renderLeft?: (props: HeadlineRenderProps) => ReactNode;
	renderRight?: (props: HeadlineRenderProps) => ReactNode;
	renderCaption?: (props: TextProps<TextDefaultElement>) => ReactNode;
	renderTitle: (props: TextProps<TextDefaultElement>) => ReactNode;
	renderSubtitle?: (props: TextProps<TextDefaultElement>) => ReactNode;
	/**
	 *  The spacing between the children of the container
	 *
	 * @default 0.5
	 */
	spacing?: ResponsiveValue<ThemeSpacing>;
};

export type HeadlineProps<Element extends PolymorphicElementType> = BoxProps<Element, HeadlineOtherProps>;

export type HeadlineRef<Element extends PolymorphicElementType> = BoxRef<Element>;
