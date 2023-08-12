import type { ElementType } from 'react';

import type { BoxProps, BoxRef } from '@components/Box';

export type PortalProps<Element extends ElementType> = BoxProps<Element>;

export type PortalRef<Element extends ElementType> = BoxRef<Element>;
