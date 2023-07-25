import { __DEFAULT_POLYMORPHIC_ELEMENT__ } from '@common/constants';
import { ResponsiveValue } from '@common/types';
import { BackdropBlur } from '@common/types/classes';
import { CommonThemeProps } from '@common/types/theme';

import type { BoxProps, BoxRef } from '@components/Box/common/types';

export type GlassBlur = BackdropBlur;

type GlassElementType = typeof __DEFAULT_POLYMORPHIC_ELEMENT__;

type GlassOtherProps = CommonThemeProps & {
	/**
	 * The amount of blurring to be applied
	 *
	 * @default 'base'
	 */
	blur?: ResponsiveValue<GlassBlur>;
	/**
	 * Whether the blur effect has a background color applied
	 *
	 * @default true
	 */
	hasBackground?: boolean;
};

export type GlassProps = BoxProps<GlassElementType, GlassOtherProps>;

export type GlassRef = BoxRef<GlassElementType>;
