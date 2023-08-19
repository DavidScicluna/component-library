import type { ElementType } from 'react';

import type { ResponsiveValue } from '@common/types';
import type { Space } from '@common/types/theme';

import type { BoxProps, BoxRef } from '@components/Box/common/types';

export type SpaceDimension = Space;

type SpaceOtherProps = {
	width?: ResponsiveValue<SpaceDimension>;
	height?: ResponsiveValue<SpaceDimension>;
};

export type SpaceProps<Element extends ElementType> = BoxProps<Element, SpaceOtherProps>;

export type SpaceRef<Element extends ElementType> = BoxRef<Element>;
