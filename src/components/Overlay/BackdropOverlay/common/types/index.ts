import { ElementType } from 'react';

import type { CommonAppThemeProps } from '@common/types/theme';

import type { BoxProps, BoxRef } from '@components/Box/common/types';

export type BackdropOverlayProps<Element extends ElementType> = BoxProps<Element> & CommonAppThemeProps;

export type BackdropOverlayRef<Element extends ElementType> = BoxRef<Element>;
