import { ElementType } from 'react';

import type { ResponsiveValue } from '@common/types';
import type { Space } from '@common/types/theme';

import type { BoxProps, BoxRef } from '@components/Box/common/types';

type CenterOtherProps = { spacing?: ResponsiveValue<Space> };

export type CenterProps<Element extends ElementType> = BoxProps<Element, CenterOtherProps>;

export type CenterRef<Element extends ElementType> = BoxRef<Element>;
