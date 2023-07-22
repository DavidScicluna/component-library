import { ElementType } from 'react';

import { Space } from '@common/types/theme';

import { BoxProps, BoxRef } from '@components/Layout/Box/common/types';

export type GlassSize = Space;

export type GlassProps<Element extends ElementType> = BoxProps<Element> & {
	size?: GlassSize;
};

export type GlassRef<Element extends ElementType> = BoxRef<Element>;
