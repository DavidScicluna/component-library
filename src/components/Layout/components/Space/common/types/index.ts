import type { PolymorphicElementType, ResponsiveValueProps, ThemeSpacing } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

export type SpaceNonResponsiveValueProps = { width?: ThemeSpacing; height?: ThemeSpacing };
export type SpaceResponsiveValueProps = ResponsiveValueProps<SpaceNonResponsiveValueProps>;

export type SpaceUniqueProps = BoxOtherProps & SpaceResponsiveValueProps;

export type SpaceProps<Element extends PolymorphicElementType> = BoxProps<Element, SpaceUniqueProps>;

export type SpaceRef<Element extends PolymorphicElementType> = BoxRef<Element>;
