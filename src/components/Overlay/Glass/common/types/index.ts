import { ElementType } from 'react';

import type { Space } from '@common/types/theme';

import type { BoxProps, BoxRef } from '@components/Layout/Box/common/types';

export type GlassSize = Space;

export type GlassProps<Element extends ElementType> = BoxProps<Element> & {
	size?: GlassSize;
};

export type GlassRef<Element extends ElementType> = BoxRef<Element>;
