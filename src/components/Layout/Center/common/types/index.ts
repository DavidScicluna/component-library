import { ElementType } from 'react';

import type { ResponsiveValue } from '../../../../../common/types';
import type { Space } from '../../../../../common/types/theme';
import type { BoxProps, BoxRef } from '../../../Box/common/types';

export type CenterProps<Element extends ElementType> = BoxProps<Element, { spacing?: ResponsiveValue<Space> }>;

export type CenterRef<Element extends ElementType> = BoxRef<Element>;
