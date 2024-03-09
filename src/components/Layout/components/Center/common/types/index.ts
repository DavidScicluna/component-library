import type { PolymorphicElementType, ResponsiveValueProps, ThemeSpacing } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

export type CenterNonResponsiveValueProps = { spacing?: ThemeSpacing };
export type CenterResponsiveValueProps = ResponsiveValueProps<CenterNonResponsiveValueProps>;

export type CenterUniqueProps = BoxOtherProps & CenterResponsiveValueProps;

export type CenterProps<Element extends PolymorphicElementType> = BoxProps<Element, CenterUniqueProps>;

export type CenterRef<Element extends PolymorphicElementType> = BoxRef<Element>;
