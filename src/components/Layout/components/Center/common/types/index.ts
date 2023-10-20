import type { ElementType } from 'react';

import type { ResponsiveValue, ThemeSpacing } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

type CenterOtherProps = {
	spacing?: ResponsiveValue<ThemeSpacing>;
};

export type CenterProps<Element extends ElementType> = BoxProps<Element, CenterOtherProps>;

export type CenterRef<Element extends ElementType> = BoxRef<Element>;
