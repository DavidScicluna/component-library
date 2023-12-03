import type { ElementType } from 'react';

import type { PolymorphicDefaultElement, ResponsiveValue, ThemeSpacing } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

type SpaceOtherProps = {
	width?: ResponsiveValue<ThemeSpacing>;
	height?: ResponsiveValue<ThemeSpacing>;
};

export type SpaceProps<Element extends ElementType = PolymorphicDefaultElement> = BoxProps<Element, SpaceOtherProps>;

export type SpaceRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
