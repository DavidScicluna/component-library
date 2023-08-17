import type { ElementType } from 'react';

import type { ResponsiveValue } from '@common/types';
import type { BackdropBlur } from '@common/types/classes';
import type { CommonAppThemeProps } from '@common/types/theme';

import type { BoxProps, BoxRef } from '@components/Box/common/types';

export type GlassBlur = BackdropBlur;

interface GlassOtherProps extends CommonAppThemeProps {
	/**
	 * The amount of the blur effect to be applied ("none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl")
	 *
	 * @default 'md'
	 */
	blur?: ResponsiveValue<GlassBlur>;
	/**
	 * If `true` the blur will be a backdrop filter blur else it will be a normal blur
	 *
	 * @default true
	 */
	isBackdrop?: boolean;
	/**
	 * If `true` a background depending on color & colorMode will be shown alongside the blur effect
	 *
	 * @default true
	 */
	hasBackground?: boolean;
}

export type GlassProps<Element extends ElementType> = BoxProps<Element, GlassOtherProps>;

export type GlassRef<Element extends ElementType> = BoxRef<Element>;
