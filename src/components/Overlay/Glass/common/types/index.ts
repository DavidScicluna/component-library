import { ResponsiveValue } from '@common/types';
import { BackdropBlur } from '@common/types/classes';
import { CommonThemeProps } from '@common/types/theme';

import type { BoxProps, BoxRef } from '@components/Layout/Box/common/types';

export type GlassBlur = BackdropBlur;

type GlassOtherProps = CommonThemeProps & { blur?: ResponsiveValue<GlassBlur> };

export type GlassProps = BoxProps<'div', GlassOtherProps>;

export type GlassRef = BoxRef<'div'>;
