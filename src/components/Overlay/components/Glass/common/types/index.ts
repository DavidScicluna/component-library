import { ResponsiveValue } from '@common/types';
import { BackdropBlur } from '@common/types/classes';
import { PolymorphicDefaultElement } from '@common/types/polymorphic';
import { CommonAppThemeProps } from '@common/types/theme';

import type { BoxProps, BoxRef } from '@components/Box/common/types';

export type GlassBlur = BackdropBlur;

type GlassElement = PolymorphicDefaultElement;

type GlassOtherProps = CommonAppThemeProps & {
	/**
	 * The amount of the blur effect to be applied ("base", "none", "sm", "lg", "xl", "md", "2xl", "3xl")
	 *
	 * @default 'base'
	 */
	blur?: ResponsiveValue<GlassBlur>;
	/**
	 * If `true` a background depending on color & colorMode will be shown alongside the blur effect
	 *
	 * @default true
	 */
	hasBackground?: boolean;
};

export type GlassProps = BoxProps<GlassElement, GlassOtherProps>;

export type GlassRef = BoxRef<GlassElement>;
