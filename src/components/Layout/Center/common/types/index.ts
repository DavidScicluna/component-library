import { ElementType } from 'react';

import { ResponsiveValue } from '@common/types';
import { Space } from '@common/types/theme';

import { BoxProps, BoxRef } from '@components/Layout/Box/common/types';

type CenterOtherProps = { spacing?: ResponsiveValue<Space> };

export type CenterProps<Element extends ElementType> = BoxProps<Element, CenterOtherProps>;

export type CenterRef<Element extends ElementType> = BoxRef<Element>;
